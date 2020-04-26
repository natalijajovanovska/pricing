import {
  descriptions,
  gigabyte,
  megabyte,
  periods,
  perUser,
  symbols
} from './Card';

function getAsterisk(plan) {
  if (plan === 'plus' || plan === 'professional') {
    return ' *'
  }
  return ''
}

const Card = ({ item, period, currency }) => {
  const plan = item.Name;
  const price = item.Pricing[period] / 100;
  const monthlyPrice = item.Pricing['1'] / 100;
  const isProfessional = plan === 'professional';
  const storageAmountGB = item.MaxSpace / gigabyte;
  const storageAmountMB = item.MaxSpace / megabyte;
  const isInGigabytes = storageAmountMB >= 1023;
  const storage = isInGigabytes ? `${storageAmountGB} GB` : `${storageAmountMB} MB`
  const domainSupport = item.MaxDomains === 0
    ? 'No domain support'
    : `Supports ${item.MaxDomains} domain${item.MaxDomains !== 1 ? 's' : ''}`;

  return <>
    <div className="card">

      <header>
        {plan === 'plus' && <span className="most-popular">MOST POPULAR</span>}
        <h3 className='plan'>{plan}</h3>
        <p>{symbols[currency]} <span>{monthlyPrice}</span>/mo</p>
        {period !== '1' && plan !== 'free' &&
          <p className="yearly-rate">Billed as {symbols[currency]}{price} per {periods[period]}</p>}
      </header>
      <div className="content">
        <p className="descriptions">{descriptions[plan]}</p>
        <ul>
          <li>{item.MaxMembers}{isProfessional && ' - 5000'} user{isProfessional && ' *'}</li>
          <li>{storage} storage {isProfessional && perUser}{getAsterisk(plan)}</li>
          <li>{item.MaxAddresses} address{item.MaxAddresses !== 1 ? 'es' : ''} {isProfessional && perUser}{getAsterisk(plan)}</li>
          <li>{domainSupport}{getAsterisk(plan)}</li>
          {plan === 'visionary' && <li>Includes all features</li>}
          {plan === 'visionary' && <li>Priority Support</li>}
          {plan === 'plus' && <li>Supports folders, labels, filters, auto-reply, IMAP/SMTP and more</li>}
          {plan === 'professional' && <li>Catch all email, multi user management, priority support and more</li>}
          <li>{item.MaxVPN === 0 ? 'ProtonVPN (optional) *' : 'Includes ProtonVPN'}</li>
        </ul>
      </div>

      <footer>
        <button className="btn btn-color">Select</button>
      </footer>

    </div>
    <style jsx>{`
        .card {
          border: 1px solid #eaeaea;
          border-radius: 3px;
          padding: .375rem 1.5rem 3rem;
          text-align: center;
          width: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        @media (max-width: 1150px) and (min-width: 650px) {
          .card {
            flex: 0 1 40vw;
          }
        }
        p {
          margin: 0;
        }
        header {
          display: flex;
          flex-direction: column;
          flex: 0 1 160px;
        }
        footer {
          margin: auto auto 0;
        }
        .most-popular {
          color: #7cb458;
          font-size: 0.875rem;
          font-weight: 600;
          position: absolute;
          top: 1%;
          left: 35%;
        }
        .yearly-rate {
          font-size: 0.75rem;
          margin: 0.625rem 0 0;
          padding: 0;
        }
        span {
          font-size: 1.5rem;
        }
        h3 {
          text-transform: uppercase;
        }
        .descriptions {
          margin-bottom: 2rem;
        }
        ul {
          text-align: left;
          list-style-type: '${'\\2192'}';
          padding: 0 1.5rem;
          margin: 1rem auto;
        }
        li {
          padding: 0 0 1rem 1rem;
        }
        li:last-child {
          margin-bottom: 0;
        }
        .btn {
          user-select: none;
          transition:all .2s ease-in-out;
          padding: 1rem 1.875rem;
          border: 2px solid rgba(0,0,0,.15);
          border-radius: .25rem;
          cursor:pointer;
        }
        .btn-color {
          display: block;
          font-weight: 400;
          background-color: #6880dd;
          color: white;
          font-size: .875rem;
          letter-spacing: 1px;
        }
      `}</style>
  </>
};

export default Card
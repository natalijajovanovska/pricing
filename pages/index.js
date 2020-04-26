import Head from 'next/head';
import PricingPlans from '../components/PricingPlans';
import fetchPlans from '../helpers/fetchPlans';

const currencyCodes = {
  CHF: 'CHF',
  EUR: 'EUR',
  USD: 'USD'
}

const freePlan = {
  Name: 'free',
  MaxMembers: 1,
  MaxSpace: 524288000,
  MaxAddresses: 1,
  MaxDomains: 0,
  MaxVPN: 0,
  Pricing: {
    1: 0,
    12: 0,
    24: 0,
  }
};

export async function getStaticProps() {
  return {
    props: {
      plans: {
        [currencyCodes.CHF]: await fetchPlans(currencyCodes.CHF),
        [currencyCodes.EUR]: await fetchPlans(currencyCodes.EUR),
        [currencyCodes.USD]: await fetchPlans(currencyCodes.USD),
        freePlan
      }
    }
  };
}

const Pricing = ({ plans }) => (
  <div className="container">
    <Head>
      <title>Pricing Plans</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <PricingPlans items={plans} />
    </main>
    
    <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      a {
        color: inherit;
        text-decoration: none;
      }
    `}</style>
    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: Lato,sans-serif;
      }
      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
)

export default Pricing;
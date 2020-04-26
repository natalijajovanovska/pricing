import { useState } from 'react';
import Card from './Card';

const defaults = {
  currency: 'EUR',
  period: '12'
};

const PricingPlans = ({ items }) => {
  const [currency, setCurrency] = useState(defaults.currency);
  const [period, setPeriod] = useState(defaults.period);

  const [plusPlan] = items[currency].filter(item => { return item.Name === 'plus' });
  const [professionalPlan] = items[currency].filter(item => { return item.Name === 'professional' });
  const [visionaryPlan] = items[currency].filter(item => { return item.Name === 'visionary' });

  return <div className="plans">
    <h2>
      Plans &amp; Prices
    </h2>
    <div className="plan-selectors">
      <select defaultValue={period} onChange={e => setPeriod(e.target.value)}>
        <option value="1">Monthly</option>
        <option value="12">Annually</option>
        <option value="24">2 years</option>
      </select>
      <select defaultValue={currency} onChange={e => setCurrency(e.target.value)}>
        <option value="CHF">fr Swiss franc</option>
        <option value="EUR">€ Euro</option>
        <option value="USD">$ US dollar</option>
      </select>
    </div>
    <div className="grid">
      <Card
        item={items.freePlan}
        currency={currency}
        period={period}
      ></Card>
      {plusPlan &&
        <Card
          item={plusPlan}
          currency={currency}
          period={period}
        ></Card>}
      {professionalPlan &&
        <Card
          item={professionalPlan}
          currency={currency}
          period={period}
        ></Card>}
      {visionaryPlan &&
        <Card
          item={visionaryPlan}
          currency={currency}
          period={period}
        ></Card>}
    </div>
    
    <style jsx>{`
      .plan-selectors {
        color: rgb(80, 80, 97);
        display: flex;
        justify-content: flex-end;
        margin: 1rem 0;
      }
      select {
        border: 1px solid #eaeaea;
        border-radius: 2px;
        color: inherit;
        line-height: 1.25rem;
        margin-left: 0.5rem;
        padding: 2px 10px;
      }
      h2 {
        margin: 1rem 0;
        color: rgb(80, 80, 97);
      }
      .grid {
        display: flex;
        flex-direction: row;
        justify-content: center;
      }
      @media (max-width: 1024px) {
        .grid {
          flex-wrap: wrap;
        }
      }
    `}</style>
  </div>
};

export default PricingPlans;
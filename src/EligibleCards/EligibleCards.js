import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import CardList from '../CardList/CardList';
import TotalCredit from '../TotalCredit/TotalCredit';
import axios from 'axios';

export default function EligibleCards() {
  const [eligibleCards, setEligibleCards] = useState([]);
  const api_url = `http://localhost:8000/cards`;
  const history = useHistory();
  const retrievedObject = localStorage.getItem('current customer');
  const currentCustomer = JSON.parse(retrievedObject);

  useEffect(() => {
    getEligibleCards();
    // eslint-disable-next-line
  }, []);

  const getEligibleCards = async () => {
    try {
      const res = await axios.get(api_url);
      const allCards = res.data;
      console.log(allCards);
      const Cards = [];
      const Student = allCards[0];
      const Anywhere = allCards[1];
      const Liquid = allCards[2];

      if (currentCustomer) {
        Cards.push(Anywhere);
      }
      if (currentCustomer.employment === 'Student') {
        Cards.push(Student);
      }
      if (currentCustomer.income > 16000) {
        Cards.push(Liquid);
      }
      setEligibleCards(Cards);
    } catch (error) {
      console.log('Something went wrong!', error);
    }
  };

  return (
    <div>
      <h1>
        {currentCustomer.title} {currentCustomer.firstName}{' '}
        {currentCustomer.lastName}
      </h1>
      <h3>Please see eligible cards below</h3>
      <div className="container">
        <div className="row">
          {eligibleCards.map((card, index) => {
            return <CardList eligibleCards={card} key={index} />;
          })}
        </div>
      </div>
      <TotalCredit eligibleCards={eligibleCards} />
      <div className="container">
        <button
          className="btn btn-primary"
          onClick={() => {
            history.goBack();
            localStorage.clear();
          }}>
          Go back
        </button>
      </div>
    </div>
  );
}

import React, { useState } from 'react';

export default function TotalCredit(props) {
  console.log(props);
  const [totalAmount, setTotalAmount] = useState(0);

  function updateTotal(e, amount) {
    setTotalAmount((totalAmount) => {
      if (e.target.checked) {
        totalAmount = totalAmount + amount;
        return totalAmount;
      } else {
        totalAmount = totalAmount - amount;
        return totalAmount;
      }
    });
  }

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="col-md-2">
        <p><strong>Please select cards:</strong></p>
      </div>
      <div data-testid="card" className="col-md-2">
        {props.eligibleCards.map((item, index) => {
          return (
            <div key={item.id} className="checkbox">
              <label className="label">
                <input
                  type="checkbox"
                  value={item.credit_available}
                  id={item.id}
                  onChange={(e) => {
                    updateTotal(e, item.credit_available);
                  }}
                  data-testid="checkbox"
                />
                {'   '}
                {props.eligibleCards[index].name}
                {''}
              </label>
            </div>
          );
        })}
      </div>
      <div>
        <p>
          <strong>Total Credit Available :</strong> £{totalAmount}
        </p>
      </div>
    </div>
  );
}

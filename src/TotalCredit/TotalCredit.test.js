import { unmountComponentAtNode } from 'react-dom';
import TotalCredit from './TotalCredit.js';
import React from 'react';
import { render, act } from '@testing-library/react';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('checkbox changes value when checked', () => {
  const props = [
    {
      id: 1,
      name: 'Student Life',
      apr: '18.9%',
      balance_transfer_offer_duration: '0 months',
      purchase_offer_duration: '6 Months',
      credit_available: 1200,
    },
  ];

  const onChange = jest.fn();

  act(() => {
    render(
      <TotalCredit onChange={onChange} eligibleCards={props} />,
      container
    );
  });

  const checkbox = document.querySelector('[data-testid=checkbox]');
  expect(checkbox.checked).toEqual(false);

  act(() => {
    checkbox.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
  expect(checkbox.checked).toEqual(true);

  act(() => {
    for (let i = 0; i < 5; i++) {
      checkbox.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    }
  });
  expect(checkbox.checked).toEqual(false);
});

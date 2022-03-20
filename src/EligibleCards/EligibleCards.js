export default function EligibleCards() {
  const retrievedObject = localStorage.getItem('current customer');
  const currentCustomer = JSON.parse(retrievedObject);

  console.log('current customer');
  console.log(currentCustomer);
  return (
    <div>
      <h1>
        {currentCustomer.title} {currentCustomer.firstName}{' '}
        {currentCustomer.lastName}
      </h1>
      <h3>Please see eligible cards below</h3>
    </div>
  );
}

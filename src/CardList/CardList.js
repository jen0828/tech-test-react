import { Card } from 'react-bootstrap';

export default function CardList(props) {

  // console.log('CardList -props')
  // console.log(props)

  return (
    <div className="col-md-4">
      <br/>
      <Card border="info" style={{ width: '18rem' }}>
        <Card.Header>
          <strong>Name:</strong> {props.eligibleCards.name}{' '}
        </Card.Header>
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">
            <strong>Apr:</strong> {props.eligibleCards.apr}{' '}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            <strong>Balance Transfer Offer Duration:</strong>{' '}
            {props.eligibleCards.balance_transfer_offer_duration}{' '}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            <strong>Purchase Offer Duration:</strong>{' '}
            {props.eligibleCards.purchase_offer_duration}{' '}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            <strong>Credit Available:</strong>{' '}
            £{props.eligibleCards.credit_available}
          </Card.Subtitle>
        </Card.Body>
      </Card>
      <br />
    </div>
  );
}

import { render, screen} from "@testing-library/react";
import CardList from "./CardList";

const mockData = jest.fn();

describe('CardList', () => {
  it('renders CardList component', () => {
    render(<CardList eligibleCards={mockData}/>);
    expect(screen.getByText(/Name:/i)).toBeInTheDocument();
    expect(screen.getByText(/Apr:/i)).toBeInTheDocument();
    expect(screen.getByText(/Balance Transfer Offer Duration:/i)).toBeInTheDocument();
    expect(screen.getByText(/Purchase Offer Duration:/i)).toBeInTheDocument();
    expect(screen.getByText(/Credit Available:/i)).toBeInTheDocument();
  });
});

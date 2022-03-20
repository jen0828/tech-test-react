import SubmitForm from './SubmitForm';
import { render, screen } from '@testing-library/react';

describe('SubmitForm', () => {
  it('should have input fields', () => {
    render(<SubmitForm />);
    const titleField = screen.getByLabelText(/title/i);
    const firstNameField = screen.getByLabelText(/first name/i);
    const lastNameField = screen.getByLabelText(/last name/i);
    const dobField = screen.getByLabelText(/dob/i);
    const employmentField = screen.getByLabelText(/employment/i);
    const incomeField = screen.getByLabelText(/income/i);
    const houseNumberField = screen.getByLabelText(/house number/i);
    const postcodeField = screen.getByLabelText(/postcode/i);
    expect(titleField).toBeInTheDocument();
    expect(firstNameField).toBeInTheDocument();
    expect(lastNameField).toBeInTheDocument();
    expect(dobField).toBeInTheDocument();
    expect(employmentField).toBeInTheDocument();
    expect(incomeField).toBeInTheDocument();
    expect(houseNumberField).toBeInTheDocument();
    expect(postcodeField).toBeInTheDocument();
  });
});

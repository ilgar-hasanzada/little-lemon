import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

test('renders the "Choose date" label in BookingForm', () => {
  const availableTimes = ['17:00', '18:00']; // hər hansı dəyərlər ola bilər
  const dispatch = jest.fn();

  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />);

  const labelElement = screen.getByText('Choose date');
  expect(labelElement).toBeInTheDocument();
});
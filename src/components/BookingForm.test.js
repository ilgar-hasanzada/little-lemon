import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

test('renders the "Choose date" label in BookingForm', () => {
  const availableTimes = ['17:00', '18:00'];
  const dispatch = jest.fn();
  const submitForm = jest.fn();

  render(
    <BookingForm
      availableTimes={availableTimes}
      dispatch={dispatch}
      submitForm={submitForm}
    />
  );

  const labelElement = screen.getByText('Choose date');
  expect(labelElement).toBeInTheDocument();
});
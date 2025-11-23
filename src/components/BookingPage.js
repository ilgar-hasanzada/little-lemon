import BookingForm from './BookingForm';

function BookingPage({ availableTimes, dispatch }) {
  return (
    <section className="booking-page">
      <h1>Reserve a table</h1>
      <p>
        Please choose a date, time, number of guests and occasion to make your
        reservation.
      </p>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </section>
  );
}

export default BookingPage;
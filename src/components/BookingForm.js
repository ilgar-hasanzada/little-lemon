import { useState } from 'react';

function BookingForm({ availableTimes, dispatch }) {
  // Form sahələrinin state-ləri (controlled component)
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Reservation details:', {
      date,
      time,
      guests,
      occasion,
    });

    alert(
      `Reservation submitted:\nDate: ${date}\nTime: ${time}\nGuests: ${guests}\nOccasion: ${occasion}`
    );
  };

  // Tarix dəyişəndə həm lokal state-i, həm də reducer-i yeniləyirik
  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    // Main-dəki reducer-ə xəbər veririk
    dispatch({ type: 'SET_DATE', date: newDate });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="booking-form"
      style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}
    >
      {/* Date */}
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        required
      />

      {/* Time */}
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      >
        <option value="" disabled>
          Select time
        </option>
        {availableTimes.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>

      {/* Number of guests */}
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        placeholder="1"
        required
      />

      {/* Occasion */}
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      {/* Submit button */}
      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm;
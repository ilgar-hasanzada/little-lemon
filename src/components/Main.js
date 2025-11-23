import { Routes, Route } from 'react-router-dom';
import { useReducer } from 'react';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import { initializeTimes, updateTimes } from '../utils/times';

function Main() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
            />
          }
        />
      </Routes>
    </main>
  );
}

export default Main;
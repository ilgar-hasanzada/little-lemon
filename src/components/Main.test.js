import { initializeTimes, updateTimes } from '../utils/times';

test('initializeTimes returns the correct initial times array', () => {
  const result = initializeTimes();
  expect(result).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
});

test('updateTimes returns the same state for SET_DATE action (for now)', () => {
  const initialState = ['17:00', '18:00', '19:00'];
  const action = { type: 'SET_DATE', date: '2025-10-10' };

  const result = updateTimes(initialState, action);

  expect(result).toEqual(initialState);
});
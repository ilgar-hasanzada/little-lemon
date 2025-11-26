// src/utils/times.js

// Burda globalThis istifadə edirik ki,
// həm browserdə (window), həm də Jest test mühitində (global) işləsin.
function getFetchAPI() {
  if (
    typeof globalThis !== 'undefined' &&
    typeof globalThis.fetchAPI === 'function'
  ) {
    return globalThis.fetchAPI;
  }
  return null;
}

// İlk açılışda bugünkü tarix üçün saatları götür
export function initializeTimes() {
  const today = new Date();

  const api = getFetchAPI();
  if (api) {
    return api(today);
  }

  // Əgər nə isə səbəbdən API hələ yüklənməyibsə,
  // app çöküb ağ ekran verməsin deyə fallback dəyərlər:
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
}

// Tarix dəyişəndə reducer bu funksiyanı işə salır
export function updateTimes(state, action) {
  switch (action.type) {
    case 'SET_DATE': {
      const api = getFetchAPI();
      if (api) {
        const selectedDate = new Date(action.date);
        return api(selectedDate);
      }
      // API yoxdursa, mövcud state-i saxlayırıq ki, error olmasın
      return state;
    }
    default:
      return state;
  }
}
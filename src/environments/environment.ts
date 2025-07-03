export const environment = {
  production: false,
  apiUrl:
    window.location.hostname === 'localhost'
      ? 'http://localhost:5000/api'
      : 'http://localhost:5000/api',
  trackingApiUrl: 'http://localhost:5000/api/visit',
};

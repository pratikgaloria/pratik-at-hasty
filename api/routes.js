import fetch from 'node-fetch';

const baseUrl = '/api';
const apiUrl = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings';

module.exports = (app) => {
  app.get(baseUrl, (req, res) => res.status(200).send({
    message: 'Welcome to Hasty API!',
  }));

  app.get(`${baseUrl}/ticker`, (req, res) => {
    const url = `${apiUrl}/latest`;

    fetch(url, {
      method: 'GET',
      headers: {
        'X-CMC_PRO_API_KEY': 'e059e24e-3119-4ef5-8032-b4307ec8049b',
      },
    })
      .then(response => response.json())
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  });
};

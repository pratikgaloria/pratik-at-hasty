import api from 'app/services/api';
import * as services from 'app/services/ticker';

it('should call getTicker service with limit', (done) => {
  const expectedData = {
    data: [
      {
        id: 1,
        cmc_rank: 1,
        name: 'Bitcoin',
        quote: {
          USD: {
            price: 11379.82,
            market_cap: 203352417289.25,
          },
        },
      },
    ],
  };
  const httpServiceGetMock = jest.fn();
  api.get = httpServiceGetMock.mockReturnValue(Promise.resolve(expectedData));

  services.getTicker(10).then((data) => {
    expect(data).toEqual(expectedData);

    expect(httpServiceGetMock.mock.calls[0][0]).toBe(services.baseURL);
    expect(httpServiceGetMock.mock.calls[0][1]).toStrictEqual({
      params: {
        limit: 10,
      },
    });

    done();
  });
});

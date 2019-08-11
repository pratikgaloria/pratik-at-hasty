import api from 'app/services/api';
import * as services from 'app/services/ticker';
import { coin1 as coin } from 'tests/mocks/ticker';

it('should call getTicker service with limit', (done) => {
  const expectedData = {
    data: [coin],
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

const { formatPhoneNumber } = require('../../../util/formatPhoneNumber');

describe('formatPhoneNumber', () => {
  test('Correctly formats phone number', () => {
    const actual = formatPhoneNumber('M<>,\\j1kl23o978');
    const expected = '+123978';
    expect(actual).toEqual(expected);
  });
});

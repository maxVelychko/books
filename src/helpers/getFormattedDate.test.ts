import getFormattedDate from './getFormattedDate';

describe('getFormattedDate', () => {
  it('returns empty string if date is not provided', () => {
    const date = '';
    const expected = '';

    const actual = getFormattedDate(date);

    expect(actual).toEqual(expected);
  });

  it('returns formatted date', () => {
    const date = '2019-04-27T16:50:47.095Z';
    const expected = 'Apr 27, 2019';

    const actual = getFormattedDate(date);

    expect(actual).toEqual(expected);
  });
});

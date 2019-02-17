//Good coverage and well written tests

const {
  joinNames
} = require('../src');

describe('joinNames', () => {
  it('returns string with estimated time of arrival', () => {
    expect(joinNames([{
      name: 'Bart'
    }, {
      name: 'Lisa'
    }, {
      name: 'Maggie'
    }])).toEqual("Bart, Lisa & Maggie");
  });
  it('returns string with estimated time of arrival', () => {
    expect(joinNames([{
      name: 'Bart'
    }, {
      name: 'Lisa'
    }, {
      name: 'Maggie'
    }, {
      name: 'Steve'
    }])).toEqual("Bart, Lisa, Maggie & Steve");
  });
});

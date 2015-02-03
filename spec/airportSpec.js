var Airport = require('../src/airport')

describe('airport',function(){

  var airport = new Airport();

  it('should have zero planes initially',function(){
    expect(airport.planes).toBe(0);
  });
});
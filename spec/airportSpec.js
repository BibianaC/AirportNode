var Airport = require('../src/airport');
var Plane = require('../src/plane');

describe('airport',function(){

  var airport = new Airport();
  var plane = new Plane();

  it('should have zero planes initially',function(){
    expect(airport.planes).toBe(0);
  });

  it('should have a default capacity of 20', function() {
    expect(airport.capacity).toBe(20);
  });

  it('should be able to accept planes', function() {
    airport.accept(plane);
    expect(airport.planes).toBe(1);
  });

});
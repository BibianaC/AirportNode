var Airport = require('../src/airport');
var Plane = require('../src/plane');

describe('airport',function(){

  var airport;
  var plane; 

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
  });

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

  it('should not accept the plane if capacity is full',function(){
    for(var i=0;i<20;i++){
      p = new Plane();
      airport.accept(p);
    }
    expect(airport.accept(plane)).toBe("Airport is full");
  });

  it('should be able to release planes', function() {
    airport.accept(plane);
    airport.release(plane);
    expect(airport.planes).toBe(0);
  });

});
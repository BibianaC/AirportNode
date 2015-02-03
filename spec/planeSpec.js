var Plane = require('../src/plane');



describe('plane',function(){
  
  var plane;

  beforeEach(function(){
    plane = new Plane();
  });

  it('should have flying status initially',function(){
    expect(plane.isFlying()).toBe(true);
  });
});
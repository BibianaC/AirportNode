function Airport(){
   this.planes = 0;
   this.capacity = 20;
   this.runaway = [];
}

Airport.prototype.accept = function(plane) {
  if (this.capacity - 1 > this.planes) {
    this.runaway.push(plane);
    plane.land();
    this.planes += 1;
  } else {
    return "Airport is full";
  }
};

Airport.prototype.release = function(plane) {
  for(var i = 0; i < this.planes; i++){
    if (this.runaway[i] === plane) {
      this.runaway.splice(i, 1);
      plane.takeOff();
      this.planes -= 1;
      return plane;
    }
  }
};


module.exports = Airport;
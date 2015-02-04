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


module.exports = Airport;
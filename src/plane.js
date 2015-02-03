function Plane(){
  this.flying = true;
}

Plane.prototype.isFlying = function() {
  return this.flying;
};

module.exports = Plane;
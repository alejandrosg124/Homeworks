class GreenZone {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(zone) {
    if (zone instanceof GreenZone) {
      this.children.push(zone);
    } else {
      console.error("solo se puede añadir instancias como childs");
    }
  }
}

export default GreenZone; 
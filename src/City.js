import GreenZone from './GreenZone';

class City {
  constructor(name) {
    this.name = name;
    this.greenZones = null;
  }

  getTotalGreenZones() {
    if (!this.greenZones) return 0;
    let count = 0;
    const queue = [this.greenZones];
    while (queue.length > 0) {
      const currentZone = queue.shift();
      count++;
      if (currentZone.children) {
        for (const child of currentZone.children) {
          queue.push(child);
        }
      }
    }
    return count;
  }

  getGreenZoneTreeHeight() {
    if (!this.greenZones) return 0;
    const calculateHeight = (node) => {
      if (!node) return 0;
      if (!node.children || node.children.length === 0) return 1;
      return 1 + Math.max(...node.children.map(child => calculateHeight(child)));
    };
    return calculateHeight(this.greenZones);
  }
}

export default City;
export const calculateTotalGreenZones = (greenZonesTree) => {
  if (!greenZonesTree) {
    return 0;
  }
  let count = 0;
  const queue = [greenZonesTree];
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
};

export const calculateGreenZoneTreeHeight = (node) => {
  if (!node) {
    return -1;
  }
  let maxHeight = -1;
  if (node.children) {
      for (const child of node.children) {
        maxHeight = Math.max(maxHeight, calculateGreenZoneTreeHeight(child));
      }
  }
  return maxHeight + 1;
}; 
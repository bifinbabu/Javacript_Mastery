let activity = {
  recordMesgs: [
    {
      altitude: 904.5999999999999,
      cadence: 0,
      distance: 1000,
      enhancedAltitude: 904.5999999999999,
      enhancedSpeed: 0,
      fractionalCadence: 0,
      heartRate: 72,
      positionLat: 155194894,
      positionLong: 925192534,
      speed: 0,
      timestamp: "2023-10-04T20:10:15.000Z",
    },
    {
      altitude: 904.5999999999999,
      cadence: 0,
      distance: 3,
      enhancedAltitude: 904.5999999999999,
      enhancedSpeed: 0,
      fractionalCadence: 0,
      heartRate: 72,
      positionLat: 155194894,
      positionLong: 925192534,
      speed: 0,
      timestamp: "2023-10-04T20:10:16.000Z",
    },
  ],
};

let GreatObject = {
  myMainObject: [],
};

let currentObject = {
  myObject: [],
  totalDistance: 0,
};

activity.recordMesgs.forEach((obj) => {
  // Check if the total distance in the current object exceeds or equals 1000
  console.log(obj);
  if (currentObject.totalDistance + obj.distance >= 1000) {
    // Calculate remaining distance to fill the current object
    let remainingDistance = 1000 - currentObject.totalDistance;

    // Add the remaining distance to the current object
    currentObject.myObject.push(remainingDistance);

    // Create a new object in myMainObject and add the exceeding distance
    GreatObject.myMainObject.push(currentObject.myObject);

    // Reset currentObject and add the remaining distance
    currentObject = {
      myObject: [obj.distance - remainingDistance],
      totalDistance: obj.distance - remainingDistance,
    };
  } else {
    // Add the distance to the current object
    currentObject.myObject.push(obj.distance);
    currentObject.totalDistance += obj.distance;
  }
});

// Add the last object to myMainObject if there are remaining distances
if (currentObject.totalDistance > 0) {
  GreatObject.myMainObject.push(currentObject.myObject);
}

console.log(GreatObject.myMainObject);
console.log(GreatObject);

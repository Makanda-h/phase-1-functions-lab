// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
  const headquarters = 42;
  if (blocks > 42) {
    return blocks - headquarters;
  } else {
    return headquarters - blocks;
  }
}
//distanceFromHqInBlocks(50)
function distanceFromHqInFeet(blocks) {
  let distanceInFeet = distanceFromHqInBlocks(blocks) * 264; // calling a function inside another function
  return distanceInFeet;
}
// Write a function called distanceTravelledInFeet that takes in both the start and destination blocks,
//  and returns the number of feet travelled.
function distanceTravelledInFeet(start, destination) {
  if (start < destination) {
    return (destination - start) * 264;
  } else {
    return (start - destination) * 264;
  }
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  if (distance < 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else if (distance > 2500) {
    return "cannot travel that far";
  }
}

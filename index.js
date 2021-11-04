const drivers = ["Sally", "Bob", "Freddy", "Claudia"];

const returnFirstTwoDrivers = function () {
  return drivers.slice(0, 2);
};
const returnLastTwoDrivers = function () {
  return drivers.slice(2);
};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier() {
  return (ab) => {
    return ab * ab;
  };
}

const fareDoubler = (mul) => {
  return mul * 2;
};

const fareTripler = (mul) => {
  return mul * 3;
};

function selectDifferentDrivers(Jose, Mia) {
  return Mia(Jose);
}

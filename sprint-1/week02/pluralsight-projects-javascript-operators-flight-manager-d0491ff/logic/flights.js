function Flights() {
    function calculateNumberOfFlights(passengers, capacity) {
        let numberOfFlights = Math.ceil(passengers / capacity);
        return numberOfFlights;
        // if (passengers < 0 || (passengers ^ 0) !== passengers) {
        //     return "The number of passengers must be a positive integer value";
        // } else if (capacity < 0 || (capacity ^ 0) !== capacity) {
        //     return "The capacity of the flight must be a positive integer value";
        // }
    }
    function checkAircraftRevision(distanceLimit, distancesArray) {
        let sum = 0;
        for (let i = 0; i < distancesArray.length; i++){
            sum += distancesArray[i];
        }
        if (sum <= (distanceLimit / 2)) {
            return "The revision needs to be done within the next 3 months";
        } else if (sum >= (distanceLimit / 2) && sum <= (distanceLimit * 0.75)) {
            return "The revision needs to be done within the next 2 months";
        } else if (sum >= (distanceLimit * 0.75) && sum < distanceLimit) {
            return "The revision needs to be done within the next month";
        } else if (sum > distanceLimit) {
            return "error";
        }
    }
    return { calculateNumberOfFlights, checkAircraftRevision }; 
}
module.exports = Flights();
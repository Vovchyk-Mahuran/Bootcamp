function Passengers() {
    function checkFlightCapacity(capacity, passengersArray) {
        let totalCapacity = 0;
        for (let i = 0; i < passengersArray.length; i++){
            totalCapacity += passengersArray[i];
        }
        if (totalCapacity < capacity) {
            return totalCapacity;
        } else {
            {
            return "Your data is wrong! Capacity of flights can't be less than capacity of passengers"
        }}
    }
    function distributeAllSeatsToAllPassengers(vipPassengers, regularPassengers, nrOfFlights, businessSeatsPerFlight, economySeatsPerFlight) {
        let vipPassengersWithBussinessSeats = 0,
            vipPassengersWithEconomySeats = 0,
            regularPassengersWithBussinessSeats = 0,
            regularPassengersWithEconomSeats = 0;
        for (let i = 1; i < businessSeatsPerFlight; i++){
            if (vipPassengers > i) {
                vipPassengersWithBussinessSeats++;
            } else {
                vipPassengersWithEconomySeats++;
            }
        }
        for (let i = 0; i < economySeatsPerFlight; i++){
            if (regularPassengers > i) {
                regularPassengersWithEconomSeats;
            }
            //  else {
            //     regularPassengersWithEconomSeats++;
            // }
        }

        let distribute = {
            vipPassengersWithBussinessSeats: vipPassengersWithBussinessSeats,
            vipPassengersWithEconomySeats: vipPassengersWithEconomySeats,
            regularPassengersWithBussinessSeats: regularPassengersWithBussinessSeats,
            regularPassengersWithEconomSeats:  regularPassengersWithEconomSeats
        }
        return distribute;
    }
    return {checkFlightCapacity, distributeAllSeatsToAllPassengers}; 
}

module.exports = Passengers();
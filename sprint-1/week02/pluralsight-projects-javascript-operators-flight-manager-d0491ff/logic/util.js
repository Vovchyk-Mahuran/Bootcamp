function Util() {
    function calculateTotalDistributedPassengers(distribute) {
        let totalPassengers = 0;
        for (key in distribute) {
            totalPassengers += key;
        }
        return totalPassengers;
    }
    // function calculateTotalNumberOfPassengers();
    return{calculateTotalDistributedPassengers}
}


module.exports = Util();
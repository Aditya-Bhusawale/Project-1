// Flight constructor
class Flight {
    constructor(id, isLanding, isCritical) {
        this.flightID = id;
        this.isLanding = isLanding;
        this.isCritical = isCritical;
    }
}

// Queue (FIFO) for regular requests
class CustomQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(flight) {
        this.queue.push(flight);
    }

    dequeue() {
        return this.queue.shift();
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

// Stack (LIFO) for critical requests
class CustomStack {
    constructor() {
        this.stack = [];
    }

    push(flight) {
        this.stack.push(flight);
    }

    pop() {
        return this.stack.pop();
    }

    isEmpty() {
        return this.stack.length === 0;
    }
}

// Main airport runway system
class AirportRunway {
    constructor() {
        this.runwayQueue = new CustomQueue();  // Regular flight requests
        this.criticalStack = new CustomStack();  // Critical landing requests
    }

    addRequest(flight) {
        if (flight.isLanding && flight.isCritical) {
            this.criticalStack.push(flight);  // Critical goes to stack
        } else {
            this.runwayQueue.enqueue(flight);  // Regular goes to queue
        }
    }

    processNextRequest() {
        if (!this.criticalStack.isEmpty()) {
            const flight = this.criticalStack.pop();
            return `Processing Critical Landing: ${flight.flightID}`;
        } else if (!this.runwayQueue.isEmpty()) {
            const flight = this.runwayQueue.dequeue();
            return flight.isLanding
                ? `Processing Landing: ${flight.flightID}`
                : `Processing Takeoff: ${flight.flightID}`;
        } else {
            return "No pending requests.";
        }
    }

    hasPendingRequests() {
        return !this.criticalStack.isEmpty() || !this.runwayQueue.isEmpty();
    }
}

// Instantiate the AirportRunway system
const runway = new AirportRunway();

// Function to add a flight from the user input
function addFlight() {
    const flightID = document.getElementById("flightID").value;
    const isLanding = document.querySelector('input[name="type"]:checked').value === "landing";
    const isCritical = document.getElementById("critical").checked;

    if (!flightID) {
        alert("Please enter a valid Flight ID.");
        return;
    }

    const flight = new Flight(flightID, isLanding, isCritical);
    runway.addRequest(flight);
    document.getElementById("status").textContent = `Flight ${flightID} added successfully.`;
}

// Function to process the next flight
function processFlight() {
    const status = runway.processNextRequest();
    document.getElementById("status").textContent = status;
}

// Function to check if there are pending requests
function checkPending() {
    const pending = runway.hasPendingRequests()
        ? "There are pending flight requests."
        : "No pending flight requests.";
    document.getElementById("status").textContent = pending;
}

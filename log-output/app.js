
const { randomUUID } = require("crypto");

// Generate a random UUID once when the application starts.
const randomString = randomUUID();

// Output the UUID with the current timestamp.
function logOutput() {
    console.log(`${new Date().toISOString()}: ${randomString}`);
}

// Log immediately on startup.
logOutput();

// Repeat every 5 seconds.
setInterval(logOutput, 5000);
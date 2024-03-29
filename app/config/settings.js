// If you're running on a device or in the Android simulator be sure to change
// let METEOR_URL = 'ws://localhost:3000/websocket';
// For testing on Apple devices, replace with the IP address of your connected computer
// let METEOR_URL = 'ws://hypercareprototype.canadaeast.cloudapp.azure.com:80/websocket';
let METEOR_URL = 'ws://localhost:3000/websocket';
if (process.env.NODE_ENV === 'production') {
    METEOR_URL = ''; // your production server url
}

export const settings = {
    env: process.env.NODE_ENV,
    METEOR_URL,
};

export default settings;
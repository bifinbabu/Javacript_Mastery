// time check

var utcString = "2023-10-06T08:35:54.000Z";

// Create a Date object from the UTC string (it will be interpreted as UTC time)
var utcDate = new Date(utcString);

// Convert UTC time to local time
var localDate = new Date(
  utcDate.getTime() + utcDate.getTimezoneOffset() * 60000
);

// Format the local date and time
var localTimeString = localDate.toLocaleString();

// Print the local date and time
console.log("Local time:", localTimeString);

var utcString = "2023-10-06T08:35:54.000Z";

// Convert UTC time string to UNIX timestamp
var unixTimestamp = Date.parse(utcString) / 1000;

// Print the UNIX timestamp
console.log("UNIX timestamp:", unixTimestamp);

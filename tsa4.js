function getTimestampInSeconds () {
    return Math.floor(Date.now() / 1000)
  }

let unix_timestamp = getTimestampInSeconds()
var date = new Date(unix_timestamp * 1000)

// Hours part from the timestamp
var hours = date.getHours()

// Minutes part from the timestamp
var minutes = "0" + date.getMinutes()
if (hours >= 13) hours = hours - 12

// Will display time in 10:30 format
var formattedTime = hours + ':' + minutes.substr(-2)

// Will determine if the time of day is am or pm
var ampm = "am"
if( hours > 12 ) {
    hours -= 12
    
} else {
    ampm = "pm"
}



console.log(formattedTime + ampm)
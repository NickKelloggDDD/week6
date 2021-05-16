// Goal: create an API for a front-end developer to consume short-term
// rental listings for a "best of Airbnb" web application. Include the 
// number of available listings and the  listings with associated data, 
// e.g. { count: 200, listings: [...] }. Include only listings with an
// overall rating of 99 or better. Accept the minimum number of bedrooms
// as a querystring parameter.

// allows us to read csv files
let csv = require('neat-csv')

// allows us to read files from disk
let fs = require('fs')

// defines a lambda function
exports.handler = async function(event) {

  //have look at the event log
  console.log(event)

  //grab number of bedrooms form ythequery string. queryStringParameters is part of the object events 
  let numBedrooms = event.queryStringParameters.bedrooms

  //write out the number of bedrooms requested
  console.log(`number of beds ${numBedrooms}`)
  // read listings CSV file from disk
  let listingsFile = fs.readFileSync(`./listings.csv`)
  
  // turn the listings file into a JavaScript object, wait for that to happen
  let listingsFromCSV = await csv(listingsFile)

  // write the number of listings (the array's length) to the back-end console
  // console.log(`There are ${listingsFromCSV.length} listings.`)

  // write the first few listings to the back-end console, to see what we're working with
  // console.log(listingsFromCSV[0])

  // create a new object to hold the count and listings data
  let listingsToReturn = {}
  // start with an empty Array for the listings
  listingsToReturn.listings = []

  // loop through all listings, for each one:
  for (let i=0; i < listingsFromCSV.length; i++) {
    // store each listing in memory
    let listing =listingsFromCSV[i]
    // check if the rating is at least 99, if so:
    if (listing.review_scores_rating >= 99 && listing.bedrooms >= numBedrooms){
      listingsToReturn.listings.push(listing)
    }
      // add the listing to the Array of listings to return
  }

  // add the number of listings to the returned listings Object
  listingsToReturn.count = listingsToReturn.listings.length



  // a lambda function returns a status code and a string of data
  return {
    statusCode: 200, // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
    body: JSON.stringify(listingsToReturn) // a string of data
  }
}



//Did it slightkly different in class, the array and count
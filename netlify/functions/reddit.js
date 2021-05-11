// Goal: write an API to grab posts by subreddit; the consumer of 
// this API can pass a query string parameter; e.g.
// http://localhost:8888/.netlify/functions/reddit?subreddit=wallstreetbets
// The finished product should be an Array of "Reddit post" objects.
// Return only the URL, title, date published, and author of each post.

// allows us to use fetch
let fetch = require('node-fetch')

exports.handler = async function(event) {
  // Write the event Object to the back-end console
  console.log(event)

  // Get the parameter for which subreddit

  // define the URL for Reddit posts data
  // let url = `https://feed2json.org/convert?url=https%3A%2F%2Fwww.reddit.com%2Fr%2F${subreddit}%2F.rss`

  // - Fetch the url, wait for a response, store the response in memory

  // - Ask for the json-formatted data from the response, wait for the data, store it in memory

  // - Write the json-formatted data to the back-end console

  // Create a new Array to be returned by the API

  // Loop through the posts, for each one:

    // Store each post from the Reddit API in memory

    // Create a new post object containing the pertinent fields

    // Add (push) the post object to the final Array

  return {
    statusCode: 200,
    body: `Hello from the back-end!` // this must be a String
  }
}
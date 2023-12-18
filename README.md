# Ravnenous

Ravenous is a single-page React application designed to search for restaurants using the Yelp API. 

## Technologies 

This React app was built using the Node.js [create-react-app command]([url](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app)), which automates preprocessing with Babel and bundling with Webpack. The technology stack includes HTML, CSS, JavaScript, React, and additional tools such as Git and GitHub for version control, HTTP Requests and Responses for data communication, and Authentication for secure user access.

## Features

* Users can search for restauraunts by name and location, and sort their results by best match, highest rated, or most reviewed.
* Restauraunt data is fetched using the Yelp API and results are displayed with restauraunts' photos, addresses, cuisine, and ratings/review counts.
* Information is transferred efficiently between components using a unidirectional data flow pattern commonly used in React applications.

## Local setup

To set up the project locally from the "ravenous" directory, execute the following CLI commands:
### `npm install`
This command installs all Node dependencies for React and other third-party packages used in the project.
### `npm start`
Launches the app in development mode using node server.js. Access it at http://localhost:3000 in your browser. The page automatically reloads on source code edits, and linting errors are displayed in the console.

![ravenousdemo-2](https://github.com/FabianJU/ravenous/assets/62031828/7c3ef522-72bb-4885-b17a-7f7b00af0aa0)

## Potential Future Improvements

* ### Enhanced Features via Yelp API:
  * Integrate a dropdown selection menu for Yelp API features: wheelchair accessiblity, parking validation and outdoor seating avaiability.
* ### User-Friendly Cost Adjustment:
  * Implement a price range slider from Yelp API, enabling users to adjust estimated restaurant costs easily.
* ### Interactive Location Linking:
  * Integrate Google Maps Places API to seamlessly link restaurant locations to Google Maps on the web page.
* ### Responsive Design:
  * Ensure elements on the website page are well-organized and maintain a pleasing layout when the page is resized.
* ### Smart Search Bar:
  * Display a placeholder in the search bar for better user guidance before typing.
  * Prompt users with a message if no search has been initiated or if an invalid location or business has been entered.
* ### Clean Initial Interface:
  * Set the bottom half of the page as white by default, providing a neat and clean interface before any searches are made.
* ### Convenient Search Execution:
  * Allow users to press "enter" to initiate a search for enhanced user experience.
* ### Visual Loading Feedback:
  * Implement a loading icon to inform users of ongoing data retrieval from the Yelp API before restaurant information is displayed on the page.

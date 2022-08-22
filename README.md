> This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Penneo Frontend Engineering Tests

> v11.2021

## Summary

This is a simple asessment where to goal is to implement two features in a basic weather app using the public OpenWeatherMap API.

**API Reference: https://openweathermap.org/api**

Note: You can only use APIs that are part of the free plan:

-   Current Weather Data
-   One Call API
-   5 Day / 3 Hour Forecast

## How to run this project

1. Clone this repository 🔬

2. Install Dependencies 🛠

You will need to install `nodejs` and `npm`. You can find setup instructions on the internet.

-   Node.js
-   NPM

Pro tip: If you install [nvm](https://github.com/creationix/nvm) (Node version manager), it will install both [node.js](http://nodejs.org/) and [npm](https://www.npmjs.org/) for you.

3. Run it 🏃
   To run this project first you need to run following command

```sh
    npm install          # installs all the npm dependencies
    npm start            # runs project on port 3000.
```

## Technical details

-   This app is written in React, using Typescript
-   Styles are written in Sass (SCSS)
-   The project contains an editorconfig file and prettier to enforce coding-style.
    -   We have added settings for VSCode autoformatting if you have the Prettier extension installed
-   The testing library installed is the latest best-practice toolset by the react community, Ironically named `testing-library`, and `jest`.

## Rules of the game

-   Checkout this repository
-   Create an individual branch and a pull request with your commits for each of the two solutions
-   We expect at least 2 unit tests covering some of the functionality
-   The pull request(s) should contain a brief description of the technical decisions made to achieve the tasks
-   Do not merge the PRs (yet) :)
-   The PR(s) will be discussed in a pair-reviewing session with members of the team

We'd also love to hear your thoughts and feedback, feel free to write them in the pull request comments or commit them in a file.

We're also curious to know what tools and programs you used

## The Goals 🎯

### 1. Show 3 Day Forecast

Currently, our weather app only displays the weather for the current date and time.

We want to be able to display a forecast of the next 3 days of the week

The acceptance criteria is:

-   Add a button to "Show forecast / Hide forecast"
-   Display the forecast (Condition, minimum and maximum temperature) for the next 3 days

The Wireframes:

-   [Link to Interactive Prototype (Interactive)](https://www.figma.com/proto/azQUkHEoX19yjbiTVojoWM/Frontend-Test---Goal-1?node-id=1%3A3&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A3&show-proto-sidebar=1)
-   [Link to Figma File](https://www.figma.com/file/azQUkHEoX19yjbiTVojoWM/Frontend-Test---Goal-1?node-id=1%3A3)

Sample unit test:

-   When the user clicks on "Show forecast", the app displays the 3 weather forecast tiles.

> This tests: Understanding API Documentation, Implementation based on wireframes, basic layout construction

### 2. Get location from browser

Currently, our weather app only displays weather information from **South Park, Colorado, US**.

We want to be able to get the user's current location from the browser

The acceptance criteria is:

-   Add a "Use my location" button.
-   Handle the consent to request browser's location
-   Display the weather for the user's current location when the consent is accepted
    -   You don't need to display the current location's city/country (This would require using another external API)
    -   You don't need to handle cases where the user rejects the location prompt.
-   Add a "Stop using my location" button to go back to weather from **South Park, US**

The Wireframes:

-   [Link to Interactive Prototype (Interactive)](https://www.figma.com/proto/d8w1sNNabWeM27DVzSW0MO/Frontend-Test---Goal-2?node-id=1%3A3&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A3&show-proto-sidebar=1)
-   [Link to Figma File](https://www.figma.com/file/d8w1sNNabWeM27DVzSW0MO/Frontend-Test---Goal-2?node-id=1%3A3)

Sample unit test:

-   When the user clicks on "use my location", a request is made to OpenWeatherMap's API with the browser's coordinates

> This tests: Interacting with native Browser APIs, Refactoring without losing previous functionality, Testing/mocking native browser functionality.

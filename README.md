# Mini Practice Project

### This project is a clone of [South Carolina Revenue and Fiscal Affairs Office's home page](https://rfa.sc.gov/).

### Time spent on project:

- ~ 6 hours

### Dependencies used (excluding create-react-app defaults):

- styled-components (used for styling)
- gh-pages (used for deploying app to GitHub pages)

### Thought Process:

- Remove unecessary code/files created by running npx create-react-app
- Retrieve/import all required images needed for project
- Retrieve font families needed from Google Fonts and add the links to index.html
- Create four main folders:
  - assets/, components/, context/, styles/
- Split the home page into a component hierarchy
  - Add all required components into components/
- Create styles/ which parallels the structure of components/
  - Each React component should have a matching styled component
  - Use a theme file which stores all colors/fonts needed for project
    - **NOTE**: I ended up not using this; if I had more time, I would use this theme file for all styled components needed the colors/fonts
  - Use a global style to reset browser defaults (e.g. margin: 0 on all elements)
  - Use BEM format for organization
- Create a mock data model for dynamic data needed on the home page (models a JSON API response)
  - Determine which sections of the page require dynamic data
    - Identified that the following sections: "Popular Services and Links", "Recent Updates", and "Calendar of Events" need dynamic data
  - Create a mock object (that would be returned by an API call) and store it inside dummyData.js
  - Use this mock object to populate the sections needing access to that data
- Use React Context API to manage shared data/state as to prevent having to manually pass data down via props
  - Context logic is found in context/
  - The Home.jsx component provides this context to consuming components
- Add in some media queries to make the website somewhat responsive

### Features I would have liked to have completed if I had more time:

- Routing
  - I would have used React Router DOM v6 to add some routing logic
- Responsiveness
  - I would have spent more time on making the application more responsive
- Theme file
  - I would have incorporated the colors/fonts defined in Theme.js to all styled components needing access to it
- Minor CSS fixes
  - My clone doesn't exactly match the design; I would have cleaned up those sections

---

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

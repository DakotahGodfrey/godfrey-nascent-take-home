# [Nascent Digital Take Home Project - React + TypeScript](https://dg-nascent-takehome.netlify.app/) 


This is my submission for the Nascent Digital Frontend Challenge. I built this project using Typescript, React and Redux Toolkit.

[Live Demo](https://dg-nascent-takehome.netlify.app/)

- [Features](#features)
- [Design Notes](#design-notes)
- [Plans for Future Updates](#plans-for-future-updates)
- [Technology Used](#technology-used)
- [What I Would Do Differently](#What-I-Would-Do-Differently)
- [Available Scripts](#available-scripts)
  - [`yarn start`](#yarn-start)
    - [`yarn test`](#yarn-test)
    - [`yarn build`](#yarn-build)
    - [`yarn eject`](#yarn-eject)

## Features

Users are able to enter personal information into a form, and have that information persist on reload through the use of local storage. Users can also search the [Poke API](https://pokeapi.co/) by name, and choose their favorite pokemon. 

## Design Notes
I planned this project out as 3 step process, based on the challenge write-up provided. 
- Step 1 - A form to collect user information 
- Step 2 - A search bar to find and select a favourite pokemon. 
- Step 3 - A confirmation page, to review and edit it user details.

The wireframes and components used for this project can be viewed [here on Figma](https://www.figma.com/file/YQzMrHJteD28316hJZfO3J/Nascent-Digital-Assesment?node-id=0%3A1). 

## Plans For Future Updates

- Allow Users to query the PokeAPI by Pokemon Type.
- Add better client-side validation.
- Add shareable links using query params. 
- Add stronger type annotations for better type safety. 
- Provide better support for screenreaders. 
- Add animations. 

## Technology Used

This Project Made use of the following:

- [React](https://reactjs.org/docs/getting-started.html)
- [@Redux/ToolkitJS](https://redux-toolkit.js.org/introduction/getting-started)
- [Typescript](https://www.typescriptlang.org/docs/)
- [SCSS](https://sass-lang.com/documentation/syntax)
- [redux-persist](https://github.com/rt2zz/redux-persist#readme)
- [react-router-dom](https://reactrouter.com/docs/en/v6/getting-started/installation)

## What I Would Do Differently 

If I were to do this project over again, 
- I likely would have taken a more TDD approach to ensure I wasn't scrambling to write tests at the last minute
- I would have inquired about using the [GraphQL version of the Poke Api](https://pokeapi.co/docs/graphql), to combat under and over-fetching of data and a better Dev Experience. 
- I would have spent more time in the planning phase, and better managed my expectations in order to avoid Scope-Creep.


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

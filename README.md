## Quick start

### Install devDependencies

- Make sure your NodeJS and npm versions are up to date for `React 16.8.6`

- Install Ionic: `npm install -g @ionic/cli`

- Install ESLint on globally your machine `npm install --g eslint`

- Install dependencies: `npm install`

### Start mock backend

- Start the mock backend: `npm run apiMock`

### Start the fronend

- Start the server: `ionic serve`

- Views are on: `localhost:8100`

# Learn before you start

## Material Design

Google Material Design Framework. Rules and guidelines to design user-friedly, mature, mobile-first Apps.
We strongly recommend to read and understand these design guidelines before designing user interface.

- https://www.material.io

## Programming

You should learn the tools used in this project to understand how things work.

### JavaScript

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript
- https://www.samanthaming.com/tidbits/35-es6-way-to-clone-an-array

### React

- https://reactjs.org/tutorial/tutorial.html
- https://reactjs.org/docs/hello-world.html

### Ionic Components for Material design

Material UI is an implementation of Material Design for react
It has layout componentst and UI widgets.

- https://ionicframework.com/docs/components

### Axios HTTP Client

- https://github.com/axios/axios

### Patterns and Tips for React development:

- https://reactpatterns.com (edited)

### JsonServer for mock REST API

- check https://github.com/typicode/json-server

You run json-server calling `npm run apiMock` (look at package.json what this actually does).
The data is in `./data folder`

## File Structure

### Main artefacts

- src/pages: each page is a main navigation area
- src/modals: alternative to page navigation, where content overlaps parent page
- src/models: type definitions of response objects for typesafety
- src/components: general, reusable components
- src/theme/variables.css: definition of global color scheme for ionic components
- src/services: general, reusable services for API calls

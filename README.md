# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The app is served at https://zaragozamartin91.github.io/jargon-cards-v2/

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

Tests are written in JEST.
[Jest cheatsheet](https://devhints.io/jest)

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run serve`

Contents of build folder are served on port 3000 with base path `jargon-cards-v2/`.

Minimial server is built with express ; see `server.js` file for further insights.

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

## Changelog

### 2023-10-07

[Building for Relative Paths](https://create-react-app.dev/docs/deployment/#building-for-relative-paths)

Added `"homepage": "https://zaragozamartin91.github.io/jargon-cards-v2"` to the package.json file to make `jargon-cards-v2` the default root path of the app.

Added a HashRouter base functionality which is better suited for pages hosted in github-pages.

### 2023-10-08

A custom workflow was created in the `.github\workflows\` directory.
The workflow:
- Instals node dependencies
- Builds the app
- Builds and pushes the artifact
- Deploys the app as a github-page

### 2023-10-13

Using git with **POWERSHELL**.

Instructions here https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent

Run with admin privileges:

`Get-Service -Name ssh-agent | Set-Service -StartupType Manual`

`Start-Service ssh-agent`

`ssh-add $Env:USERPROFILE\.ssh\private_github_thinkpad`

In order for this to work properly, the repo must be cloned using Powershell as well.

Following [these instructions](https://stackoverflow.com/questions/6688655/select-private-key-to-use-with-git)
...got this command which worked:

`git clone -c core.sshCommand="ssh -i C:\\Users\\PATH_TO_KEY" git@github.com:zaragozamartin91/jargon-cards-v2.git`

### 2023-10-20

Card flip features implemented using [ReactCardFlip](https://www.npmjs.com/package/react-card-flip).

Tinder card demo implemented using [ReactTinderCard](https://www.npmjs.com/package/react-tinder-card).

### 2023-10-29

Used [HammerJS](https://hammerjs.github.io/getting-started/) to handle swipe and tap gestures.

Used [ReactSpring](https://react-spring.dev/docs/getting-started) to handle tinder like animations.

## 2023-12-30

Dictionaries can be downloaded from https://freedict.org/downloads/

Dictionaries are encoded into [TEI format](https://cdrh.unl.edu/articles/basicguide/TEI) (Xml format)

The TEI file was parsed using [xml-js](https://www.npmjs.com/package/xml-js).

The scprit for parsing the TEI file can be found in `adhoc_scripts/read_xml.js`.


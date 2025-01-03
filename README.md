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

### Debugging & smoke testing

Uncomment the line `<script src="http://localhost:8097"></script>` in the docs/* HTML files

Launch react devtools by running `npm run react-devtools`

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

Here is the dictionary database: https://freedict.org/freedict-database.json
* From here, the compressed dictionaries can be downloaded in `tar.gz`
* The dictionaries are stored in TEI format.

### The PEOPLE'S dictionary

https://folkets-lexikon.csc.kth.se/folkets/folkets.en.html

From [this site](https://folkets-lexikon.csc.kth.se/folkets/om.en.html) its possible to download very complete english-swedish dictionaries.

This one contains words, definitions and examples.

## 2024-08-03

### Color palette generator

Cool website to generate color palettes: https://coolors.co/282c34-799496-acc196-e9eb9e-e16f7c

Allows to pick a color and generate other compatible colors within a cohesive palette.

### Free ENGLISH dictionary api

Home site https://dictionaryapi.dev/

Allows for querying of english word definitions.

Sample request: https://api.dictionaryapi.dev/api/v2/entries/en/hello

Sample response:
```json
  [
    {
      "word": "hello",
      "phonetic": "həˈləʊ",
      "phonetics": [
        {
          "text": "həˈləʊ",
          "audio": "//ssl.gstatic.com/dictionary/static/sounds/20200429/hello--_gb_1.mp3"
        },
        {
          "text": "hɛˈləʊ"
        }
      ],
      "origin": "early 19th century: variant of earlier hollo ; related to holla.",
      "meanings": [
        {
          "partOfSpeech": "exclamation",
          "definitions": [
            {
              "definition": "used as a greeting or to begin a phone conversation.",
              "example": "hello there, Katie!",
              "synonyms": [],
              "antonyms": []
            }
          ]
        },
        {
          "partOfSpeech": "noun",
          "definitions": [
            {
              "definition": "an utterance of ‘hello’; a greeting.",
              "example": "she was getting polite nods and hellos from people",
              "synonyms": [],
              "antonyms": []
            }
          ]
        },
        {
          "partOfSpeech": "verb",
          "definitions": [
            {
              "definition": "say or shout ‘hello’.",
              "example": "I pressed the phone button and helloed",
              "synonyms": [],
              "antonyms": []
            }
          ]
        }
      ]
    }
  ]
```

## Update 2024-08-19

App icon courtesy of https://www.flaticon.com/free-icon/flash-card_9146141

## Update 2024-09-04

### CSS animation docs

Sparkle CSS animation was done using the following resources:
* Quick CSS animation YT tutorial: https://youtu.be/z2LQYsZhsFw?si=CRfl1bH1qTSbZBUG 
* Animation transitions in a nutshell: https://easings.net/ 
* CSS @keyframes syntax: https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes 
* Sparkle animation example code: https://codepen.io/Katie_Lu_1015/pen/OeOPXV */

### Perform async operations within react components

`useEffect` and `useCallback` have to be leveraged to run async operations and update the component's state in an orderly fashion.

https://devtrium.com/posts/async-functions-useeffect

Example code:
```javascript
useEffect(() => {
  // declare the async data fetching function
  const fetchData = async () => {
    // get the data from the api
    const data = await fetch('https://yourapi.com');
    // convert the data to json
    const json = await response.json();

    // set state with the result
    setData(json);
  }

  // call the function
  fetchData()
    // make sure to catch any error
    .catch(console.error);;
}, [])
```

## Update 2024-10-27

### Adding environment variables on a github page

This could be useful to convert the react app into a Firebase one with  Firestore capabilities

https://stackoverflow.com/questions/53648652/how-to-use-environment-variables-in-github-page

### Firebase restrict access by URL

https://stackoverflow.com/questions/35418143/how-to-restrict-firebase-data-modification


## Update 2024-12-03

### CSS positioning

https://developer.mozilla.org/en-US/docs/Web/CSS/position

#### static
The element is positioned according to the Normal Flow of the document. The top, right, bottom, left, and z-index properties have no effect. This is the default value.

#### relative
The element is positioned __according to the normal flow of the document, and then offset relative to itself based on the values of top, right, bottom, and left__. The offset does not affect the position of any other elements; thus, the space given for the element in the page layout is the same as if position were static.
This value creates a new stacking context when the value of z-index is not auto. Its effect on table-*-group, table-row, table-column, table-cell, and table-caption elements is undefined.

#### absolute
The element is __removed__ from the normal document flow, and no space is created for the element in the page layout. The element is positioned relative to its closest positioned ancestor (if any) or to the initial containing block. Its final position is determined by the values of top, right, bottom, and left.
This value creates a new stacking context when the value of z-index is not auto. The margins of absolutely positioned boxes do not collapse with other margins.

#### fixed
The element is __removed__ from the normal document flow, and no space is created for the element in the page layout. The element is positioned relative to its initial containing block, which is the viewport in the case of visual media. Its final position is determined by the values of top, right, bottom, and left.
This value always creates a new stacking context. In printed documents, the element is placed in the same position on every page.

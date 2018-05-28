# SemanticUI-React + Webpack + Storybook

This repository contains the bare minimum to get you going with [SemanticUI-React](https://react.semantic-ui.com), [Webpack](https://webpack.js.org/) and [Storybook/react](https://storybook.js.org/basics/guide-react/). It builds upon another [minimal repository](https://github.com/sheljohn/minimal-semantic-react) without Storybook.

To clone this repository, and run the storybook with a demo button, simply type in a terminal:
```
git clone https://github.com/sheljohn/minimal-semantic-react-storybook
cd minimal-semantic-react-storybook/
yarn install
yarn run storybook
```

This will open a page at `localhost:9001` (see `package.json` to change port), showing a marvellous button with two simple stories. 

### Overview

This repository does not simply allow you to write a storybook for your components; rather, your app should be built _alongside_ the storybook.

Put your components in `src/components`, and mount your application as you would normally in `src/index.jsx` (use more files if needed obviously).
Your application can be served using Webpack dev-server with `yarn run serve`.

In parallel, for each component (or combination thereof), [write](https://storybook.js.org/basics/writing-stories/) a series of test-cases (aka "stories") in `src/stories`, and include them in `src/stories/index.js`.
Now your storybook can be served independently with `yarn run storybook`.

```
├── public
│   └── index.html
├── src
│   ├── index.jsx                   # application main
│   ├── components                  # put your components here
│   │   └── Button.jsx
│   └── stories                     # write your stories here
│       ├── Button.jsx
│       └── index.js                # storybook main
├── .storybook
│   ├── config.js
│   └── preview-head.html           # preload SemanticUI / React from CDN
├── package.json
├── webpack.config.js
└── ...
```

### Details

Additional information:

 - The port for `yarn run storybook` (default 9001) can be changed in `package.json`.
 - The port for `yarn run serve` (default 3000) can be changed in `webpack.config.js` (section `devServer`).
 - You can export a static storybook with `yarn run export-storybook` (output by default to `storybook/`, already git-ignored).
 - If more CDN-served libaries are needed, edit `.storybook/preview-head.html` (see [documentation](https://storybook.js.org/configurations/add-custom-head-tags/)).

To build upon this skeleton with your own stuff:

 - Create an empty repo wherever you like (Github, Gitlab, Bitbucket, etc.);
 - After cloning this repo, just point to your git remote:
```
git remote set-url origin <address of your new repo>
git push -u origin master
```

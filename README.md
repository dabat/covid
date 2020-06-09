# About

This project is a slightly modified tutorial provided by Wes Bos called
[React Hooks Coronavirus API Code Along](https://youtu.be/B85s0cjlitE) available for your viewing enjoyment on YouTube.

I ran into a couple issues while building this project. The big one was related to working with next.js in development mode where styles would not be rendered in the browser after changes are made to the source code. Some helpful folks figured out how to correct this by setting up a `.babelrc` config file properly. Apparently, you need to have the `babel-plugin-styled-components` plugin named in the environment plugins array for your environments. The suggested fix from [this comment](https://github.com/styled-components/babel-plugin-styled-components/issues/78#issuecomment-414117908) on a related GitHub issue fixed the problem.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Learn More

You can learn more about next.js at their [website](https://nextjs.org/docs/getting-started/).

To learn React, check out the [React documentation](https://reactjs.org/).

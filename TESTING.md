# Testing Setup

## Install Dependencies

```sh
npm i -D jest@latest
npm i -D @types/jest@latest
npm install -D jest-environment-jsdom
npm i -D @testing-library/react@latest
npm i -D @testing-library/jest-dom
npm i -D @testing-library/user-event
npm i -D identity-obj-proxy
```

## Scripts

```sh
  "test": "jest",
  "test:watch": "npm run test -- --watch",
```

### Jest Config File

At root of project, `jest.config.js`:

```js
module.exports = {
  setupFiles: ['dotenv/config'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
  testEnvironment: 'jsdom',
};
```

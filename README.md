# mazey-taro-utils

[![npm version][npm-image]][npm-url]
[![l][l-image]][l-url]

[npm-image]: https://img.shields.io/npm/v/mazey-taro-utils
[npm-url]: https://npmjs.org/package/mazey-taro-utils
[l-image]: https://img.shields.io/npm/l/mazey-taro-utils
[l-url]: https://github.com/mazeyqian/mazey-taro-utils

Mazey's Taro utils.

## Install

Use mazey-taro-utils via [npm](https://www.npmjs.com/package/mazey-taro-utils).

```shell
npm install mazey-taro-utils --save
```

Of course, you can also download this file and serve it yourself. The file locates at the `lib/mazey-taro-utils.min.js`.

## Usage

### `toast`

Displays a toast message.

**Parameters:**

- `msg` (string): The message to display in the toast.

**Example Usage:**

```javascript
toast('Hello, world!');
```

### `isH5`

Determines if the current environment is a web environment (H5).

**Returns:** `boolean`

- `true` if the current environment is H5.
- `false` otherwise.

**Example Usage:**

```javascript
if (isH5()) {
  console.log('Running in a web environment');
}
```

### `getEnv`

Gets the current environment the application is running in.

**Returns:** `string`

- The name of the current environment (e.g., `'h5'`, `'weapp'`, etc.).

**Example Usage:**

```javascript
console.log(`Current environment: ${getEnv()}`);
```

### `quickNavigateTo`

Navigates to a specified page.

**Parameters:**

- `page` (string): The page to navigate to. This should be the name of the directory under `/pages` without the `/index` part.

**Example Usage:**

```javascript
quickNavigateTo('home');
```

### `quickRedirectTo`

Redirects to a specified page, without keeping the current page in the navigation history.

**Parameters:**

- `page` (string): The page to redirect to. This should be the name of the directory under `/pages` without the `/index` part.

**Example Usage:**

```javascript
quickRedirectTo('login');
```

## Contributing

Install Dependencies:

```shell
npm i
```

Development:

```shell
npm run dev
```

Build:

```shell
npm run build
```

Document:

```shell
npm run docs
```

Test:

```shell
npm run test
```

## License

This software is released under the terms of the [MIT license](https://github.com/mazeyqian/mazey-taro-utils/blob/main/LICENSE).

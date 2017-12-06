[![Build Status](https://travis-ci.org/jaebradley/url-prop-type.svg?branch=master)](https://travis-ci.org/jaebradley/url-prop-type)
[![codecov](https://codecov.io/gh/jaebradley/prop-types-url-validator/branch/master/graph/badge.svg)](https://codecov.io/gh/jaebradley/prop-types-url-validator)
[![npm](https://img.shields.io/npm/dt/url-prop-type.svg)](https://www.npmjs.com/package/url-prop-type)
[![npm](https://img.shields.io/npm/v/url-prop-type.svg)](https://www.npmjs.com/package/url-prop-type)

# URL Prop Type

## Introduction
This package is used to validate if a React Prop value is a valid URL. A valid URL can be a valid absolute URL (like `https://github.com/jaebradley/url-prop-type`) or a relative-absolute URL (starts with a `/`).

Currently, there is no URL prop type defined by [the `prop-types` package](https://www.npmjs.com/package/prop-types). While using `PropType.string` works, why not be as specific as possible when validating your props?

Additionally, though [it's relatively straightforward to create a custom prop type validator](https://www.ian-thomas.net/custom-proptype-validation-with-react/), if you need to implement similar prop type checking in multiple packages, you might not want to repeat yourself.

Depends on [the `is-url` package](https://www.npmjs.com/package/is-url).
## Installation
`npm install --save url-prop-type`

## Example Usage
```javascript
import React from 'react';
import PropTypes from 'prop-types';
import urlPropType from 'url-prop-type';

// Create a basic Hyperlink Component
const Hyperlink = props => (
  <a href={props.link}>{props.text}</a>
);

Hyperlink.propTypes = {
  text: PropTypes.string.isRequired,
  link: urlPropType.isRequired, // can also specify urlPropType if it is not required
};
```

## Alternatives
I didn't see many alternatives:
  * It doesn't look like [the `airbnb/prop-types` project](https://github.com/airbnb/prop-types) has URL validation.
    * Opened [this PR with `airbnb/proptypes`](https://github.com/airbnb/prop-types/pull/35)
  * Similarly, [the `react-proptypes-url-validator` package](https://github.com/kmalone75/react-proptypes-url-validator) didn't seem to implement an `isRequired` option

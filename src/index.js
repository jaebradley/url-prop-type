import isUrl from 'is-url';

const validateUrl = (props, propName, componentName) => {
  const value = props[propName];
  if (value == null || isUrl(value)) {
    return null;
  }

  throw new TypeError(`Invalid URL Prop Value: ${value} for ${propName} in ${componentName}`);
};

const validateRequiredUrl = (props, propName, componentName) => {
  const value = props[propName];

  if (isUrl(value)) {
    return null;
  }

  throw new TypeError(`Invalid URL Prop Value: ${value} for ${propName} in ${componentName}`);
};

validateUrl.isRequired = validateRequiredUrl;

export default validateUrl;

import isUrl from 'is-url';

const urlPropType = (props, propName, componentName) => {
  const value = props[propName];
  if (value == null || isUrl(value)) {
    return null;
  }

  throw new TypeError(`Invalid URL Prop Value: ${value} for ${propName} in ${componentName}`);
};

const requiredUrlPropType = (props, propName, componentName) => {
  const value = props[propName];

  if (isUrl(value)) {
    return null;
  }

  throw new TypeError(`Invalid URL Prop Value: ${value} for ${propName} in ${componentName}`);
};

urlPropType.isRequired = requiredUrlPropType;

export default urlPropType;

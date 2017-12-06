import isUrl from 'is-url';


const requiredUrlPropType = (props, propName, componentName) => {
  const value = props[propName];

  if (value == null || typeof value !== 'string' || (!value.startsWith('/') && !isUrl(value))) {
    return new TypeError(`Invalid URL Prop Value: ${value} for ${propName} in ${componentName}`);
  }

  return null;
};

const urlPropType = (props, propName, componentName) => {
  if (props[propName] == null) {
    return null;
  }

  return requiredUrlPropType(props, propName, componentName);
};

urlPropType.isRequired = requiredUrlPropType;

export default urlPropType;


import isUrl from 'is-url';
import isRelativeUrl from 'is-relative-url';

import urlPropType from './index';

jest.mock('is-url', () => jest.fn());
jest.mock('is-relative-url', () => jest.fn());

describe('URL Prop Type', () => {
  const propName = 'baejadley';
  const componentName = 'jaebaebae';
  const url = 'http://google.com';
  const nonStringUrl = 10;
  let mockedIsUrl;
  let mockedIsRelativeUrl;

  afterEach(() => {
    mockedIsUrl.mockRestore();
    mockedIsRelativeUrl.mockRestore();
  });

  describe('urlPropType', () => {
    it('should throw an error if prop value is not a string', () => {
      mockedIsUrl = isUrl.mockImplementation(() => true);
      mockedIsRelativeUrl = isRelativeUrl.mockImplementation(() => true);
      const props = {};
      props[propName] = nonStringUrl;
      expect(urlPropType(props, propName, componentName))
        .toEqual(new TypeError(`Invalid URL Prop Value: ${nonStringUrl} for ${propName} in ${componentName}`));
    });

    it('should throw an error if prop value is not a valid absolute URL nor a valid relative URL', () => {
      mockedIsUrl = isUrl.mockImplementation(() => false);
      mockedIsRelativeUrl = isRelativeUrl.mockImplementation(() => false);
      const props = {};
      props[propName] = url;
      expect(urlPropType(props, propName, componentName))
        .toEqual(new TypeError(`Invalid URL Prop Value: ${url} for ${propName} in ${componentName}`));
    });

    it('should return null if prop value is a valid relative URL but not a valid absolute URL', () => {
      mockedIsUrl = isUrl.mockImplementation(() => false);
      mockedIsRelativeUrl = isRelativeUrl.mockImplementation(() => true);
      const props = {};
      props[propName] = url;
      expect(urlPropType(props, propName, componentName)).toBeNull();
    });

    it('should return null if prop value is a valid absolute URL but not a valid relative URL', () => {
      mockedIsUrl = isUrl.mockImplementation(() => true);
      mockedIsRelativeUrl = isRelativeUrl.mockImplementation(() => false);
      const props = {};
      props[propName] = url;
      expect(urlPropType(props, propName, componentName)).toBeNull();
    });

    it('should return null if prop is not defined', () => {
      const props = {};
      expect(urlPropType(props, propName, componentName)).toBeNull();
    });
  });

  describe('validateRequiredUrl', () => {
    it('should throw an error if prop value is not a valid absolute URL nor a valid relative URL', () => {
      mockedIsUrl = isUrl.mockImplementation(() => false);
      mockedIsRelativeUrl = isRelativeUrl.mockImplementation(() => false);
      const props = {};
      props[propName] = url;
      expect(urlPropType.isRequired(props, propName, componentName))
        .toEqual(new TypeError(`Invalid URL Prop Value: ${url} for ${propName} in ${componentName}`));
    });

    it('should throw an error if prop is not defined', () => {
      const props = {};
      expect(urlPropType.isRequired(props, propName, componentName))
        .toEqual(new TypeError(`Invalid URL Prop Value: undefined for ${propName} in ${componentName}`));
    });

    it('should return null if prop value is a valid relative URL but not a valid absolute URL', () => {
      mockedIsUrl = isUrl.mockImplementation(() => false);
      mockedIsRelativeUrl = isRelativeUrl.mockImplementation(() => true);
      const props = {};
      props[propName] = url;
      expect(urlPropType.isRequired(props, propName, componentName)).toBeNull();
    });

    it('should return null if prop value is a valid absolute URL but not a valid relative URL', () => {
      mockedIsUrl = isUrl.mockImplementation(() => true);
      mockedIsRelativeUrl = isRelativeUrl.mockImplementation(() => false);
      const props = {};
      props[propName] = url;
      expect(urlPropType.isRequired(props, propName, componentName)).toBeNull();
    });
  });
});

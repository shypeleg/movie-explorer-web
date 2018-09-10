import { HeaderDriver } from './Header.driver';
import { expect, use } from 'chai';
import renderedMatcher from '../../../test/matchers/rendered';

use(renderedMatcher);

describe('Movie Explorer', () => {
  let driver: HeaderDriver;

  beforeEach(() => {
    driver = new HeaderDriver();
  });

  afterEach(() => {
    driver.cleanup();
  });

  it('should have a header', () => {
    driver.when.render();
    expect(driver.get.header()).to.be.rendered();
  });
});

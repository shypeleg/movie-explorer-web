import 'mocha';
import { expect, use } from 'chai';
import { PropertyDriver } from './Property.driver';
import renderedMatcher from '../../../../test/matchers/rendered';
import { Chance } from 'chance';

const chance = new Chance();

use(renderedMatcher);

describe('Movie Explorer', () => {
  let driver: PropertyDriver;

  beforeEach(() => {
    driver = new PropertyDriver();
  });

  afterEach(() => {
    driver.cleanup();
  });

  it('should have a label', () => {
    const label = chance.word();

    driver.given.label(label).when.render();
    expect(driver.get.label().getText()).to.equal(label);
  });
  it('should have a value', () => {
    const value = chance.word();

    driver.given.value(value).when.render();
    expect(driver.get.value().getText()).to.equal(value);
  });
  it('should use provided datahook', () => {
    const hook = chance.word();

    driver.given.dataHook(hook).when.render();
    expect(driver.get.datahook(hook)).to.be.rendered();
  });
});

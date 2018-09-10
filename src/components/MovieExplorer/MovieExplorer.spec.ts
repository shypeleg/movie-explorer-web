import { MovieExplorerDriver } from './MovieExplorer.driver';
import { expect, use } from 'chai';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';
import { clearMocks } from './../../../test/helpers/nock-helpers';
import renderedMatcher from '../../../test/matchers/rendered';

use(sinonChai);
use(renderedMatcher);

describe('Movie Explorer', () => {
  let driver: MovieExplorerDriver;

  beforeEach(() => {
    driver = new MovieExplorerDriver();
  });

  afterEach(() => {
    driver.cleanup();
    clearMocks();
  });

  it('should have a header', () => {
    driver.when.render();
    expect(driver.get.header()).to.be.rendered();
  });

  it('should call fetchVideos', () => {
    const fetchSpy = sinon.spy();
    driver.given.fetchVideos(fetchSpy).when.render();

    expect(fetchSpy).to.have.been.calledOnce;
  });

  it('should have some video rows', () => {
    driver.when.render();
    expect(driver.get.row().length).to.equal(driver.videos.length);
  });
});

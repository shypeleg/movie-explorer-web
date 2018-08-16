import {
  aVideoBuilder,
  VideoBuilder,
} from './../../../test/builders/VideoBuilder';
import { VideoRowDriver } from './VideoRow.driver';
import 'mocha';
import { expect, use } from 'chai';
import * as sinonChai from 'sinon-chai';
import { clearMocks } from './../../../test/helpers/nock-helpers';
import renderedMatcher from '../../../test/matchers/rendered';
import { Chance } from 'chance';

const chance = new Chance();

use(sinonChai);
use(renderedMatcher);

describe('Movie Explorer', () => {
  let driver: VideoRowDriver;
  let video: VideoBuilder;
  beforeEach(() => {
    driver = new VideoRowDriver();
    video = aVideoBuilder();
  });

  afterEach(() => {
    driver.cleanup();
    clearMocks();
  });

  it('should have a poster', () => {
    const poster = chance.url();
    driver.given.video(video.given.imdbPoster(poster).build()).when.render();
    expect(driver.get.poster().props().style.backgroundImage).to.contain(
      poster,
    );
  });

  it('should render the title', () => {
    const title = chance.name();
    const year = chance.year();
    driver.given
      .video(
        video.given
          .imdbTitle(title)
          .given.imdbYear(year)
          .build(),
      )
      .when.render();
    expect(driver.get.title().getText()).to.equal(`${title} (${year})`);
  });

  it('should have country', () => {
    const country = chance.string();
    driver.given.video(video.given.imdbCountry(country).build()).when.render();
    expect(driver.get.country().getText()).to.equal(country);
  });

  it('should have genre', () => {
    const genre = chance.string();
    driver.given.video(video.given.imdbGenres(genre).build()).when.render();
    expect(driver.get.genre().getText()).to.equal(genre);
  });

  it('should have duration', () => {
    const runtime = chance.string();
    driver.given.video(video.given.imdbRuntime(runtime).build()).when.render();
    expect(driver.get.runtime().getText()).to.equal(runtime);
  });

  it('should have director label', () => {
    driver.when.render();
    expect(driver.get.directorLabel().getText()).to.equal('Director');
  });

  it('should have director', () => {
    const director = chance.string();
    driver.given
      .video(video.given.imdbDirector(director).build())
      .when.render();
    expect(driver.get.director().getText()).to.equal(director);
  });

  it('should have writer label', () => {
    driver.when.render();
    expect(driver.get.writerLabel().getText()).to.equal('Writer');
  });

  it('should have writer', () => {
    const writer = chance.string();
    driver.given.video(video.given.imdbWriter(writer).build()).when.render();
    expect(driver.get.writer().getText()).to.equal(writer);
  });

  it('should have stars label', () => {
    driver.when.render();
    expect(driver.get.starsLabel().getText()).to.equal('Stars');
  });

  it('should have stars', () => {
    const stars = chance.string();
    driver.given.video(video.given.imdbActors(stars).build()).when.render();
    expect(driver.get.stars().getText()).to.equal(stars);
  });
});
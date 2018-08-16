import * as nock from 'nock';

export async function waitUntil(
  predicate: () => boolean,
  timeout = 100,
  interval = 25,
) {
  for (let passedTime = 0; passedTime < timeout; passedTime += interval) {
    if (predicate()) {
      return;
    }

    await sleep(interval);
  }

  throw new Error(`Timeout while waiting for: ${predicate}`);
}
export async function sleep(time: number) {
  return new Promise(resolve => setTimeout(resolve, time));
}
export const waitUntilApiCallsFinished = async (timeout?: number) => {
  return waitUntil(nock.isDone, timeout);
};

export const clearMocks = () => {
  nock.cleanAll();
  nock.emitter.removeAllListeners('no match');
};

export const validateAllMocksCalled = () => {
  if (!nock.isDone()) {
    const errorMessage = `pending mocks: ${nock.pendingMocks()}`;
    /*
     Clean mocks on error to avoid flakiness with other tests.
     The clean has to happen after nock.pendingMocks() and before the throw.
     */
    this.clearMocks();
    throw new Error(errorMessage);
  }
};

export const logMissedApiCalls = () => {
  nock.emitter.on('no match', req => {
    /* tslint:disable - This is a driver, used only for tests */
    console.warn(`NockDriver: no match found for: ${req.path}`);
    /* tslint:enable */
  });
};

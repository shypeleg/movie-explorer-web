import * as wixEventually from 'wix-eventually';
const defaultTimeouts = { timeout: 500, interval: 10 };
export async function eventually(condition, timeouts = defaultTimeouts) {
  return wixEventually.with({ ...defaultTimeouts, ...timeouts })(() =>
    condition(),
  );
}

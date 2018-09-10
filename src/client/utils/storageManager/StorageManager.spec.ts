import 'mocha';
import { expect } from 'chai';
import { StorageManager } from './StorageManager';
import { FakeInMemoryStrategy } from './FakeInMemoryStrategy';

describe('PayloadManager', () => {
  it('allow to save item, and load it', async () => {
    const payloadManager = new StorageManager(FakeInMemoryStrategy);
    await payloadManager.save('TEST_KEY', { data: 'DUMMY_DATA' });
    expect(await payloadManager.load('TEST_KEY')).to.deep.equal({
      data: 'DUMMY_DATA',
    });
  });
});

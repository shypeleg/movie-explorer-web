import { BaseStorage } from 'data-capsule';

export class FakeInMemoryStrategy extends BaseStorage {
  private readonly m_map = {};

  setItem(key, value, options) {
    if (typeof this.m_map[options.namespace] === 'undefined') {
      this.m_map[options.namespace] = {};
    }
    this.m_map[options.namespace][key] = value;
    return Promise.resolve();
  }

  getItem(key, options) {
    if (!this.m_map[options.namespace]) {
      return Promise.reject('no such key');
    }

    return Promise.resolve(this.m_map[options.namespace][key]);
  }

  removeItem(key, options) {
    // tslint:disable-next-line:no-dynamic-delete
    delete this.m_map[options.namespace][key];
    return Promise.resolve();
  }

  getAllItems(options) {
    return Promise.resolve(this.m_map[options.namespace]);
  }
}

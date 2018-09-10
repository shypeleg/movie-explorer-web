import { DataCapsule, WixStorageStrategy } from 'data-capsule';

export class StorageManager {
  private readonly m_dataCapsule;

  constructor(strategy = WixStorageStrategy) {
    this.m_dataCapsule = new DataCapsule({
      strategy: new strategy(),
      namespace: 'shy-movie-explorer-web',
    });
  }

  public save(key: string, value: any): Promise<any> {
    return this.m_dataCapsule.setItem(key, value);
  }

  public load(key: string): Promise<any> {
    return this.m_dataCapsule.getItem(key);
  }
}

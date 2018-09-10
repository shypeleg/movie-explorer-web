declare module '*.scss';
declare module '*.json';
declare var browser: any;

interface Window {
  __LOCALE__: string;
  __BASENAME__: string;
  __STATICS_BASE_URL__: string;
  __VIDEOS__: string;
}

declare module NodeJS {
  interface Global {
    browser: any;
  }
}

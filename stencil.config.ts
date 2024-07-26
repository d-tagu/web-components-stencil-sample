import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'web-components-stencil-sample',
  outputTargets: [
    {
      type: 'dist',
    },
    // {
    //   type: 'www',
    //   serviceWorker: null
    // }
  ],
};

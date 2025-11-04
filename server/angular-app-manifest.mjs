
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://Jaanulittleluv.github.io/Portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Portfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 29897, hash: 'df38fa8d9093a5dff03fa3c84c82408a121826266b0930b621c916d0e95dc7f0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 30060, hash: '91f87a7acb8ccf8a43ec0b2057ab2f60e1267cb1189013fe944ee3489e4d558b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 119863, hash: '86a56e155f73401a6344dd4b8ca50121e45d1095320c91d40bae258d128f00cf', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-GVFAF53N.css': {size: 13285, hash: 'tXPgHVRR0e0', text: () => import('./assets-chunks/styles-GVFAF53N_css.mjs').then(m => m.default)}
  },
};

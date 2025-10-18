
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
    'index.csr.html': {size: 24709, hash: '26b7e0a8d4b0ea97eabe840cbec8d41912e4c00d687c4bfcd68a576371b719b0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17162, hash: '0b8945ed604d7a4e13a4b437cee3d13b885ddebb02b51c32c9cda7c196cbe378', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 68310, hash: '70825d735740bd7f9fd9fa76644a86c6c2f14a47625cd384ef1a228d6ec03e0c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-OYFW422M.css': {size: 8100, hash: 'Qv7leKZnN3g', text: () => import('./assets-chunks/styles-OYFW422M_css.mjs').then(m => m.default)}
  },
};

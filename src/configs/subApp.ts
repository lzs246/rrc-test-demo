/*
|--------------------------------------------------------------------------
|
| 对应 package.json/name
|
|--------------------------------------------------------------------------
*/

export const LIB_NAME = 'rrc-test';

const helDevUtils = require('hel-dev-utils');
const pkg = require('../../package.json');

const subApp = helDevUtils.createVue2SubApp(pkg, { npmCdnType: 'unpkg' });

module.exports = subApp;
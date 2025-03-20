const { getConfig } = require('expo-router/build/getConfig');
console.log(JSON.stringify(getConfig({ projectRoot: process.cwd() }), null, 2));

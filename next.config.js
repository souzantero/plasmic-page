
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['dCCsYeSMxr5mko2nE1Sdbx'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  
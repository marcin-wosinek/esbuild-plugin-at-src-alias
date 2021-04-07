const path = require('path');

module.exports = () => {
  return {
    name: 'alias',
    setup(build) {
      const regex = /@\//;

      // we do not register 'file' namespace here, because the root file won't be processed
      // https://github.com/evanw/esbuild/issues/791
      build.onResolve({ filter: regex }, args => {
        return {
          path: args.path.replace(regex, `${path.resolve('.')}/src/`),
        };
      });
    },
  };
};

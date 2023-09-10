const { shareAll } = require('@angular-architects/module-federation/webpack');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  ['shared-lib']); /* <----------------------- aqui vão as mapped paths to share */

module.exports = {
  output: {
    uniqueName: "host",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
        library: { type: "module" },

        // For remotes (please adjust)
        // name: "host",
        // filename: "remoteEntry.js",
        // exposes: {
        //     './Component': './projects/host/src/app/app.component.ts',
        // },

        // For hosts (please adjust)
        remotes: {
            "dashboard": "http://localhost:4201/remoteEntry.js",

        },

        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/platform-browser": { singleton: true, strictVersion: true, requiredVersion: 'auto' },

          ...sharedMappings.getDescriptors()
        })

    }),
    sharedMappings.getPlugin()
  ],
};


/***********************************************************************/
/*    Esta é uma configuração alternativa compartilhando todas as libs */
/*    - Isto inclui uma biblioteca comportalihada no monorepo          */
/***********************************************************************/

// const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

// module.exports = withModuleFederationPlugin({
//   remotes: {
//       "dashboard": "http://localhost:4201/remoteEntry.js",
//   },

//   shared: {
//     ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
//   },

//   /******************************************************/
//   /*  aqui vão as mapped paths para libs compartilhadas */
//   /******************************************************/
//   sharedMappings: ['shared-lib'],

// });

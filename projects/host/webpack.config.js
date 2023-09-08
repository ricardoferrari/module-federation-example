// const { shareAll } = require('@angular-architects/module-federation/webpack');
// const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
// const mf = require("@angular-architects/module-federation/webpack");
// const path = require("path");
// const share = mf.share;

// const sharedMappings = new mf.SharedMappings();
// sharedMappings.register(
//   path.join(__dirname, '../../tsconfig.json'),
//   ['shared-lib']); /* <----------------------- aqui vão as mapped paths to share */

// module.exports = {
//   output: {
//     uniqueName: "host",
//     publicPath: "auto"
//   },
//   optimization: {
//     runtimeChunk: false
//   },
//   resolve: {
//     alias: {
//       ...sharedMappings.getAliases(),
//     }
//   },
//   experiments: {
//     outputModule: true
//   },
//   plugins: [
//     new ModuleFederationPlugin({
//         library: { type: "module" },

//         // For remotes (please adjust)
//         // name: "host",
//         // filename: "remoteEntry.js",
//         // exposes: {
//         //     './Component': './projects/host/src/app/app.component.ts',
//         // },

//         // For hosts (please adjust)
//         remotes: {
//             "dashboard": "http://localhost:4201/remoteEntry.js",

//         },

//         // shared: share({
//         //   "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
//         //   "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
//         //   "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
//         //   "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },

//         //   ...sharedMappings.getDescriptors()
//         // })

//         shared: {
//           ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
//         },

//         sharedMappings: ['shared-lib'],

//     }),
//     sharedMappings.getPlugin()
//   ],
// };


const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  remotes: {
      "dashboard": "http://localhost:4201/remoteEntry.js",
  },

  // shared: {
  //   ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  // },

  shared: {
    "@angular/animations": {
      "singleton": true,
      "strictVersion": true,
      "requiredVersion": "^16.2.0",
      "version": "16.2.0"
    },
    "@angular/animations/browser": {
      "singleton": true,
      "strictVersion": true,
      "requiredVersion": "^16.2.0",
      "version": "16.2.0"
    },
    "@angular/animations/browser/testing": {
      "singleton": true,
      "strictVersion": true,
      "requiredVersion": "^16.2.0",
      "version": "16.2.0"
    },
    "@angular/common": {
      "singleton": true,
      "strictVersion": true,
      "requiredVersion": "^16.2.0",
      "version": "16.2.0"
    },
    "@angular/common/http": {
      "singleton": true,
      "strictVersion": true,
      "requiredVersion": "^16.2.0",
      "version": "16.2.0"
    },
    "@angular/common/http/testing": {
      "singleton": true,
      "strictVersion": true,
      "requiredVersion": "^16.2.0",
      "version": "16.2.0"
    },
    "@angular/common/testing": {
      "singleton": true,
      "strictVersion": true,
      "requiredVersion": "^16.2.0",
      "version": "16.2.0"
    },
    "@angular/compiler": {
      "singleton": true,
      "strictVersion": true,
      "requiredVersion": "^16.2.0",
      "version": "16.2.0"
    },
    "@angular/compiler/testing": {
      "singleton": true,
      "strictVersion": true,
      "requiredVersion": "^16.2.0",
      "version": "16.2.0"
    },
    "@angular/core": {
      "singleton": true,
      "strictVersion": true,
      "requiredVersion": "^16.2.0",
      "version": "16.2.0"
    },
    "@angular/core/rxjs-interop": {
      "singleton": true,
      "strictVersion": true,
      "requiredVersion": "^16.2.0",
      "version": "16.2.0"
    },
    "@angular/core/testing": {
      "singleton": true,
      "strictVersion": true,
      "requiredVersion": "^16.2.0",
      "version": "16.2.0"
    },
    "@angular/forms": {
      "singleton": true,
      "strictVersion": true,
      "requiredVersion": "^16.2.0",
      "version": "16.2.0"
    },
    "@angular/router": {
      "singleton": true,
      "strictVersion": true,
      "requiredVersion": "^16.2.0",
      "version": "16.2.0"
    },
    "@angular/router/testing": {
      "singleton": true,
      "strictVersion": true,
      "requiredVersion": "^16.2.0",
      "version": "16.2.0"
    },
    "rxjs": {
      "singleton": true,
      "strictVersion": true,
      "requiredVersion": "~7.8.0",
      "version": "7.8.0"
    },
    "rxjs/ajax": {
      "singleton": true,
      "strictVersion": true,
      "requiredVersion": "~7.8.0",
      "version": "7.8.0"
    },
    "rxjs/fetch": {
      "singleton": true,
      "strictVersion": true,
      "requiredVersion": "~7.8.0",
      "version": "7.8.0"
    },
    "rxjs/operators": {
      "singleton": true,
      "strictVersion": true,
      "requiredVersion": "~7.8.0",
      "version": "7.8.0"
    },
    "rxjs/testing": {
      "singleton": true,
      "strictVersion": true,
      "requiredVersion": "~7.8.0",
      "version": "7.8.0"
    },
    "rxjs/webSocket": {
      "singleton": true,
      "strictVersion": true,
      "requiredVersion": "~7.8.0",
      "version": "7.8.0"
    },
    "shared-lib": {
      "singleton": true
    }
  },

  sharedMappings: ['shared-lib'],

});

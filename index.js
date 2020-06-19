// Package modules.
const parcelPlugin = require('@parcel/plugin');

// Exports.
module.exports = new parcelPlugin.Optimizer({
  async optimize({ bundle, contents }) {
    return {
      contents: contents.replace(/define\.amd/g, 'define.notdefined')
    };
  }
});
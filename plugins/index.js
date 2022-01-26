/**
 * An index of plugins.
 *
 * Exposes an array of plugin instances.
 */

let AltTextPlugin = require("./alt-text");
let ContrastPlugin = require("./contrast");
let HeadingsPlugin = require("./headings");
let LabelsPlugin = require("./labels");
let LandmarksPlugin = require("./landmarks");
let TitlesPlugin = require("./titles");
let LinkTextPlugin = require("./link-text");
let A11yTextWand = require("./a11y-text-wand");
let EmptyElementsPlugin = require("./empty");
let FocusPlugin = require("./focus");

module.exports = {
    default: [
        new HeadingsPlugin(),
        new ContrastPlugin(),
        new LinkTextPlugin(),
        new LabelsPlugin(),
        new AltTextPlugin(),
        new EmptyElementsPlugin(),
        new FocusPlugin()
    ],

    experimental: [
		new LandmarksPlugin(),
		new TitlesPlugin(),
		new A11yTextWand()
    ],
};

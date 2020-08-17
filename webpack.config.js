const path = require("path")

module.exports = {
	mode: "production",
	entry: path.join(__dirname, "src", "index.js"),
	output: {
		filename: "devforumplus.js",
		path: __dirname,
	},
}

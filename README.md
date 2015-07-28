[![axisj-contributed](https://img.shields.io/badge/AXISJ.com-Contributed-green.svg)](https://github.com/axisj) ![](https://img.shields.io/badge/Seowoo-Mondo&Thomas-red.svg)

# grunt-ax-marko

> marko template render

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-ax-marko --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-ax-marko');
```

## The "ax_marko" task

### Overview
In your project's Gruntfile, add a section named `ax_marko` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
	ax_marko: {
		default: {
			options: {
				preserveWhitespace: true // expected output whitespace
			},
			files: [
				{
					src: "test/fixtures/*.html",
					global_data: { // append data
						layout_path: "../layouts/basic.marko" // src relative path
					},
					lang: {
						ko: "test/lang/ko.json",
						en: "test/lang/en.json"
					},
					dest: "test/expected",
					output_extension: "html"
				}
			]
		}
	},
});
```

## marko

[Marko Readme](https://github.com/marko-js/marko/blob/master/README.md) 

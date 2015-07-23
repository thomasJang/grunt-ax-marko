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


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

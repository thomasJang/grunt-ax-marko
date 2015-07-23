/*
 * grunt-axisj-marko
 * https://github.com/thomasJang/grunt-axisj-marko
 *
 * Copyright (c) 2015 ThomasJ
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		jshint: {
			all: ['Gruntfile.js', 'tasks/*.js', '<%= nodeunit.tests %>'], options: {
				jshintrc: '.jshintrc'
			}
		},

		// Before generating any new files, remove any previously-created files.
		clean: {
			tests: ['expected']
		},

		// Configuration to be run (and then tested).
		axisj_marko: {
			default: {
				options: {},
				files: [
					{
						src: "test/fixtures/**/*.html",
						lang: {
							ko: "test/lang/ko.json",
							en: "test/lang/en.json"
						},
						dest: "test/expected"
					}
				]
			}
		},

		// Unit tests.
		nodeunit: {
			tests: ['test/*_test.js']
		}

	});

	// Actually load this plugin's task(s).
	grunt.loadTasks('tasks');

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');

	// Whenever the "test" task is run, first clean the "tmp" dir, then run this
	// plugin's task(s), then test the result.
	// grunt.registerTask('test', ['clean', 'axisj_marko', 'nodeunit']);

	// By default, lint and run all tests.
	// grunt.registerTask('default', ['jshint', 'test']);

	grunt.registerTask('test', ['clean', 'axisj_marko']);

};

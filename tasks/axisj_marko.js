/*
 * grunt-axisj-marko
 * https://github.com/thomasJang/grunt-axisj-marko
 *
 * Copyright (c) 2015 ThomasJ
 * Licensed under the MIT license.
 */

'use strict';

var marko = require('marko');
require('marko/compiler').defaultOptions.preserveWhitespace = true;

module.exports = function (grunt) {

	// Please see the Grunt documentation for more information regarding task
	// creation: http://gruntjs.com/creating-tasks

	grunt.registerMultiTask('axisj_marko', '', function () {
		// Merge task-specific and/or target-specific options with these defaults.
		var options = this.options({});

		// Iterate over all specified file groups.
		this.files.forEach(function (f) {
			// Concat specified files.

			var lang_view = {};
			// lang 파일 검사
			for(var lang in f.lang){
				if (!grunt.file.exists(f.lang[lang])) {
					grunt.log.warn('lang.'+ lang +' file "' + f.lang[lang] + '" not found.');
				}else{
					lang_view[lang] = grunt.file.readJSON(f.lang[lang]);
				}
			}

			var src = f.src.filter(function (filepath) {
				if (grunt.file.isDir(filepath)) return false;
				// Warn on and remove invalid source files (if nonull was set).
				if (!grunt.file.exists(filepath)) {
					grunt.log.warn('Source file "' + filepath + '" not found.');
					return false;
				} else {
					return true;
				}
			});

			src.forEach(function(filepath){

				var tmpl = marko.load(filepath),
					dest_filename = filepath.substring( Math.max(filepath.lastIndexOf('/'), filepath.lastIndexOf('\\')), filepath.length);

				for(lang in lang_view){
					lang_view[lang].template_url = '../layouts/basic.marko';
					tmpl.render(lang_view[lang], function(err, output){
						if(!err)
							grunt.file.write(f.dest + '/' + lang + dest_filename, output);
						else
							grunt.log.error(err);
					});
				}

			});


			// grunt.file.write(f.dest, src);
			// grunt.log.writeln('File "' + f.dest + '" created.');
		});
	});

};

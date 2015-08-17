/*
 * grunt-axisj-marko
 * https://github.com/thomasJang/grunt-axisj-marko
 *
 * Copyright (c) 2015 ThomasJ
 * Licensed under the MIT license.
 */

'use strict';

var marko = require('marko');


module.exports = function (grunt) {

	// Please see the Grunt documentation for more information regarding task
	// creation: http://gruntjs.com/creating-tasks

	grunt.registerMultiTask('ax_marko', '', function () {
		// Merge task-specific and/or target-specific options with these defaults.
		var options = this.options({});

		require('marko/compiler').defaultOptions.preserveWhitespace = options.preserveWhitespace;

		// Iterate over all specified file groups.
		this.files.forEach(function (f) {
			// Concat specified files.

			var lang_view = {};
			// lang 파일 검사

			if(typeof f.lang == "string"){
				lang_view = null;
				if (!grunt.file.exists(f.lang)) {
					grunt.log.warn('lang or view not found.');
				} else {
					lang_view = grunt.file.readJSON(f.lang);
				}
			}
			else {
				for (var lang in f.lang) {
					if (!grunt.file.exists(f.lang[lang])) {
						grunt.log.warn('lang.' + lang + ' file "' + f.lang[lang] + '" not found.');
					} else {
						lang_view[lang] = grunt.file.readJSON(f.lang[lang]);
					}
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

				var tmpl = marko.load(filepath), dest_filename;




				if(typeof f.src_root == "string" && grunt.file.isDir(f.src_root)){
					//grunt.log.warn( grunt.file.isDir(f.src_root) );
					//grunt.log.warn( filepath );

					dest_filename = filepath.substr(f.src_root.length);
					dest_filename = dest_filename.substring(0, dest_filename.lastIndexOf('.'));
				}
				else{
					dest_filename = filepath.substring( Math.max(filepath.lastIndexOf('/'), filepath.lastIndexOf('\\')), filepath.length);
					dest_filename = dest_filename.substring(0, dest_filename.lastIndexOf('.'));
				}



				if(typeof f.lang == "string"){
					for(var k in f.global_data){
						lang_view[k] = f.global_data[k];
					}
					tmpl.render(lang_view, function(err, output){
						if(!err)
							grunt.file.write(f.dest + dest_filename + "." + f.output_extension, output.replace(/<\/%>/g, "").replace(/<\/%@>/g, ""));
						else
							grunt.log.error(err);
					});
				}else{
					for(lang in lang_view){
						for(var k in f.global_data){
							lang_view[lang][k] = f.global_data[k];
						}
						tmpl.render(lang_view[lang], function(err, output){
							if(!err)
								grunt.file.write(f.dest + '/' + lang + dest_filename + "." + f.output_extension, output.replace(/<\/%>/g, "").replace(/<\/%@>/g, ""));
							else
								grunt.log.error(err);
						});
					}
				}
			});

			// grunt.file.write(f.dest, src);
			// grunt.log.writeln('File "' + f.dest + '" created.');
		});
	});

};

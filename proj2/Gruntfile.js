module.exports = function(grunt) {

	grunt.initConfig({
		jsbeautifier: {
			files: ['Gruntfile.js', 'src/**/*.js', '!src/vendor/**/*.js'],
			options: {
				js: {
					indent_char: '\t',
					indent_size: 1
				}
			}
		},

		jshint: {
			files: ['Gruntfile.js', 'src/**/*.js', '!src/vendor/**/*.js'],
			options: {
				//				curly: true,
				eqeqeq: true,
				globals: {
					jQuery: true,
					console: true,
					module: true
				}
			}
		},

		jasmine: {
			src: ['src/**/*.js', '!src/vendor/**/*.js', '!src/**/*_spec.js'],
			options: {
				specs: 'src/**/*_spec.js',
				vendor: getVendorDependency(),
				keepRunner: true
			}
		},

		concat: {
			options: {
				separator: '\n;\n'
			},
			dist: {
				src: getVendorDependency().concat(['src/**/*.js', '!src/**/*_spec.js']),
				dest: 'target/dealership.all.js'
			}
		},

		uglify: {
			js: {
				src: 'target/dealership.all.js',
				dest: 'target/dealership.all-min.js'
			}
		},

		log1: {
			foo: [1, 2, 3]
		}

	});

	function getVendorDependency() {
		var deps = ['jquery', 'underscore', 'namespace'];
		return deps.map(function(dep) {
			return 'src/vendor/' + dep + '.js';
		});
	}

	grunt.loadNpmTasks('grunt-jsbeautifier');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['jsbeautifier', 'jshint', 'jasmine']);
	grunt.registerTask('prod', ['jsbeautifier', 'jshint', 'jasmine', 'concat', 'uglify']);

	// grunt calc:"1+5"
	grunt.registerTask('calc', 'simple calculator', function(formula) {
		/*jshint evil:true */
		if (arguments.length === 0) {
			grunt.log.writeln(0);
		} else {
			grunt.log.writeln(eval(formula));
		}
	});

	// grunt stat
	grunt.registerTask('stat', 'stats about code', function() {
		var srcs = grunt.file.expand('src/**/*.js', '!src/vendor/*.js', '!src/**/*_spec.js');
		var specs = grunt.file.expand('src/**/*_spec.js');

		grunt.log.writeln('Source files: #=', srcs.length, ', size=', filesTotalSize(srcs));
		grunt.log.writeln('Spec files:   #=', specs.length, ', size=', filesTotalSize(specs));

	});

	function filesTotalSize(files) {
		return files.reduce(function(prevValue, file) {
			return prevValue + grunt.file.read(file).length;
		}, 0);
	}

};

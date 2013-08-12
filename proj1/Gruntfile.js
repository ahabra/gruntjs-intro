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

		// Who does TDD? what framework?
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

};

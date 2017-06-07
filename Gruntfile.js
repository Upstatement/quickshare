module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';\n'
      },
      build : {
        src: ['src/build/utilities.js','src/build/services/*.js', 'src/build/quickshare_fn.js'],
        dest: 'src/build/quickshare.concat.js',
        nonull: true
      },
      test : {
        src: ['src/test/utilities.js','src/test/services/*.js'],
        dest: 'src/test/quickshare.concat.js',
        nonull: true
      }
    },
    uglify: {
      build: {
        files: {
          'quickshare.js': ['src/build/quickshare.concat.js'],
        },
        options: {
          enclose: {
            'window' : 'window',
          },
          beautify: true,
          compress: false,
        }
      },
      test: {
        files: {
          'test/test.quickshare.js': ['src/test/quickshare.concat.js']
        },
        options: {
          beautify: true,
          compress: false,
        }
      },
      compress: {
        files: {
          'quickshare.min.js': ['quickshare.js']
        },
        options: {
          compress: {}
        }
      }
    },
    qunit: {
      all: {
        options: {
          urls: [
            'http://localhost:3000/qs_test.html'
          ],
          console: true,
          force: true
        }
      }
    },
    jshint: {
      dev: {
        src: ['src/build/**/*.js','quickshare.js'],
      },
      test: {
        src: ['src/test/**/*.js','test.quickshare.js'],
      },
      options: {
        nonstandard: true, //allow escape
        sub: true, //allow [] notation for objects
        globals: {
          'console': true,
          'module': true,
          'document': true,
          'window':true,
          'test': true,
          'equal': true
        },
        ignores: ['src/**/*.concat.js']
      }
    },
    express: {
      options: {
        background: true
      },
      dev : {
        options: {
          script: './demo/server.js',
          node_env: 'dev'
        }
      },
      test : {
        options: {
          script: './demo/server.js',
          node_env: 'test'
        }
      }
    },
    watch: {
      dev: {
        files: ['<%= jshint.dev.src %>'],
        tasks: ['build','jshint', 'express:dev'],
      },
      test : {
        files: ['<%= jshint.dev.src %>', '<%= jshint.test.src %>'],
        tasks: ['testbuild', 'build','jshint', 'express:test', 'qunit'],
      },
      options: {
        spawn: false
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('build', ['concat:build', 'uglify:build', 'uglify:compress']);

  grunt.registerTask('testbuild', ['concat:test', 'uglify:test']);
  grunt.registerTask('minify', ['uglify:compress']);
  grunt.registerTask('test', ['testbuild', 'build','jshint', 'express:test', 'qunit', 'watch:test']);

  grunt.registerTask('default', ['build','jshint', 'express:dev', 'watch:dev']);

};

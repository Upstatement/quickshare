// var config = require('./config');

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';\n'
      },
      build : {
        src: ['build/utilities.js','build/services/*.js','build/quickshare.js'],
        dest: 'build/quickshare.concat.js',
        nonull: true
      },
      test : {
        src: ['test/utilities.js','test/services/*.js'],
        dest: 'test/quickshare.concat.js',
        nonull: true
      }
    },
    uglify: {
      build: {
        files: {
          'jquery.quickshare.js': ['build/quickshare.concat.js']
        },
        options: {
          enclose: {
            'jQuery' : '$'
          },
          beautify: true,
          compress: false,
        }
      },
      test: {
        files: {
          'test.quickshare.js': ['test/quickshare.concat.js']
        },
        options: {
          enclose: {
            'jQuery' : '$'
          },
          beautify: true,
          compress: false,
        }
      },
      compress: {
        files: {
          'jquery.quickshare.min.js': ['jquery.quickshare.js']
        },
        options: {
          compress: true
        }
      }
    },
    qunit: {
      all: {
        options: {
          urls: [
            'http://localhost:3000/qs_test.html'
          ],
          force: true
        }
      }
    },
    // browserstackTunnel: {
    //   options: {
    //     accessKey: config.browserstack_key
    //   },
    //   localhost: {
    //     options: {
    //       port: 3000,
    //       hostname: 'localhost',
    //       sslFlag: 0
    //     }
    //   },
    // },
    jshint: {
      dev: {
        src: ['build/**/*.js','jquery.quickshare.js'],
      },
      test: {
        src: ['test/**/*.js','test.quickshare.js'],
      },
      options: {
        nonstandard: true, //allow escape
        sub: true, //allow [] notation for objects
        globals: {
          jQuery: true,
          'console': true,
          'module': true,
          'document': true,
          'window':true,
          'test': true,
          'equal': true,
          '$': true
        },
        ignores: ['**/*.concat.js']
      }
    },
    express: {
      options: {
        background: true
      },
      dev : {
        options: {
          script: 'test_server.js',
          node_env: 'development'
        }
      },
      test : {
        options: {
          script: 'test_server.js',
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

  grunt.registerTask('build', ['concat:build', 'uglify:build']);

  grunt.registerTask('testbuild', ['concat:test', 'uglify:test']);
  grunt.registerTask('minify', ['uglify:compress']);
  grunt.registerTask('test', ['testbuild', 'build','jshint', 'express:test', 'qunit', 'watch:test']);

  grunt.registerTask('default', ['build','jshint', 'express:dev', 'watch:dev']);

};

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
        dest: 'build/quickshare_concat.js',
        nonull: true
      }
    },
    uglify: {
      build: {
        files: {
          'build.jquery.quickshare.js': ['build/quickshare_concat.js']
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
          'build.jquery.quickshare.min.js': ['build.jquery.quickshare.js']
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
          ]
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
      files: ['build/**/*.js','jquery.quickshare.js', 'quickshare-test.js'],
      options: {
        // options here to override JSHint defaults
        nonstandard: true,
        sub: true,
        ignores: ['build/quickshare_concat.js'],
        globals: {
          jQuery: true,
          'console': true,
          'module': true,
          'document': true,
          'window':true
        }
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
      files: ['<%= jshint.files %>'],
      tasks: ['build','jshint', 'express:dev'],
      options: {
        spawn: false
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-browserstack-tunnel');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('build', ['concat:build', 'uglify:build']);

  grunt.registerTask('test', ['build','jshint', 'express:test', 'qunit', 'watch']);

  grunt.registerTask('default', ['build','jshint', 'express:dev', 'watch']);

};

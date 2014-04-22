// var config = require('./config');

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
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
      files: ['jquery.quickshare.js', 'quickshare-test.js'],
      options: {
        // options here to override JSHint defaults
        nonstandard: true,
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
      tasks: ['jshint', 'express:dev'],
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

  grunt.registerTask('test', ['jshint', 'express:test', 'qunit', 'watch']);

  grunt.registerTask('default', ['jshint', 'express:dev', 'watch']);

};

module.exports = (grunt) ->
  grunt.initConfig
    coffee:
      base:
        files:
          'app.js': 'app.coffee'

  grunt.registerTask 'default', ['coffee:base']

  grunt.loadNpmTasks 'grunt-contrib-coffee'

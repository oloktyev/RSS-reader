// Обязательная обёртка
module.exports = function(grunt) {

    // Задачи
    grunt.initConfig({
        // Склеиваем
        concat: {
            main: {
                src: '../public/js/**/*.js', //Все JS-файлы в папке
                dest: '../public/js/scripts.js'
            }
        },
        // Сжимаем
        uglify: {
            main: {
                files: {
                    // Результат задачи concat
                    '../public/js/scripts.min.js': '<%= concat.main.dest %>'
                }
            }
        },
        
        coffee: {
            all: {
              options: {
                  separator: ';',
                  join: true
              },
              files: {
                "../public/js/**/coffee.js": "../public/js/**/*.coffee"
              }
            },
            convertJs: { //convert each *.coffee file in js folder into appropriate *.js file
                expand: true,
                flatten: true,
                cwd: '../public/js/',
                src: ['*.coffee'],
                dest: '../public/js/',
                ext: '.js'
            },
            convertViewJs: { //convert each *.coffee file in js folder into appropriate *.js file
                expand: true,
                flatten: true,
                cwd: '../public/js/views/',
                src: ['*.coffee'],
                dest: '../public/js/views/',
                ext: '.js'
            }
        },
        
        watch: {
            concat: {
                files: '../public/js/**/*.coffee',
                tasks: ['coffee:convertJs', 'coffee:convertViewJs', 'reload']  // Можно несколько: ['lint', 'concat']
            }
        },
        
        open: {
            all: {
                // Gets the port from the connect configuration
                path: 'http://localhost:<%= reload.port%>'
            }
        },
        
        reload: {
            port: 3000,
            proxy: {
                host: 'localhost',
            }
        },
    });

    // Загрузка плагинов, установленных с помощью npm install
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Задача по умолчанию
    grunt.registerTask('default', ['concat', 'uglify']);
    grunt.registerTask('server', 'Start a custom web server', function() {
        grunt.log.writeln('Started web server on port 3000');
        require('./server.js');
    });
    grunt.registerTask('debug', ['server', 'watch']);
};
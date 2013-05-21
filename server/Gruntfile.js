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
        
        
        watch: {
            concat: {
                files: '<%= concat.main.src %>',
                tasks: ['concat', 'uglify']  // Можно несколько: ['lint', 'concat']
            }
        }
    });

    // Загрузка плагинов, установленных с помощью npm install
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Задача по умолчанию
    grunt.registerTask('default', ['concat', 'uglify']);
    grunt.registerTask('debug', ['concat']);
    grunt.registerTask('server', 'Start a custom web server', function() {
        grunt.log.writeln('Started web server on port 3000');
        require('./server.js');
    });
};
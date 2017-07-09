$(document).on('ready', inittecnologies);
var q, tecnologies_array, diplomas_array, courses_sena_array_1, info, infoDiplomas, infoSenaCourses;

/**
* se activa para inicializar el documento
*/
function inittecnologies() {
    q = {};
    //Array con las tencologias usadas
    tecnologies_array = {
        "PHP": {
            "name": 'PHP',
            "route": 'images/iconos/iconos-Php.png'
        },
        "Laravel": {
            "name": 'Laravel',
            "route": 'images/iconos/iconos-laravel.png'
        },
        "JavaScript": {
            "name": 'JavaScript',
            "route": 'images/iconos/iconos-javaScript.png'
        },
        "Mysql": {
            "name": 'Mysql',
            "route": 'images/iconos/iconos-MySql.png'
        },
        "Github": {
            "name": 'Github',
            "route": 'images/iconos/iconos-Github.png'
        },
        "Ajax": {
            "name": 'Ajax',
            "route": 'images/iconos/iconos-ajax.png'
        },
        "Html5": {
            "name": 'Html5',
            "route": 'images/iconos/iconos-html5.png'
        },
        "AngularJs": {
            "name": 'AngularJs',
            "route": 'images/iconos/iconos-angular.png'
        },
        "MeanJS": {
            "name": 'MeanJS',
            "route": 'images/iconos/iconos-mean.png'
        },
        "AngularJs": {
            "name": 'AngularJs',
            "route": 'images/iconos/iconos-angular.png'
        },
        "RubyonRails": {
            "name": 'RubyonRails',
            "route": 'images/iconos/iconos-rails.png'
        },
        "Yeoman": {
            "name": 'Yeoman',
            "route": 'images/iconos/iconos-yeoman.png'
        },
        "Jquery": {
            "name": 'Jquery',
            "route": 'images/iconos/iconos-Jquery.png'
        },
        "Jquery": {
            "name": 'Jquery',
            "route": 'images/iconos/iconos-Jquery.png'
        },
        "Firebase": {
            "name": 'Firebase',
            "route": 'images/iconos/iconos-firebase.png'
        },
        "Css": {
            "name": 'Css',
            "route": 'images/iconos/iconos-css.png'
        },
        "Jquery": {
            "name": 'Jquery',
            "route": 'images/iconos/iconos-Jquery.png'
        },
        "NodeJS": {
            "name": 'NodeJS',
            "route": 'images/iconos/iconos-nodejs.png'
        },
        "PostgreSQL": {
            "name": 'PostgreSQL',
            "route": 'images/iconos/iconos-Post.png'
        },
        "NodeJS": {
            "name": 'NodeJS',
            "route": 'images/iconos/iconos-nodejs.png'
        },
        "Git": {
            "name": 'Git',
            "route": 'images/iconos/iconos-git.png'
        },
        "Vagrant": {
            "name": 'Vagrant',
            "route": 'images/iconos/iconos-vagrant.png'
        },
        "visual studio code": {
            "name": 'Visual studio code',
            "route": 'images/iconos/iconos-visual-studio-code.png'
        },
        "Angular2 - Typescript": {
            "name": 'angular-ts',
            "route": 'images/iconos/iconos-angular-ts.png'
        },
    }

    //Titulos Universitarios
    diplomas_array = {
        "Tecnologo de sistemas de informacion": {
            "name": 'Tecnologo de sistemas de informacion'
        },
        "Ingeniero de sistemas": {
            "name": 'Ingeniero de sistemas'
        },
    }

    //Curso sena
    courses_sena_array_1 = {
        "Curso de gestión de la seguridad informática": {
            "name": 'Curso de gestión de la seguridad informática - SENA',
        },
        "Curso de bases de datos generalidades y sistemas de gestión": {
            "name": 'Curso de bases de datos generalidades y sistemas de gestión - SENA'
        },
        "Curso de calidad en el desarrollo del software": {
            "name": 'Curso de calidad en el desarrollo del software - SENA'
        },
    }


    courses_sena_array_2 = {
        "Curso de diseño de casos de usos": {
            "name": 'Curso de diseño de casos de usos'
        },
        "Aplicación de la calidad del software en el proceso de desarrollo": {
            "name": 'Aplicación de la calidad del software en el proceso de desarrollo - SENA'
        },
        "Variables y estructuras de control en la programación orientada a objetos : JAVA": {
            "name": 'Variables y estructuras de control en la programación orientada a objetos : JAVA - SENA'
        },
        "Principios del analisis y diseño orientado a objetos, utitilizando el estadar UML": {
            "name": 'Principios del analisis y diseño orientado a objetos, utitilizando el estadar UML - SENA'
        },
        "Angular2": {
            "name": 'Angular2'
        },
    }
    TECHNOLOGY.showdataTechnology();
}
var TECHNOLOGY = {
    //Funcion para mostrar las tecnlogias usadas
    showdataTechnology: function () {
        $("#tecnologies_data").empty();
        info = '';
        for (var i in tecnologies_array) {
            info += '<li class="infoIconosItem"><img src="' + tecnologies_array[i].route + '" alt="' + tecnologies_array[i].name + '" /></li>';
        }
        $("#tecnologies_data").append(info);

        //Llamamos la Funcion para cargar los diplomas
        TECHNOLOGY.showdataDiplomas();
    },
    //Funcion para mostrar los titulos univesitarios
    showdataDiplomas: function () {
        $("#diplomas_data").empty();
        infoDiplomas = '';
        for (var i in diplomas_array) {
            infoDiplomas += '<li>' + diplomas_array[i].name + '</li>';
        }
        $("#diplomas_data").append(infoDiplomas);

        //Llamamos la Funcion para cargar Cursos del sena
        TECHNOLOGY.showdataSenaCourses("#sena_courses_data1", courses_sena_array_1);
        TECHNOLOGY.showdataSenaCourses("#sena_courses_data2", courses_sena_array_2);
    },
    showdataSenaCourses: function (id, data) {
        $(id).empty();
        infoSenaCourses = '';
        for (var i in data) {
            infoSenaCourses += '<li>' + data[i].name + '</li>';
        }
        $(id).append(infoSenaCourses);
    }
}


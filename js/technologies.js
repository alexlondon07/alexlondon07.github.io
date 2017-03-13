$(document).on('ready', inittecnologies);
var q, tecnologies_array, info;

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
    TECHNOLOGY.showdataTechnology();
}
var return_page = '';
var TECHNOLOGY = {
    showdataTechnology: function () {
        $("#tecnologies_data").empty();
        info = '';
        for (var i in tecnologies_array) {
            info += '<li class="infoIconosItem"><img src="' + tecnologies_array[i].route + '" alt="' + tecnologies_array[i].name + '" /></li>';
        }
        $("#tecnologies_data").append(info);
    }
}


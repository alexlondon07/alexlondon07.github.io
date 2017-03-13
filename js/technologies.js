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
            "route": 'iconos/iconos-Php.png'
        },
        "Laravel": {
            "name": 'Laravel',
            "route": 'iconos/iconos-laravel.png'
        },
        "JavaScript": {
            "name": 'JavaScript',
            "route": 'iconos/iconos-javaScript.png'
        },
        "Mysql": {
            "name": 'Mysql',
            "route": 'iconos/iconos-Mysql.png'
        },
        "Github": {
            "name": 'Github',
            "route": 'iconos/iconos-Github.png'
        },
        "Ajax": {
            "name": 'Ajax',
            "route": 'iconos/iconos-ajax.png'
        },
        "Html5": {
            "name": 'Html5',
            "route": 'iconos/iconos-html5.png'
        },
        "AngularJs": {
            "name": 'AngularJs',
            "route": 'iconos/iconos-angular.png'
        },
        "MeanJS": {
            "name": 'MeanJS',
            "route": 'iconos/iconos-mean.png'
        },
        "AngularJs": {
            "name": 'AngularJs',
            "route": 'iconos/iconos-angular.png'
        },
        "RubyonRails": {
            "name": 'RubyonRails',
            "route": 'iconos/iconos-rails.png'
        },
        "Yeoman": {
            "name": 'Yeoman',
            "route": 'iconos/iconos-yeoman.png'
        },
        "Jquery": {
            "name": 'Jquery',
            "route": 'iconos/iconos-Jquery.png'
        },
        "Jquery": {
            "name": 'Jquery',
            "route": 'iconos/iconos-Jquery.png'
        },
        "Firebase": {
            "name": 'Firebase',
            "route": 'iconos/iconos-firebase.png'
        },
        "Css": {
            "name": 'Css',
            "route": 'iconos/iconos-css.png'
        },
        "Jquery": {
            "name": 'Jquery',
            "route": 'iconos/iconos-Jquery.png'
        },
        "NodeJS": {
            "name": 'NodeJS',
            "route": 'iconos/iconos-nodejs.png'
        },
        "PostgreSQL": {
            "name": 'PostgreSQL',
            "route": 'iconos/iconos-Post.png'
        },
        "NodeJS": {
            "name": 'NodeJS',
            "route": 'iconos/iconos-nodejs.png'
        },
        "Git": {
            "name": 'Git',
            "route": 'iconos/iconos-git.png'
        },
        "Vagrant": {
            "name": 'Vagrant',
            "route": 'iconos/iconos-vagrant.png'
        },
        "visual studio code": {
            "name": 'Visual studio code',
            "route": 'iconos/iconos-visual-studio-code.png'
        },
        "Angular2 - Typescript": {
            "name": 'angular-ts',
            "route": 'iconos/iconos-angular-ts.png'
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


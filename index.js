//Impotamos los archivos necesarios
var config = require('./config/configYargs');
var options = require('./actions/optionsController');
const yargs = require('yargs');

//Leemos los comandos
const argv = yargs
            .command('List', 'Mostrar todos los cursos')
            .command('AddCourse', 'Agregar curso',config.optionsAddCourse)
            .command('AddCourseEstudent', 'Prematricular estudiante',config.optionsAddCourseStudent)
            .argv;

//Tomamos el comando que nos dirá cual será el método a ejecutar.
let arg = argv._.toString();

const execute = (arg,argv) =>{
   // console.log(argv);
    options.options(arg,argv);
}
//Ejecutamos el proceso
execute(arg,argv);











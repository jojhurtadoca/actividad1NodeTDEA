var course = require('../actions/courseController');
var preerrollment = require('../actions/preenrollmentController');

const options = (arg,argv) =>{
    switch(arg){
        case 'List':
            course.list();
            break;
        case 'AddCourse':
            course.add(argv.name,argv.duration,argv.cost);
            break;
        case 'AddCourseEstudent':
            preerrollment.addCourseStudent(argv.idc,argv.aname,argv.c,argv.d);
            break;            
        default:
            console.log('Opción no definida.');
            break;
    }
}

module.exports = {
    options
}
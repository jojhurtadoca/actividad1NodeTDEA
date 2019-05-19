var course = require('../model/course');
var courseController = require('./courseController');
var courseUtil = require('../Util/courseUtil');
var preenrrollment = require('../model/preenrollment');
//Incluimos el lector de consola
var stdin = process.openStdin();

const addCourseStudent = async (idc, aname, c,d) =>{
   
    if(d=="inscribir"){
        addCourseWithStudent(idc,aname,c);
    }else{
        //En caso contrario, devolvemos la lista de cursos;
        courseController.list();
    }
}

const addCourseWithStudent = async (idc, aname, c) =>{
    //Realizamos algunas validaciones antes de prematricular el curso
        
    //validamos si el curso con el id suministrado existe
    let courseList = await course.courseList();
    let jsonData = JSON.parse(courseList);

    let courseFilter = jsonData.find(courseArray => courseArray.id == idc);

    if(typeof courseFilter==='undefined' || courseFilter.lenght==0){
        console.log('Curso no encontrado con el id suministrado.');
        return false;
    }

    //Validamos que el estudiante no se haya matriculado antes

    let preenrrollmentList = await preenrrollment.preernrollmentList();

    let jsonDataPreenrollment;

    //Mostramos la info del curso antes de matricular al estudiante
    console.log('---------------------');
    console.log('Curso seleccionado');
    console.log('---------------------');
    console.log('');

    courseUtil.printData(courseFilter);
    //validamos que existan datos en el json de preinscripciones o prematriculas
    if(typeof preenrrollmentList==='undefined' || preenrrollmentList.lenght==0){
        jsonDataPreenrollment = [];
    }else{
        jsonDataPreenrollment = JSON.parse(preenrrollmentList);

        let preenrrollmentListFilter = jsonDataPreenrollment.find(pre => 
            (pre.idc==idc && pre.c==c));

        if(preenrrollmentListFilter!=null){
            console.log('Este estudiante ya está pre-matriculado.');
            return false;
        }
    }
    //agregamos la matricula
    let newCourseStudent = {
        idc,
        aname,
        c
    }

    jsonDataPreenrollment.push(newCourseStudent);
    await preenrrollment.add(jsonDataPreenrollment, 'Pre-matricula realizada correctamente.');

}

module.exports = {
    addCourseStudent
}
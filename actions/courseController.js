
var course = require('../model/course');
var courseUtil = require('../Util/courseUtil');

const list = async () => {
    var courseList = await course.courseList();
    let jsonData = JSON.parse(courseList);

    console.log('---------------------');
    console.log('Lista de Cursos');
    console.log('---------------------');
    console.log('');
    
    courseUtil.printDataWithTime(jsonData,2000,0);
};

const add = async (name,duration,cost) =>{
    //Obtenemos la lista de cursos
    var courseList = await course.courseList();
    let jsonData = JSON.parse(courseList);

    //Agregamos el nuevo item

    let newCourse = {};
    newCourse.id = jsonData.length + 1;
    newCourse.name = name;
    newCourse.duration = duration;
    newCourse.cost = cost;

    jsonData.push(newCourse);

    //console.log(jsonData);

    await course.add(jsonData, 'Curso añadido correctamente');
};

module.exports = {
    list,
    add
};
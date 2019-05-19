//Utilizamos esta utilidad para leer json
var courseUtil = require('../Util/courseUtil');

const courseList = async () =>{

    try {
        let data = await courseUtil.readFile('./db/course.json');
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const add = async (courseData,msg) => {
    await courseUtil.addCourse('./db/course.json',courseData,msg);
}


module.exports = {
    courseList,
    add
}
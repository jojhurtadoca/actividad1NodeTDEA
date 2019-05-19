//Utilizamos esta utilidad para leer json
var courseUtil = require('../Util/courseUtil');

const preernrollmentList = async () =>{

    try {
        let data = await courseUtil.readFile('./db/coursestudent.json');
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const add = async (data ,msg) => {
    await courseUtil.addCourse('./db/coursestudent.json',data, msg);
}

module.exports = {
    preernrollmentList,
    add
}
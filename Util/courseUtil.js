var fs = require('fs');

const printDataWithTime = (obj,time, index) => {
    setTimeout(function () {    
        printData(obj[index]);                            
        if (index < (obj.length-1)) {            
            printDataWithTime(obj,time,index+1);             
        }                     
     }, 2000)   
}

const printData = (obj) => {
    console.log('---------------------');
    console.log('Id curso: ' + obj.id);
    console.log('Nombre de curso: ' + obj.name);
    console.log('Duración del curso: ' + obj.duration + ' hrs.');
    console.log('Costo del curso: ' + obj.cost + ' (COP)');
}

const readFile = (file1)=> {
    return new Promise(function (resolve, reject) {
        fs.readFile(file1, 'utf8', function (err, data) {
            if (err)
                reject(err);
            else
                resolve(data);
        });
    });
}

const addCourse = (path, courseData,msg) =>{
    return new Promise(function (resolve, reject) {
        fs.writeFile(path, JSON.stringify(courseData),'utf8', function(err){
            if(err){ 
                reject(err);
            } else {
                console.log(msg);
            }
        });
    });
}

module.exports = {
    printDataWithTime,
    readFile,
    addCourse,
    printData
}
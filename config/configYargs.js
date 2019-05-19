const optionsAddCourse = {
    Nombre:{
        alias: 'name',
        default: ''
    },
    Duracion:{
        alias: 'duration',
        default: 0
    },
    Valor:{
        alias: 'cost',
        default: 0
    }
}

const optionsAddCourseStudent = {
    idCurso:{
        alias: 'idc',
        demand: true
    },
    NombreAlumno:{
        alias: 'aname',
        demand: true
    },
    Cedula:{
        alias: 'c',
        demand: true
    },
    Inscribir:{
        alias: 'd',
    }
}

module.exports = {
    optionsAddCourse,
    optionsAddCourseStudent
}
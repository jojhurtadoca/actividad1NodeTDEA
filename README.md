Actividad 1: Node JS

Realizada por: Jose Julian Hurtado Castellanos.

Tecnológico de Antioquia.

Guía de Uso de los Métodos

Para Listar todos los cursos: Copiaremos en la consola (cmd o terminal de Git), "node index List". Al copiar esto, nos aparecerán la lista de cursos en un intervalo de 2 segundos cada uno.

Ejemplo: node index List


Lista de Cursos

Id curso: 1
Nombre de curso: Course 1
Duración del curso: 4 hrs.
Costo del curso: 34000 (COP)

Id curso: 2
Nombre de curso: Course 2
Duración del curso: 5 hrs.
Costo del curso: 4000 (COP)

Id curso: 3
Nombre de curso: Course 3
Duración del curso: 400 hrs.
Costo del curso: 300 (COP)

Id curso: 4
Nombre de curso: curso prueba
Duración del curso: 8 hrs.
Costo del curso: 50 (COP)

Id curso: 5
Nombre de curso: curso prueba 2
Duración del curso: 8 hrs.
Costo del curso: 40 (COP)


Para agregar un curso: Copiaremos en la consola "node index AddCourse --name="el nombre deseado" --duration=(duración estimada en horas) --cost=(costo del curso en pesos colombianos)

Ejemplo: node index AddCourse name="nodeJs" --duration=150 --cost=100

La consola nos retornará el siguiente mensaje:

'Curso añadido correctamente'

Para pre-matricular un estudiante a un curso: Copiaremos en la consola "node index AddCourseEstudent --idc="id del curso" --aname="nombre del estudiante" --c=(cédula del estudiante) --d="inscribir", en caso de que el último parámetro (d) tenga un valor diferente a "inscribir" o no sea parametrizado, se mostrará la lista de cursos, en caso contrario se pre-matriculará el alumno.

Ejemplo: node index AddCourseEstudent --idc=1 --aname="est 2" --c=1234 --d="inscribir"

Curso seleccionado

Id curso: 1
Nombre de curso: Course 1
Duración del curso: 4 hrs.
Costo del curso: 34000 (COP)

Pre-matricula realizada correctamente.


Para finalizar el proceso de consola de node, presionamos la tecla crtl seguido de la tecla c.

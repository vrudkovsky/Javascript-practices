// ## Задание
//
// Создать объект студент "студент" и проанализировать его табель.
//
//     #### Технические требования:
//     - Создать пустой объект `student`, с полями `name` и `last name`.
// - Спросить у пользователя имя и фамилию студента, полученные значения записать в соответствующие поля объекта.
// - В цикле спрашивать у пользователя название предмета и оценку по нему. Если пользователь нажмет Cancel при n-вопросе о названии предмета, закончить цикл. Записать оценки по всем предметам в свойство студента `tabel`.
// - Посчитать количество плохих (меньше 4) оценок по предметам. Если таких нет, вывести сообщение `Студент переведен на следующий курс`.
// - Посчитать средний балл по предметам. Если он больше 7 - вывести сообщение `Студенту назначена стипендия`.

let student = {};

student.name = prompt("Please enter your name", "Victor");
student.lastname = prompt("Please enter your surname", "Rudkovsky");
student.tabel = {};

const tabel = () => {
    let studentSubjectInput = 1;
    let studentPointInput = 1;

    while (studentSubjectInput) {
        studentSubjectInput = prompt("Please enter your subject", "Mathematics");
        studentPointInput = prompt("Please enter your subject point", 12);

        if (studentSubjectInput && studentPointInput) {
            student.tabel [studentSubjectInput] = studentPointInput;
        }
    }
};

const goodStudent = (obj) => {
    let counter = 0;

    for( key in obj ) {
        if( obj[key] < 4 ) {
        counter++;
        }
    }

    if( counter === 0 ) {
        console.log("Студент переведен на следующий курс")
    } else {
        console.log("количество плохих (меньше 4) оценок по предметам - " + counter + " штук");
    }
};

const averageStudentPoint = (obj) => {
    let counter2 = 0;
    let averageStudentPoint = 0;
    let sum = 0;

    for( key in obj ) {
        counter2++;
        sum += Number(obj[key]);
    }
    averageStudentPoint = sum / counter2;
    console.log(("средний бал - " + averageStudentPoint));

    if (averageStudentPoint > 7) {
        console.log("Студенту назначена стипендия");
    }
};


tabel();
goodStudent(student.tabel);
averageStudentPoint(student.tabel);

console.log(student);

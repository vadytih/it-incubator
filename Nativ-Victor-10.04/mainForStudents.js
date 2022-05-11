const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90,
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105
    },
];

const user = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"]
}

//1. Создайте поверхностную копию объекта user
let copyUser;
copyUser= {...user}
console.log(`//1. Создайте поверхностную копию объекта user //Проверка: ${user===copyUser}`)
console.log(`//1. Создайте поверхностную копию объекта user //Проверка: ${user.friends===copyUser.friends}`)
//Проверка:
// console.log(user===copyUser)- \\что должно быть в консоли?
// console.log(user.friends===copyUser.friends)-\\ что должно быть в консоли?

//2. Полная (глубокая) копия объекта user
let deepCopyUser;
// deepCopyUser = {...user}
// deepCopyUser.friends = [...user.friends]
deepCopyUser= {...user, friends: [...user.friends]}

console.log(`//2. Полная (глубокая) копия объекта user //Проверка: ${user===deepCopyUser}`)
console.log(`//2. Полная (глубокая) копия объекта user //Проверка: ${user.friends===deepCopyUser.friends}`)
//Проверка:
// console.log(user===deepCopyUser) - что должно быть в консоли?
// console.log(user.friends===deepCopyUser.friends) - что должно быть в консоли?

//3. Поверхностная копия массива students
let copyStudents;
copyStudents = [...students]
console.log(`//3. Поверхностная копия массива students //Проверка: ${students===copyStudents}`)
console.log(`//3. Поверхностная копия массива students //Проверка: ${students[0]===copyStudents[0]}`)
//Проверка:
// console.log(код проверки написать самостоятельно ) - что должно быть в консоли?
// console.log(код проверки написать самостоятельно) - что должно быть в консоли?

//4*. Полная (глубокая) копия массива students (map)
let deepCopyStudents=[];
students.map(t => {
    deepCopyStudents = [...deepCopyStudents, {...t}]
    // deepCopyStudents.push({...t})
})

console.log(`//4*. Полная (глубокая) копия массива students (map) //Проверка массива: ${students===deepCopyStudents}`)
console.log(`//4*. Полная (глубокая) копия массива students (map) //Проверка провера обьекта: ${students[5]===deepCopyStudents[5]}`)
console.log(`//4*. Полная (глубокая) копия массива students (map) //Проверка .name: ${students[5].name===deepCopyStudents[5].name}`)
console.log(`//4*. Полная (глубокая) копия массива students (map) //Проверка .age: ${students[5].age===deepCopyStudents[5].age}`)
console.log(`//4*. Полная (глубокая) копия массива students (map) //Проверка .scores: ${students[5].scores===deepCopyStudents[5].scores}`)

//Проверка:
// console.log(код проверки написать самостоятельно) - что должно быть в консоли?
// console.log(код проверки написать самостоятельно) - что должно быть в консоли?

// NB!!! Далее все преобразования выполняем не модифицируя исходный массив students
// Вывод результатов - в консоль

//5. Отсортируйте копию массива deepCopyStudents по алфавиту (sort)
let sortedByName;
sortedByName = [...deepCopyStudents].sort((a,b)=> a.name > b.name ? 1 : -1 )
console.log(`//5. Отсортируйте копию массива deepCopyStudents по алфавиту (sort) ${sortedByName.map(t=> t.name)}`);

//5a. Отсортируйте deepCopyStudents по успеваемости(лучший идёт первым)(sort)
let sortedByScores;
sortedByScores = [...deepCopyStudents].sort((a,b)=> a.scores - b.scores) // sort((a,b)=> b.scores - a.scores)
console.log(`//5a. Отсортируйте deepCopyStudents по успеваемости(лучший идёт первым)(sort): ${sortedByScores.reverse().map(t=> `${t.name}: ${t.scores}`)}`);

//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let  bestStudents = [];
bestStudents = [...deepCopyStudents].filter(f => f.scores >= 100)
console.log('//6. Сформируйте массив студентов, у которых 100 и более баллов (filter):')
console.log([...deepCopyStudents].filter(f => f.scores >= 100))

//6a. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

let topStudents;
topStudents = [...deepCopyStudents].sort((a,b)=> a.scores - b.scores).splice(-3)
console.log('//6a. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)')
console.log(topStudents)
console.log([...deepCopyStudents].sort((a,b)=> a.scores - b.scores))

//6b. Объедините массивы deepCopyStudents и topStudents так,
//чтоб сохранился порядок сортировки (spread-оператор || concat)
let newDeepCopyStudents;
newDeepCopyStudents = [...deepCopyStudents, ...topStudents]
console.log('//6b. Объедините массивы deepCopyStudents и topStudents так,\n' +
    '//чтоб сохранился порядок сортировки (spread-оператор || concat)')
console.log(newDeepCopyStudents)


//7. Сформируйте массив холостых студентов (filter)
let notMarriedStudents;
notMarriedStudents = [...deepCopyStudents].filter(f => !f.isMarried)
console.log('//7. Сформируйте массив холостых студентов (filter)')
console.log(notMarriedStudents)

//8. Сформируйте массив имён студентов (map)
let studentsNames=[];
deepCopyStudents.map(t => {
    studentsNames = [...studentsNames, t.name]
})
console.log('//8. Сформируйте массив имён студентов (map)')
console.log(studentsNames)

//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом (join)
// - запятой (join)
console.log('//8a. Сформируйте строку из имён студентов, разделённых\n' +
    '// - пробелом (join)\n' +
    '// - запятой (join)')
let namesWithSpace;
namesWithSpace = [...deepCopyStudents].map(t=> t.name).join(" ")
console.log(namesWithSpace)
let namesWithComma;
namesWithComma = [...deepCopyStudents].map(t=> t.name).join(",")
console.log(namesWithComma)

//9. Добавьте всем студентам свойство "isStudent" со значением true (map)
let trueStudents;
 trueStudents = deepCopyStudents.map(el => ({...el, isStudent: true}))
console.log(trueStudents)

//10. Nick женился. Выполните соответствующие преобразование массива students (map)
let studentsWithMarriedNick;
 studentsWithMarriedNick = students.map(el=> el.name ==="Nick"? {...el, isMarried: true}: el);
console.log(studentsWithMarriedNick)

//11. Найдите студента по имени Ann (find)
let ann;
ann = deepCopyStudents.find(f=>f.name === "Ann")
console.log(ann)

//12. Найдите студента с самым высоким баллом (reduce)
// - c помощью reduce
// - *не испльзуя методы массивов и Math.max()*
// let bestStudent;
const bestStudent = deepCopyStudents.reduce((acc, cur) =>acc.scores<cur.scores ? cur.scores : acc)
console.log(bestStudent)

//13. Найдите сумму баллов всех студентов (reduce)

// И поднимаем руку!!!!

let scoresSum = deepCopyStudents.reduce((acc,cur)=> acc + cur.scores, 0);
console.log(scoresSum)

// 14. Д.З.:
// Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива students,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
const addFriends = (students) => {
   //..............................
}
console.log(addFriends(students));








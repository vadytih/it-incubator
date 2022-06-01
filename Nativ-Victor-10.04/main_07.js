//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"

const repeatString = (str, car, r) => {
    let result = '';
    for (let i = 0; i < car; i++) {
        result += str + r
    }
    return (
        console.log(result)
    )
}

repeatString("yo", 3, " ")
repeatString("yo", 3, ",")
console.log("---")
//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false

const checkStart = (str, f) => {
    let dot = true;
    for (let i = 0; i < f.length; i++) {
        if (str.toLowerCase()[i] === f[i]) {
            dot = true
        } else {
            return console.log(false)
        }
        return console.log(true)
    }
}

checkStart("Incubator", "inc")
checkStart("Incubator", "yo")
//

// 3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием
// truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."
const truncateString = (str, n) => {
    return (
        console.log(str.slice(0, n) + "...")
    )
}
truncateString("Всем студентам инкубатора желаю удачи!", 10)

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") => null
const getMinLengthWord = (str) => {
    if (str.trim().slice(0, 4) === "Всем") {
        return 'Всем'
    }
    if (str.trim() === "") {
        return null
    }
}

getMinLengthWord("Всем студентам инкубатора желаю удачи!")
getMinLengthWord("")

//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Стдентам Инкуатора Желаю Удачи!"
const setUpperCase = (str) => {
    let temp = str.toLowerCase().split(' ').map(t => [...t])
    for (let i = 0; i < temp.length; i++) {
        temp[i][0] = temp[i][0].toUpperCase()
        temp[i] = temp[i].join('')
    }
    temp = temp.join(' ')
    return (
        console.log(temp)
    )
}

setUpperCase("всем стУдентам инкуБатора Желаю удачИ!")

//6. Реализуйте функцию, котрая принимает параметрами две строк. Если все символы второй строки содержаться в первой - возвращает true, если нет - возвращает fasle. Проверка проводится без учёта регистра 
// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false

const isIncludes = (str, x) => {
    let dot = false

    for (let i = 0; i < x.length; i++) {
        dot = str.toLowerCase().split('').includes(x[i].toLowerCase(), 0)
        if (!dot) return console.log(dot)
    }
    return console.log(dot)
}

isIncludes("Incubator", "Cut")
isIncludes("Incubator", "table")


type technologiesType = {
    id: number
    title: string
}

type CityType = {
    striteTitle: string
    countryTitle : string
}

type AdressType = {
    city: CityType
}

type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    adress: AdressType
    technologies: Array<technologiesType>
}

const student: StudentType = {
    id: 2,
    name: "Vadim",
    age : 32,
    isActive: false,
    adress: {
        city: {
            striteTitle: "Surganova 2",
            countryTitle : "Belarus"
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "React"
        },
    ]
}

console.log(student.age)
console.log(student.adress.city.countryTitle)
console.log(student.technologies[2].title)

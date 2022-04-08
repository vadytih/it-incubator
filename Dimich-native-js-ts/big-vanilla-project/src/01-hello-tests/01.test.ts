import {splitIntoWords, sum, mult} from "./01";

let a: number
let b: number
let c: number

beforeEach(() => {
    a = 1
    b = 2
    c = 3
})


test("sum сумма должна быть корректной", () => {
    // входные данные (data)


    // функция которую будем тестировать (action)
    const result1 = sum(a, b)
    c = 100
    const result2 = sum(b, c)

    //Ожидаемый результат (expert result)
    expect(result1).toBe(3)
    expect(result2).toBe(102)
})

test("mult произведение должна быть корректным", () => {
    // входные данные (data)
    const a = 1;
    const b = 2;
    const c = 3;

    // функция которую будем тестировать (action)
    const result1 = mult(a, b)
    const result2 = mult(b, c)
    const result3 = mult(a, c)

    //Ожидаемый результат (expert result)
    expect(result1).toBe(2)
    expect(result2).toBe(6)
    expect(result3).toBe(3)
})

test("Вернуть массив без заков припинания", () => {
    //date
    const result1 = "Мама мыла раму"
    const result2 = "Где моя сосиска?"
    const result3 = "Кот сожрал, собака!"

    //Active
    splitIntoWords(result1)
    splitIntoWords(result2)
    splitIntoWords(result3)

    // Ожидаемые ответы
    expect(splitIntoWords(result1).length).toBe(3)
    expect(splitIntoWords(result1)[0]).toBe("мама")
    expect(splitIntoWords(result1)[1]).toBe("мыла")
    expect(splitIntoWords(result1)[2]).toBe("раму")

    expect(splitIntoWords(result2).length).toBe(3)
    expect(splitIntoWords(result2)[0]).toBe("где")
    expect(splitIntoWords(result2)[1]).toBe("моя")
    expect(splitIntoWords(result2)[2]).toBe("сосиска")

    expect(splitIntoWords(result3).length).toBe(3)
    expect(splitIntoWords(result3)[0]).toBe("кот")
    expect(splitIntoWords(result3)[1]).toBe("сожрал")
    expect(splitIntoWords(result3)[2]).toBe("собака")

})
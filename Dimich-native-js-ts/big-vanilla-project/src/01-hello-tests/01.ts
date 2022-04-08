export function splitIntoWords (str: string) {
    let arr = str.trim().split(" ")
    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].replace(/[\s.,%,?,!]/g, '').toLowerCase()
    }
    return arr
}

export function sum (a: number, b: number) {
    return a + b;
}

export function mult (a: number, b: number) {
    return a * b;
}

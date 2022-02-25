// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<any>): number {
    return nums.reduce((accum, el) => accum += el)
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {

    let typeOfTriangle = "00"

    if ((a < b + c) && (b < a + c) && (c < a + b)) {
        if (a === b && b === c && c === a) {
            typeOfTriangle = "10"
        } else if (a === b || b === c || c === a) {
            typeOfTriangle = "01"
        } else if (a !== b && b !== c && c !== a) {
            typeOfTriangle = "11"
        }
    }
    return typeOfTriangle
}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
    return number.toString().split("").map(el => +el).reduce((accum, el) => accum += el)
}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    let sumOne: number = 0
    let sumTwo: number = 0

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            sumOne += arr[i]
        } else {
            sumTwo += arr[i]
        }
    }
    return sumOne < sumTwo
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    return (array.filter(el => el > 0 && Number.isInteger(el))).map(el => el * el)
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {

    if (N === 0) {
        return 0
    } else {
        return N + sumFirstNumbers(N - 1);
    }

        let result: number = 0
        for (let i = 0; i <= N; i++) {
            result += i
        }
        return result
}


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {
    //YOUR CODE

    return [1]
}

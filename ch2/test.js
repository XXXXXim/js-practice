// const a = 'bar'
// console.log(a)

// let a = 10
// let b = a

// a = 20
// console.log(a)
// console.log(b)

// const obj1 = {name: "Alice", age : 30}
// const obj2 = obj1

// obj2.age = 40

// console.log(obj1.age)
// console.log(obj2.age)

// console.log(30 + "30")

// const age = 100
// const message = '홍길동은 ${age}세 입니다'
// console.log(message)

// let a = 3

// console.log(a++)
// console.log(a)
// console.log(++a)    

// console.log([1] == [1])
// const a = [1]
// const b = a


const arr = ["a", "b", "c"]

for (let i of arr){
    console.log(i)
    i = "d"
}

console.log(arr)

for (let i =0; i<arr.length; i++){
    console.log(i)
    arr[i] = "d"
}
console.log(arr)
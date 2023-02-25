'use strict'

const arr = [12 , 23 , 22 , 123 , 13, 43 , 52 , 22 , 15 , 54]
/*
function printArr(array){
    console.log(array)
}
printArr(arr)



function double(array){

    for(let i=0 ; i < array.length; i++ ){
        if (array[i] % 2 == 0) {
             console.log(array[i])
        }
    }
}

double(arr)


function summ(array){
    let sum = 0 
    for(let i=0; i < array.length; i++){
    sum +=array[i]
    }
    console.log(sum)
}
summ(arr)



function max(array){
    let rez = array[0]
    for(let i=0; i < array.length; i++){
        if(array[i] > rez)
        rez = array[i]
    }
   console.log(rez)
}

max(arr)


let num1 = +prompt('какой элемент вставить в массив?')
let num2 = +prompt('каким по счету его вставить в массив?')
let insert = function(array, item, index) {
    return[
        ...array.slice(0, index),     
        item,          
        ...array.slice(index)  
    ]
}

console.log(insert(arr, num1 , num2 ))



let num = +prompt('какой по счету элемент массива нужно удалить?') -1 ; 


function del(x, array){
    array.splice(x , 1 )
    console.log(array)
}

del(num , arr);



const array1 = [5 , 2 , 6 , 7 , 4]
const array2 = [3 , 5 , 7 , 8 , 9]
function concat1(arr1 , arr2){
    for(let x=0 ; x < arr2.length ; x++){
    for(let i=0 ; i < arr1.length; i++){
        if (arr1[i] == arr2[x]){
          arr1.splice(i, 1)
        }
    }
    }

 let arr3 = arr1.concat(arr2)
return arr3
}

console.log(concat1(array1 , array2))



const array1 = [5 , 2 , 6 , 7 , 4]
const array2 = [3 , 5 , 7 , 8 , 9]
function concat2(arr1, arr2){
    let arr4=[]
    for(let x=0 ; x < arr2.length ; x++){
        for(let i=0 ; i < arr1.length; i++){
            if (arr1[i] == arr2[x]){
      arr4[i] = arr1[i]
            }
        }
        }
        console.log(arr4)
}

concat2(array1 , array2)


*/


const array1 = [5 , 2 , 6 , 7 , 4]
const array2 = [3 , 5 , 7 , 8 , 9]

function concat3(arr1, arr2 ){
    
    for(let x=0 ; x < arr2.length ; x++){
      for(let i=0 ; i < arr1.length; i++){
       if (arr1[i] == arr2[x]) {
           arr2.splice(x , 1)
       }
       } 
       }
       console.log(arr2)
    }

    concat3(array1, array2)

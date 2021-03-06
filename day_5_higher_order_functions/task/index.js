const myArr = [
  {
    id: "59761c23b30d971669fb42ff",
    isActive: true,
    age: 36,
    name: "Dunlap Hubbard",
    gender: "male",
    company: "CEDWARD",
    email: "dunlaphubbard@cedward.com",
    phone: "+1 (890) 543-2508",
    address: "169 Rutledge Street, Konterra, Northern Mariana Islands, 8551"
  },
  {
    id: "59761c233d8d0f92a6b0570d",
    isActive: true,
    age: 24,
    name: "Kirsten Sellers",
    gender: "female",
    company: "EMERGENT",
    email: "kirstensellers@emergent.com",
    phone: "+1 (831) 564-2190",
    address: "886 Gallatin Place, Fannett, Arkansas, 4656"
  },
  {
    id: "59761c23fcb6254b1a06dad5",
    isActive: true,
    age: 30,
    name: "Acosta Robbins",
    gender: "male",
    company: "ORGANICA",
    email: "acostarobbins@organica.com",
    phone: "+1 (882) 441-3367",
    address: "697 Linden Boulevard, Sattley, Idaho, 1035"
  },
  {
    id: "59761c23acd38891373f3efd",
    isActive: true,
    age: 38,
    name: "Lawrence Morrison",
    gender: "male",
    company: "OCTOCORE",
    email: "lawrencemorrison@octocore.com",
    phone: "+1 (863) 482-3587",
    address: "798 Troutman Street, Motley, New Mexico, 216"
  },
  {
    id: "59761c230a89b90a7f47c8e5",
    isActive: true,
    age: 29,
    name: "Trudy Bennett",
    gender: "female",
    company: "XPLOR",
    email: "trudybennett@xplor.com",
    phone: "+1 (920) 520-3028",
    address: "141 Richardson Street, Carrsville, Utah, 5923"
  }
]


// 1. Write a `filter` function which filters out the items which don't pass a test

// `array` is an array, `test` is a function
//


function filter(array, test) {
    let passed = []
    // with for...of we can iterate through an array (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
    //for(let i = 0; i < array.length; i++) {
        //const arrayElement = array[i]
        //let new_array = passed
        //if(test(arrayElement)) {
            //new_arary = new_array.push(arrayElement)
        //}
    //}
    for(let arrayElement of array) {
        if(test(arrayElement)){
            passed.push(arrayElement)
        }
    }
    return passed
}

//console.log(filter(myArr, function(n) {
    //return n.gender == `male`
//}), 'function')

// Native .filter (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

//-----------------------------------------------//
// 2. Write a function `map` which transform a given array by applying another function.

function map(array, transform) {
    let mapped = []
    for(let element of array) {
        mapped.push(transform(element))
    }
    return mapped
}

//console.log(map(myArr, i => i.id)) // Should return a new  array of the same length as original array containing only emails

//Native Array.map(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

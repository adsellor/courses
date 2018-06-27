function arrayCounter(array) {
    for (let  i = 1; i <= array.length; i++) {
        if(i == 1) {
            console.log(array[i-1] + " Is the 1st element")
        } else if(i == 2) {
            console.log(array[i-1] + " Is the 2nd element")
        } else if(i == 3) {
            console.log(array[i-1] + " Is the 3rd element")
        } else {
            console.log(array[i-1] + " Is the " + i + "th")
        }
    }
}

let array1 = [true,2,undefined,4,5,6,7,8]

arrayCounter(array1)

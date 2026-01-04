let arr = [10, 20 , 30 , 40 ,50];

console.log("origional array", arr);

let j = 0;
let s = arr.length - 1;

while (j < s) {

    let temp = arr[j];
    arr[j] = arr[s]
    arr[s] = temp;

    j++
    s--

}

console.log("revers arr", arr);
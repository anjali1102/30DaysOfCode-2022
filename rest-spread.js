// rest pack it in array
// and rest shouls always be last parameter

function anjali(a, b, ...c) {
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
}

anjali(4, 5, 6);

/*
----------------------
*/

// function anjali(a, b, ...c, d) {
//     console.log("a", a);
//     console.log("b", b);
//     console.log("c", c);
//     console.log("d",d);
//   }

//   anjali(4, 5, 6, 7);

//spread operator

let array2 = [1, 2, 3, 4, 5, 6, 7];
console.log(array2); //[1, 2, 3, 4, 5, 6, 7]
console.log(...array2); // 1 2 3 4 5 6 7

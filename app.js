// 1 ////////
 
// function top(a) {
//     return a.find((b) => a.indexOf(b) === a.lastIndexOf(b));
// }

// let b = [1, 2, 3, 2, 1, 4];
// console.log(top(b));






// 2

// function top(a) {
//     return a.map((b) => (b > 0 ? -b : Math.abs(b)));
// }

// let b = [1, -2, 3, -4, 5];
// console.log(top(b));






// 3

// function top(a) {
//     return a.map((b) => b ** 2);
// }

// let b = [2, 3, 4];
// console.log(top(b));






// 4

// function top(a) {
//     return a.filter((b) => a.indexOf(b) === a.lastIndexOf(b));
// }

// let b = [1, 2, 2, 3, 4, 4, 5];
// console.log(top(b));






// 5

// function top(a, n) {
//     return a.filter((b) => b % n !== 0).length;
// }

// let b = [2, 3, 4, 5, 6, 7];
// console.log(top(b, 2));






// 6

// function top(a) {
//     return a.reduce((c, b, i) => {
//         if (b % 2 === 0) c.push(i);
//         return c;
//     }, []);
// }

// let b = [1, 2, 3, 4, 6];
// console.log(top(b));





// 7

// function top(a) {
//     let c = Math.max(...a);
//     return a.filter((b) => b !== c);
// }

// let b = [1, 5, 3, 9, 7];
// console.log(top(b));






// 8

// function top(a) {
//     return a.reverse();
// }

// let b = [1, 2, 3, 4, 5];
// console.log(top(b));


function Custom(array, call) {
    for (let i = 0; i < array.length; i++) {
       
        call(array[i], i, array);
    }
}
const num = [1, 2, 3, 4, 5];
Custom(num, (element, index, array) => {
    console.log(`Element at ${index} is ${element}`);
});
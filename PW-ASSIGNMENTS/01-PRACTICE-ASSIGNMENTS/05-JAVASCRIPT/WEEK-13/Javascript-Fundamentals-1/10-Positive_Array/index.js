// Program to print only the positive numbers out of an array of integers --------->


const arr = [1, 2, 3, 4, -5, -6, -7, -10, 11, 16, 20]

for(i = 0; i < arr.length; i++){
    if (arr[i] > 0) {
        console.log(arr[i]);
    }
}
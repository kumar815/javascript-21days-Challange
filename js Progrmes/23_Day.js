//?write a javascript function findMedain that take an array of numbers as argument and return the median value of the array.
//?the returned result should be a number

//?for examples, themedian of 3,3,5,9,15 is 5. if there is an even number of obsevesan then there is no single middle value.
//the medain is the usally define to be the  mean of the two medle value.

//todo tips
//? sort the order of array ascending order
//?if the array aas an add number of elements,the median  in the middle element.
//?if the array has an even number of elements,the median is the average of the two middle elements.

const findMedian =(arr) => {
    //step1:- sort the array
    arr.sort((a,b)=>a-b);
    //step2:- find the median array length even or odd
    let length = arr.length;
    let mid = Math.floor(arr.length/2);
    //console.log(mid);
    if(length % 2 === 0){
        //step3:- for even length array
        return (arr[mid] + arr[mid-1]/2);
    }
    else{
        //step4:- for odd length array
        return arr[mid];
    }
}
console.log(findMedian([5,3,9,1,7]));//5
console.log(findMedian([2,4,6,8]));//8
console.log(findMedian([1,3,5,7,9,11]));//9.5
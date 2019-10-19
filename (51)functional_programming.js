console.log('********* 51 *********');

const arr1 = [1,2,3];

function mapForEach(arr,fn) {

    let newArr = [];
    for( let i=0; i< arr.length; i++) {
        newArr.push (
            fn(arr[i])
        )
    }

    return newArr;
}

function checkPastLimit2 (limiter) {
    return function (item) {
        console.log('limiter',limiter);
        return item > limiter;
    }
}

const arr4 = mapForEach( arr1, checkPastLimit2(0));
console.log('arr4',arr4,'arr1',arr1);
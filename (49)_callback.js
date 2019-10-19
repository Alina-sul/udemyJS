console.log('********* 49 *********');

function tellMeWhenDone(callback) {

    let a = 1000;
    let b = 2000;

    callback();
}

tellMeWhenDone(function () {

    console.log('Done!');

});
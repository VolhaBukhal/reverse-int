module.exports = function reverse (n) {
    let arr = n.toString().split('');
    let newStr = '';

    arr = arr.filter( el => el !== "-");

    for (let i = arr.length-1; i >= 0; i--) {
        newStr += arr[i];
    }

    return +newStr;

}

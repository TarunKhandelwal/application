function maximalSquare(arr){
    input = oneDToTwoD(arr);
    input.forEach(function(element, index){
        var value = element[0];
        var i = 0;
        while(value == 0){
            i++;
            value = element[i];
        }
        var squareLength = i;
        while(i<element.length){

        }
    });
}

function oneDToTwoD(arr){
    var twoDArray = [];
    arr.forEach(function(element, index){
        twoDArray.push(Array.from(element));
    });
    return twoDArray;
}
module.exports = {
    maximalSquare : maximalSquare
}

function average(myArray){
    var total = 0;
    for(var i = 0; i < myArray.length; i++){
        total += myArray[i];
    }
    return Math.round(total / myArray.length);
}

var scores = [90, 98, 89, 100, 100, 86, 94];
console.log (scores);
console.log(average(scores));

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(scores2);
console.log(average(scores2));



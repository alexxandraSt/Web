console.log(' ');
console.log('   TASK 3: Join words  ');

var a = ["oven", "envier", "erase", "serious"];
var b = ["move", "over", "very"];
var c = ["to", "ops", "psy", "syllable"]
function join(arr) {
    var newWords = arr[0];
    var overlaps = 345356;
    for (var i = 1; i < arr.length; i++){
        var l = 1;
       while (!arr[i-1].endsWith(arr[i].slice(0, l))){
           l += 1;
       }
       if (l < overlaps){
        overlaps = l;
       }

       newWords = newWords.slice(0, -l);
       newWords += arr[i];
    
    
    }
    return [newWords, overlaps];
}
console.log(join(a));
console.log(join(b));
console.log(join(c));
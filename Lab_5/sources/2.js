console.log(' ');
console.log('   TASK 2: Wiggle string  ');

function wiggleString(word) {
    var arr = [];
    
    for (var i = 0; i <= word.length; i++){
        arr.push(' '.repeat(i) + word);
    }
    for (var i = word.length - 1; i >= 0; i--){
        arr.push(' '.repeat(i) + word);
    }
    return arr;
}

 console.log(wiggleString('hello'));
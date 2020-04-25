console.log('   TASK 1: Italian fiscal code  ');
const months = { 1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "H", 7: "L", 8: "M", 9: "P", 10: "R", 11: "S", 12: "T" }
class Human {
    constructor(name, surname, gender, dob) {
        this.name = name;
        this.surname = surname;
        this.gender = gender;
        this.dob = dob;
    }
}
var x = new Human('Aleksandra', 'Stegnishcheva', 'female', '5.6.2001');
console.log(x);
var y = new Human('Matt', 'Edabit', 'male', '1.1.1900');
console.log(y);
var z = new Human('Helen', 'Yu', 'female', '1.12.1950');
console.log(z);

function removeVowels(word) {
    return word.replace(/[aeiouy]/gi, '');
}

function removeConsonant(word) {
    return word.replace(/[bcdfghjklmnpqrstvwxz]/gi, '');
}

function surname_f(word) {
    var new_surname = '';

    if (removeVowels(word).length >= 3) {
        for (var i = 0; i < 3; i++) {
            new_surname += removeVowels(word)[i];
        }
        return new_surname.toUpperCase();
    }

    if (removeVowels(word).length < 3 && word.length >= 3) {
        new_surname += removeVowels(word);
        for (i = 0; i < 3; i++) {
            if (new_surname.length != 3) {
                new_surname += removeConsonant(word)[i];
            } else {
                new_surname += 'X';
            }
        }
        return new_surname.toUpperCase();
    }

    if (word.length < 3) {
        new_surname += removeVowels(word) + removeConsonant(word) + 'X';
        return new_surname.toUpperCase();
    }
}

function name_f(word) {
    var new_name = '';

    if (removeVowels(word).length == 3) {
        new_name = removeVowels(word);
        return new_name.toUpperCase();
    }

    if (removeVowels(word).length > 3) {
        for (var i = 0; i < 4; i++) {
            if (i == 1) {
                continue;
            }
            new_name += removeVowels(word)[i];
        }
        return new_name.toUpperCase();
    }

    if (removeVowels(word).length < 3 && word.length >= 3) {
        new_name += removeVowels(word);
        for (i = 0; i < 3; i++) {
            if (new_name.length != 3) {
                new_name += removeConsonant(word)[i];
            } else {
                break;
            }
        }
        return new_name.toUpperCase();
    }

    if (word.length < 3) {
        new_name += removeVowels(word) + removeConsonant(word) + 'X';
        return new_name.toUpperCase();
    }
}

function data_gender(dob, gen) {
    var data = '';
    var res = '';
    for (i = 0; i < 2; i++) {
        data = dob.split('.');
    }
    day = data[0];
    month = data[1];
    year = data[2];
    res = year.substr(-2);
    res += months[month];
    if (gen == 'male') {
        if (day < 10) {
            res += '0' + day;
        } else {
            res += day;
        }
    } else {
        var newday = +day;
        newday += 40;
        res += newday;
    }
    return (res);
}

console.log(surname_f(x.surname) + name_f(x.name) + data_gender(x.dob, x.gender));
console.log(surname_f(y.surname) + name_f(y.name) + data_gender(y.dob, y.gender));
console.log(surname_f(z.surname) + name_f(z.name) + data_gender(z.dob, z.gender));
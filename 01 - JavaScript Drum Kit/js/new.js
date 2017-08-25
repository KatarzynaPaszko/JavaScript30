/*
Flatten a nested array. You must account for varying levels of nesting.

steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
*/

function steamrollArray(arr) {
    // "use strict";
    var flatArray, i;
    flatArray = [];

    for (i = 0; i < arr.length; i++) {
        if (arr[i].length === 0) {
            console.log("pusta tablica");
        } else if (Array.isArray(arr[i])) {
            checkArray(arr[i]);
        } else {
            flatArray[i] = arr[i];
        }
    }
    function checkArray(z) {
        for (i = 0; i < z.length; i++) {
            if (Array.isArray(z[i])) {
                checkArray(z[i]);
            } else {
                flatArray.push(z[i]);
            }
        }
    }


    return flatArray;
}

var answer = steamrollArray([[["a"]], [["b"]]]);
console.log(answer);
var answer1 = steamrollArray([1, [[2]], [3, [[4]]]]);
console.log(answer1);
var answer2 = steamrollArray([1, [], [3, [[4]]]]);
console.log(answer2);
var answer3 = steamrollArray([1, {}, [3, [[4]]]]);
console.log(answer3);

// nie przechodzi tylko pierwszego testu - zwraca tylko a, nie mam pojęcia dlaczego. Przecież pętla odpala się dla wszystkich elementów tablicy

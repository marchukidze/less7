
var string = 'Hello World';
var restrSymb = ['l', 'd'];

function restr(str, symb) {
    var str = str.split('');
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < symb.length; j++){
            if (str[i] == symb[j]) {
                str.splice(i, 1);
                i--;
            }
        }
    }

    return str.join('');
}

console.log(restr(string, restrSymb));

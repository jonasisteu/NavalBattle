"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vars = require("./grid");
var promptSync = require("prompt-sync");
function initialize() {
    var prompt = promptSync();
    var option1 = process.argv[2];
    var nbShip = parseInt(process.argv[3]);
    if (option1 === '--number') {
        // const ship = prompt('("Destroyer", "Submarine", "Battleship", "Cruser") : ');
        // for (let player: number = 1; player <= maxPlayers; player += 1) {
        console.log('Player 1 prepare for battle !');
        for (var a = 0; a < nbShip; a += 1) {
            var pos = prompt("Player 1 - Select ships positions (".concat(a + 1, ") : "));
            var posNum = parseInt(pos[1]);
            var posLet = pos[0];
            for (var j = 0; j < vars.letters.length; j += 1) {
                for (var i = 0; i < vars.matrix1.length; i += 1) {
                    for (var y = 0; y < vars.matrix1[i].length; y += 1) {
                        if (posLet == vars.letters[j]) {
                            if (posNum === i + 1) {
                                vars.matrix1[i][j] = 'r';
                                vars.grid1();
                                break;
                            }
                            else {
                                // console.log('Marche pas');
                                break;
                            }
                        }
                        else {
                            break;
                        }
                    }
                }
            }
            console.log('');
        }
        console.log('');
        console.log('All ships placed !');
        console.log('Player 2 prepare for battle !');
        // }
        for (var b = 0; b < nbShip; b += 1) {
            var pos = prompt("Player 2 - Select ships positions (".concat(b + 1, ") : "));
            var posNum2 = parseInt(pos[1]);
            var posLet2 = pos[0];
            for (var j = 0; j < vars.letters.length; j += 1) {
                for (var i = 0; i < vars.matrix2.length; i += 1) {
                    for (var y = 0; y < vars.matrix2[i].length; y += 1) {
                        if (posLet2 == vars.letters[j]) {
                            if (posNum2 === i + 1) {
                                vars.matrix2[i][j] = 'r';
                                vars.grid2();
                                break;
                            }
                            else {
                                // console.log('Marche pas');
                                break;
                            }
                        }
                        else {
                            break;
                        }
                    }
                }
            }
            console.log('');
        }
        console.log('');
    }
}
exports.default = initialize;

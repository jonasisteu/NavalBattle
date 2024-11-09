"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vars = require("./grid");
var promptSync = require("prompt-sync");
var navalBattleEz_1 = require("./navalBattleEz");
// process.stdin.resume();
// process.on('SIGINT', function() {
//   console.log('');
//   console.log('Game cancelled. Initialize again !');
//   console.log('');
//   process.exit(0);
// });
if (process.argv[2] === '--number') {
    try {
        var nbShipEnd = parseInt(process.argv[3]);
        var prompt_1 = promptSync();
        (0, navalBattleEz_1.default)();
        var inf = 0;
        var count1 = 0;
        var count2 = 0;
        while (inf === 0) {
            console.log('Player 1, it\'s your turn !');
            console.log('Opponent\'s board');
            vars.ogrid1();
            console.log('');
            console.log('Your board');
            vars.grid1();
            var pos = prompt_1("Take your shot : ");
            var posNum = parseInt(pos[1]);
            var posLet = pos[0];
            for (var j = 0; j < vars.letters.length; j += 1) {
                for (var i = 0; i < vars.matrix2.length; i += 1) {
                    for (var y = 0; y < vars.matrix2[i].length; y += 1) {
                        if (posLet == vars.letters[j]) {
                            if (posNum === i + 1) {
                                if (vars.matrix2[i][j] === 'r') {
                                    console.log('Sunk !');
                                    vars.matrix2[i][j] = '@';
                                    vars.mTmatrix1[i][j] = '@';
                                    count1 += 1;
                                }
                                else {
                                    console.log('Miss !');
                                    vars.matrix2[i][j] = 'O';
                                    vars.mTmatrix1[i][j] = 'O';
                                }
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
            console.log('Player 2, it\'s your turn !');
            console.log('Opponent\'s board');
            vars.ogrid2();
            console.log('');
            console.log('Your board');
            vars.grid2();
            var pos3 = prompt_1("Take your shot : ");
            var posNum3 = parseInt(pos3[1]);
            var posLet3 = pos3[0];
            for (var j = 0; j < vars.letters.length; j += 1) {
                for (var i = 0; i < vars.matrix1.length; i += 1) {
                    for (var y = 0; y < vars.matrix1[i].length; y += 1) {
                        if (posLet3 == vars.letters[j]) {
                            if (posNum3 === i + 1) {
                                if (vars.matrix1[i][j] === 'r') {
                                    console.log('Sunk !');
                                    vars.matrix1[i][j] = '@';
                                    vars.mTmatrix2[i][j] = '@';
                                    count2 += 1;
                                }
                                else {
                                    console.log('Miss !');
                                    vars.matrix1[i][j] = 'O';
                                    vars.mTmatrix2[i][j] = 'O';
                                }
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
            if (count1 === nbShipEnd) {
                console.log('Player 1 wins the game !');
                console.log('');
                console.log('Player 1 board');
                vars.grid1();
                console.log('Player 2 board');
                vars.grid2();
                break;
            }
            else if (count2 === nbShipEnd) {
                console.log('Player 2 wins the game !');
                console.log('');
                console.log('Player 1 board');
                vars.grid1();
                console.log('Player 2 board');
                vars.grid2();
                break;
            }
        }
        console.log('Game Over !');
    }
    catch (_a) {
        console.log('Game Cancelled.');
    }
}
else {
    console.log('Usage : node navGame.js --number <n>');
}

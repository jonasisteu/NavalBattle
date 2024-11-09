import * as vars from './grid';
import * as promptSync from 'prompt-sync';
import initialize from './navalBattleEz';

// process.stdin.resume();

// process.on('SIGINT', function() {
//   console.log('');
//   console.log('Game cancelled. Initialize again !');
//   console.log('');
//   process.exit(0);
// });
if (process.argv[2] === '--number') {

try {

const nbShipEnd: number = parseInt(process.argv[3]);

const prompt = promptSync();

initialize();

const inf: number = 0;
let count1: number = 0;
let count2: number = 0;

while(inf === 0) {

  console.log('Player 1, it\'s your turn !');
  console.log('Opponent\'s board');

  vars.ogrid1();

  console.log('');
  console.log('Your board');

  vars.grid1();

  const pos = prompt(`Take your shot : `)

  const posNum: number = parseInt(pos[1]);
  const posLet: string = pos[0];
  
  
  for (let j: number = 0; j < vars.letters.length; j += 1) {
    for (let i: number = 0; i < vars.matrix2.length; i += 1) {
      for (let y: number = 0; y < vars.matrix2[i].length; y += 1) {
        if (posLet == vars.letters[j]) {
          if (posNum === i + 1) {
            if (vars.matrix2[i][j] === 'r') {
              console.log('Sunk !');
              vars.matrix2[i][j] = '@';
              vars.mTmatrix1[i][j] = '@';
              count1 += 1;
            } else {
              console.log('Miss !')
              vars.matrix2[i][j] = 'O';
              vars.mTmatrix1[i][j] = 'O';
            }
            break;
          } else {
            // console.log('Marche pas');
            break;
          }
        } else {
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

  const pos3 = prompt(`Take your shot : `)

  const posNum3: number = parseInt(pos3[1]);
  const posLet3: string = pos3[0];
  
  
  for (let j: number = 0; j < vars.letters.length; j += 1) {
    for (let i: number = 0; i < vars.matrix1.length; i += 1) {
      for (let y: number = 0; y < vars.matrix1[i].length; y += 1) {
        if (posLet3 == vars.letters[j]) {
          if (posNum3 === i + 1) {
            if (vars.matrix1[i][j] === 'r') {
              console.log('Sunk !');
              vars.matrix1[i][j] = '@';
              vars.mTmatrix2[i][j] = '@';
              count2 += 1;
            } else {
              console.log('Miss !')
              vars.matrix1[i][j] = 'O';
              vars.mTmatrix2[i][j] = 'O';
            }
            break;
          } else {
            // console.log('Marche pas');
            break;
          }
        } else {
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
  } else if (count2 === nbShipEnd) {
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

} catch {
  console.log('Game Cancelled.')
}

} else {
  console.log('Usage : node navGame.js --number <n>');
}
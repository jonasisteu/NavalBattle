import * as vars from './grid';
import * as promptSync from 'prompt-sync';

export default function initialize() {

  const prompt = promptSync();

  const option1: string = process.argv[2];
  const nbShip: number = parseInt(process.argv[3]);

  if (option1 === '--number') {
    // const ship = prompt('("Destroyer", "Submarine", "Battleship", "Cruser") : ');
    
    // for (let player: number = 1; player <= maxPlayers; player += 1) {
    
    console.log('Player 1 prepare for battle !');

      for (let a: number = 0; a < nbShip; a += 1) {
  
        const pos = prompt(`Player 1 - Select ships positions (${a +1}) : `)
        const posNum: number = parseInt(pos[1]);
        const posLet: string = pos[0];
  
  
        for (let j: number = 0; j < vars.letters.length; j += 1) {
          for (let i: number = 0; i < vars.matrix1.length; i += 1) {
           for (let y: number = 0; y < vars.matrix1[i].length; y += 1) {
             if (posLet == vars.letters[j]) {
               if (posNum === i + 1) {
                vars.matrix1[i][j] = 'r';
                vars.grid1();
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
      }
      console.log('');
      console.log('All ships placed !');
      console.log('Player 2 prepare for battle !');
    // }
    for (let b: number = 0; b < nbShip; b += 1) {
  
      const pos = prompt(`Player 2 - Select ships positions (${b + 1}) : `)
      const posNum2: number = parseInt(pos[1]);
      const posLet2: string = pos[0];
  
      for (let j: number = 0; j < vars.letters.length; j += 1) {
        for (let i: number = 0; i < vars.matrix2.length; i += 1) {
         for (let y: number = 0; y < vars.matrix2[i].length; y += 1) {
           if (posLet2 == vars.letters[j]) {
             if (posNum2 === i + 1) {
              vars.matrix2[i][j] = 'r';
              vars.grid2();
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
    }
    console.log('');
  }

}

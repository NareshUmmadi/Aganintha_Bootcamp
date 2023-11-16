 
 const fs = require('fs');
const yaml = require('js-yaml');


class ChessBoard{
   
    _board=[];

    constructor(){

     this._board=[
        ['WR','WN','WB','WQ','WK','WB','WN','WR'],
        ['WP','WP','WP','WP','WP','WP','WP','WP'],
        ['**','**','**','**','**','**','**','**'],
        ['**','**','**','**','**','**','**','**'],
        ['**','**','**','**','**','**','**','**'],
        ['**','**','**','**','**','**','**','**'],
        ['BP','BP','BP','BP','BP','BP','BP','BP'],
        ['BR','BN','BB','BQ','BK','BB','BN','BR']
     ];

    }
    printBoard() {
        for (let row = 0; row < 8; row++) {
        //   console.log(`${this._board[row]}`);
           console.log(this._board[row].join(' '));
        }

        //  for(let i=0;i<8;i++){
        //     let row=' ';
        //     for(let j=0;j<8;j++){
        //         // console.log(`${this._board[i][j]}`); 
        //         row+=`${this._board[i][j]} `;
        //     }
        //     console.log(row);
        //  }

      }

      movePeice(fromX,fromY,toX,toY){

        const person=this._board[fromX][fromY];
        this._board[toX][toY]=person;
        this._board[fromX][fromY]='**';
        this.printBoard();
      }

      toKillPeice(fromX,fromY,toX,toY){

        const kill=this._board[fromX][fromY];
        this._board[toX][toY]=kill;
        this._board[fromX][fromY]='**';
        this.printBoard();



        // if(this._board[x][y]!=="**"){
        //     this._board[x][y]="**";
        //     this.printBoard();
        // }
        // else{
        //     console.log("unable to kill");
        //     this.printBoard();
        // }
      }

        saveToFile(fileName){
          const yamlData=yaml.dump(this._board);
          fs.writeFileSync(fileName, yamlData, 'utf8');
          console.log(`Chessboard saved to ${fileName}`);
        }

        loadFromFile(filename) {
          const yamlData = fs.readFileSync(filename, 'utf8');
          this._board = yaml.load(yamlData);
          console.log(`Chessboard loaded from ${filename}`);
        }
      }


const chess=new ChessBoard();
  chess.printBoard();
   console.log('after moving the person');
  chess.movePeice(6,5,4,5);
  chess.toKillPeice(6,3,1,2);

  chess.saveToFile('chessboard.yaml');

  const loadedChess = new ChessBoard();
loadedChess.loadFromFile('chessboard.yaml');
chess.printBoard();


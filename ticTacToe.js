$(function() {
    console.log("Running");
    function Player (type) {
        this.type = type;
    }

    function Board () {
        console.log("board working");
        this.boxes = $('.box');
        this.player1 = new Player('X');
        this.player2 = new Player('O');
        this.turn = this.player1.type;
        this.click = 0;
        var _this = this;
        // console.log("Outside this is",this);
        this.boxes.click (function(event) {
            console.log("Inside this is", this);

            
            var $box= $(event.target);
            
            if ($box.html() === "&nbsp;") {
                _this.click ++
                console.log(_this.click);
                $box.html(_this.turn);
                _this.changeTurn();
                    if (_this.click >= 5) {
                        _this.getWinner()
                    } 
            } else {
                return 
            }
        });
    };

    Board.prototype.changeTurn = function () {
        if (this.turn === "X") {
            this.turn = ("O");
        } else {
            this.turn = ("X");
        }
    };

    Board.prototype.getWinner = function () {
        if (this.winnerIs(this.player1.type)) {
            alert(this.player1.type + ' won this game!!');
        } else if (this.winnerIs(this.player2.type)) {
            alert(this.player2.type + ' won this game!!');
        }  
        return null; 
    };


    Board.prototype.winnerIs = function (player) {

        console.log(player)
        return this.winsRow(player) || this.winsColumn(player) || this.winsDiagonal(player);
    }


    Board.prototype.winsRow = function (player) {
        return this.allThree(player, document.getElementById('b1').innerHTML, document.getElementById('b2').innerHTML, document.getElementById('b3').innerHTML) ||
                this.allThree(player, document.getElementById('b4').innerHTML, document.getElementById('b5').innerHTML, document.getElementById('b6').innerHTML) ||
                this.allThree(player, document.getElementById('b7').innerHTML, document.getElementById('b8').innerHTML, document.getElementById('b9').innerHTML);

    }           

    Board.prototype.winsColumn = function (player) {
        return this.allThree(player, document.getElementById('b1').innerHTML, document.getElementById('b4').innerHTML, document.getElementById('b7').innerHTML) || 
                this.allThree(player, document.getElementById('b2').innerHTML, document.getElementById('b5').innerHTML, document.getElementById('b8').innerHTML) ||
                this.allThree(player, document.getElementById('b3').innerHTML, document.getElementById('b6').innerHTML, document.getElementById('b9').innerHTML);
    }

    Board.prototype.winsDiagonal = function (player) {
        return this.allThree(player, document.getElementById('b1').innerHTML, document.getElementById('b5').innerHTML, document.getElementById('b9').innerHTML) ||
                this.allThree(player, document.getElementById('b7').innerHTML, document.getElementById('b5').innerHTML, document.getElementById('b3').innerHTML);
    }


    Board.prototype.allThree = function (player, c1, c2, c3) {
    // this points at layout for the above codes
        return (c1 === player) && (c2 === player) && (c3 === player);
    }

    Board.prototype.restartGame = function() {
        reset.reload(true);
    }

    var board = new Board();

});

// function getRandomColor() {
//     var letters = '0123456789ABCDEF'.split('');
//     var color = '#';
//     for (var i = 0; i < 6; i++ ) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }



 // jQuery(this).click(function(){
 //        jQuery(this).html( currentPlayer );
 //        jQuery(this).unbind("click");
 //        changePlayer();

// .attr('disabled', 'disabled')
// $(function() {


// //var turn = 'X';

// function TicTacToe () {
//     this.player1 = new Player("X");
//     this.player2 = new Player("O");
//     this.turn = this.player1;
// }

// function Player (name) {
//     // this Player is X
//     this.player = name; 
// }

// // this make the selection not available after it has been selected


// var $board = $('#board');
// // Made an object hash with random colors for X and O
// var color = {X: getRandomColor(), O: getRandomColor()};

// $board.click(function(event) {

//     var $el = $(event.target);
//     console.log("This Works!!", $el);
//     $el.html("X");

//     // var elContent = $el.html;

// 	// if (elContent === 'X' || elContent === 'O') {
//  //        alert('Select another square');
//  //    } else { 
//  //        console.log( turn + "make it work!!");
//         //$el.css("backgound-color", getRandomColor());
//         // elContent = turn; 

//         // Assign playersMove() to variable called player
//         // var player = playersMove();
//         // Changed background color to a random Color defined in line 17
//         // and changed the elements html to be the current player
//         // $el.css("background-color", color[player]).html(player) ;
//     //}
//         // getWinner();
//         //$board.style.backgroundColor = getRandomColor(); 
// });

// // this will alternate between X and O
// TicTacToe.prototype.playersMove = function playersMove(){
// 	if(this.turn === 'X') {
//      	this.turn = 'O';
//     }	else {
//     	this.turn = 'X';
//     }
//     return turn;
    
// }

$(document).ready(function() {
	var user, computer;
	var $tiles = $('.casa');
	var $userScore = $('.stats_user .score');
	var $compScore = $('.stats_computer .score');
	var $msg = $('.msg');
	var userTurn = true, round = 0;
	
    $('.start span').on('click', function() {
        if(this.innerHTML === 'X') {
                user = 'X';
                computer = 'O';
        }
        else {
                user = 'O';
                computer = 'X';
        }
        $('.start').fadeOut();
        checkTurn();
});

        $tiles.on('click', function() {
                if(this.innerHTML === '' && userTurn) {
                        userTurn = false;
                        this.innerHTML = user;
                        if(!isGameOver())
                                playComputer();
                }
        });

        function isGameOver() {
                var end = false;
                var win = 0;
                var a = checkBoard();
                if(a === -1)
                        return;
                else if(a === 1)
                        win = 2;

                for(var i = 0; i < 3; i++) {
                        if($tiles[3*i].innerHTML !=== '' &&
                                $tiles[3*i].innerHTML === $tiles[3*i + 1].innerHTML &&
                                $tiles[3*i].innerHTML === $tiles[3*i + 2].innerHTML) {
                                end = true;
                                if($tiles[3*i].innerHTML === user)
                                        win = 1;
                                for(var j = 0; j < 3; j++)
                                        $tiles[3*i + j].style.color = '#ed6060';
                                }
                }
        }
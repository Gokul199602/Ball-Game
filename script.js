 var a ;


$(document).ready(
	function playerValues(){
	var player1 = prompt("Please Enter Player1 name");
	var player2 = prompt("Please Enter Player2 name");
	var i = 0;
	var k = 0;
	var j = 5;
	var b = "aba";
	$("."+b).click(function()
	{
		while(j<6)
		{
			if(i==0)
			{
				$('.'+b).eq(j).attr("src","images/player1.png");
				i=1;
				j--;
				break;
			}
			else
			{
				$('.'+b).eq(j).attr("src","images/player2.png");
				i=0;
				j--;
				break;
			}
		}
	});

}
);







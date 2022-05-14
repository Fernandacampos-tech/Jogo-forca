player1Name = localStorage.getItem("player1Name");
	player2Name = localStorage.getItem("player2Name");

	player1Score = 0;
	player2Score = 0;

document.getElementById("player1Name").innerHTML = player1Name + " : ";
document.getElementById("player2Name").innerHTML = player2Name + " : ";

document.getElementById("player1Score").innerHTML = player1Score ;
document.getElementById("player2Score").innerHTML = player2Score ;

document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta - " + player1Name ;
document.getElementById("playerAnswer").innerHTML = "Turno de Resposta - " + player2Name ;

function send() {
	/*Na última aula, dentro da função send() pegamos a palavra da input box de pergunta,
armazenamos-a em uma variável e a convertemos para caixa baixa para, mais uma vez,
armazená-la em uma variável.*/
	getWord = document.getElementById("word").value;
	word = getWord.toLowerCase();                      //tanto a pergunta quanto a resposta terão padrão de letras minúsculas evitando inconsistências
	console.log("palavra em caixa baixa = " + word);

    charAt1 = word.charAt(1);
	console.log(charAt1);

	lenghtDivide2 = Math.floor(word.length/2);
	charAt2 = word.charAt(lenghtDivide2);
	console.log(charAt2);

    lenghtMinus1 = word.length - 1; 
    charAt3 = word.charAt(lenghtMinus1); 
	console.log(charAt3);

    removeCharAt1 = word.replace(charAt1, "_");
    removeCharAt2 = removeCharAt1.replace(charAt2, "_");
    removeCharAt3 = removeCharAt2.replace(charAt3, "_");
	console.log(removeCharAt3);

    questionWord = "<h4 id='wordDisplay'> P. "+removeCharAt3+"</h4>";
    input_box = "<br>Resposta : <input type='text' id='inputCheckBox'>";
    checkButton = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    row =  questionWord + input_box + checkButton ; 
    document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";
}

//Aula 91 até aqui

questionTurn = "player1";
answerTurn = "player2";


function check()
{
	getAnswer = document.getElementById("inputCheckBox").value;
	answer = getAnswer.toLowerCase();
	console.log("resposta em caixa baixa - " + answer);
	if(answer == word)	
	{
		if(answerTurn == "player1")
		{
			player1Score = player1Score +1;
		    document.getElementById("player1Score").innerHTML = player1Score;
			//atualize o elemento HTML utilizado para conter a pontuação do player1 com a variável “player1Score”.
		}
		else 
		{
			player2Score = player2Score +1;
		    document.getElementById("player2Score").innerHTML = player2Score;
		}
	}
	/*escreveremos o código para alterar o turno de pergunta. Dentro do bloco
if, abaixo, trocamos o turno de pergunta para o player2, se player1 tiver feito uma
pergunta, senão, trocamos o turno de pergunta para o player1.*/

	if(questionTurn == "player1")
	{
		questionTurn = "player2"
		document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta: " + player2Name ;
	}
	else 
	{
		questionTurn = "player1"
		document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta: " + player1Name ;
	}

	if(answerTurn == "player1")
	{
		answerTurn = "player2"
		document.getElementById("playerAnswer").innerHTML = "Turno de Resposta: " + player2Name ;
	}
	else 
	{
		answerTurn = "player1"
		document.getElementById("playerAnswer").innerHTML = "Turno de Resposta: " + player1Name ;
	}

	/*Quando o botão Checar for pressionado, a seção em que a palavra pergunta está, a input box e o botão Checar, que estão presentes,
serão removidos. Para isso, atualizaremos o elemento HTML id=”output” com um valor vazio, isso resultará na remoção da
palavra pergunta, da input box e do botão Check.*/
    document.getElementById("output").innerHTML = "";
}


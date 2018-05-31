

function wordSearch(){
	let userInput=user_input.value
	let mainText = text.innerText;  
	let splitedWords = mainText.split(userInput);  
	text.innerHTML = "";
	for (let word of splitedWords){ 
		if(splitedWords.indexOf(word) == (splitedWords.length-1)){
			text.innerHTML+= word
		}else {
			text.innerHTML += word+"<span>"+userInput+"</span>";
		}
		
	} 
}



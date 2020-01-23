var guess;

//Do this immediately as the script is ran.
generateGuess();
			

document.getElementById("newGeneratedGuess").onclick = function() {
        generateGuess();
        document.getElementById("historyList").innerHTML = "<ul></ul>";
}

document.getElementById("submitBtn").onclick = function() 
{
        var input = document.getElementById("guessInput").value;
	//Check to see if the field is empty.
	if(input == "") 
	{
                alert("Please have a number selected in field");
                
	} 
	else 
	{			
                // Check to see if the guess matches the text input.
                if (input == guess) 
                {
                        
                       

                        //IF we are right.
                        alert("You are right!!!");
                        generateGuess();
                        document.getElementById("historyList").innerHTML = "<ul></ul>"
                } 
                else if(input != guess) 
                {
                        alert("Wrong Guess! Please try again.");
                        var ul  = document.getElementById("historyList");
                        var li = document.createElement("li");

                        //li.setAttribute('id', input);
                        li.appendChild(document.createTextNode(input));
                        ul.appendChild(li);
                        
                }
    
	}
}
            

function generateGuess() 
{
	guess = Math.ceil(Math.random() * 6);

	console.log(guess);
				
}
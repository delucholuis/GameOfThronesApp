var myFavGOTChar = "Jon Targaryen";

function checkMyFavChar(character){

if (character === "Tyrion Lannister")
{
return("A Lannister always pays its debts");
}

else if (character === "Jon Snow")
{
return("Oh boy you are in for a big surprise!");
}

else (character === "Jon Targaryen")
{
return("Keeping up with the Targaryens, uh?");
}
}
var inpuAnswer = prompt("Enter GOT Character");
var parseInt = parseInt(inputAnswer);
var finalAnswer = calculateAnswer(parseInt);
alert(finalAnswer);
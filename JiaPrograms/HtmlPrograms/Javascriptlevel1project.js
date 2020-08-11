var count = 0;
alert("Please answer the following questions in one word");
var first_name = prompt("Please enter your first name");
var last_name = prompt("Please enter your last name");
var age = prompt("Enter your age")
var height = prompt("Please enter your height in centimeters");
var pet_name = prompt("Please enter the name of your pet");
if (first_name==="Jose"){
    count=count+1;
}
else if(last_name==="Jhonson"){
    count=count+1;
}
else if(age==="26"){
    count=count+1;
}
else if(height===175){
    count=count+1;
}
else if(pet_name==="Sammy"){
    count=count+1;
}
else if (count===5){
    console.log("Welcome Comrade! You have passed the Spy Test");
}
else{
    console.log("Sorry, nothing to see here.");
}
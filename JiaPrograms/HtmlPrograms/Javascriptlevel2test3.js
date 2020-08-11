var nameLi = [];
    var start = prompt("Would you like to start the roaster web app? Type yes or no");
while (start==='yes'){
    var action = prompt("Please select an action: add, display, remove, or quit.")
    if (action==='add'){
        var name= prompt("What name would you like to add?")
        nameLi.push(name)
    }
    else if(action==='display'){
            console.log(nameLi)
    }
    else if(action==='remove'){
            var delName = prompt("What name would you like to remove?")
            var del = nameLi.indexOf(delName)
            nameLi.splice(del,1)
    }
    else if (action==='quit'){
        alert("Thanks for playig the roster web app. Refresh to play again. ")
        break;
    }

}

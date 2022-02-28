// Code your solutions in this file

// create a new, empty array to hold the messages;
// iterate through the input array and, inside the loop, build out the 'thank you' 
// message for each name using string interpolation, 
// then add that message to the new array you created;
// after the loop finishes and all of the messages have been added to the new array, return the new array.

function writeCards(names, event){
    const cardMessage = [];

    for (let i=0; i < names.length; i++){
        let x = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
       cardMessage.push(x);         
    }
    
    return cardMessage;
}

//(writeCards(["Guadalupe", "Ollie", "Aki"], 'birthday'));

function countDown(number){
    while (number >= 0){
        console.log(number);
        number--
    }
}

countDown(5);

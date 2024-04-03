var contDiv = document.getElementById('botcontainer');


// AUTO GENERETING THE DIVS FOR USER AND BOT
function userDiv(paragraph) {
    var userdiv = document.createElement('div');
    var headers = document.createElement('div');
    var para = document.createElement('p');
    userdiv.classList.add('new-div'); // class for styling
    para.id='chatpara'
    headers.id='botheading'
    userdiv.appendChild(headers)
    userdiv.appendChild(para)
    contDiv.appendChild(userdiv)
    para.textContent=paragraph
    headers.textContent='User'
    
}

function chatDiv(paragraph){
    var chatdiv = document.createElement('div');
    var headers = document.createElement('div');
    var para = document.createElement('p');
    chatdiv.classList.add('new-div'); // class for styling
    para.id='chatpara'
    headers.id='botheading'
    chatdiv.appendChild(headers)
    chatdiv.appendChild(para)
    contDiv.appendChild(chatdiv)
    para.textContent=getBotResponse(paragraph)
    headers.textContent='Bot'

}

// STARTING AND CANCELLING THE BOT
isChefVisible=false;

function startBot(){
    console.log('starting the bot')
    let chatContainerEl=document.getElementById('main__top');
    chatContainerEl.style.visibility='visible';
    isChefVisible=true;
    hideAndShowChef()
}


function cancelBot(){
    let bodyEL=document.querySelector('#main__top')
    bodyEL.style.visibility='hidden'
    isChefVisible=false
    hideAndShowChef()
}

function hideAndShowChef() {
    let chefEl = document.querySelector('#hideShowChef');
    let chatContainerEl = document.getElementById('main__top');
    let botHeight=document.querySelector('#botcontainer')

    if (chatContainerEl.style.visibility === 'visible') {
        chefEl.style.visibility = 'hidden';
        botHeight.style.height=(botHeight.offsetHeight +100)+'px';
    } else {
        chefEl.style.visibility = 'visible';
        botHeight.style.height=(botHeight.offsetHeight -100)+'px';
    }

    
    isChefVisible = chatContainerEl.style.visibility !== 'visible';
}



// SETTING SMS AND GETTING RESPONSE FROM GET RESPONSE FUNC
function sendmessage() {
    let userInput = document.getElementById('user-input').value.trim();
    let userField = document.getElementById('userinput');
    if (userInput) {
        userDiv(userInput)
        chatDiv(userInput)
        document.getElementById('user-input').value = "";
        let autoScrol =document.querySelector('#botcontainer')
        autoScrol.scrollTop = autoScrol.scrollHeight;
    } else {
        console.log('No text');
    }
}

//DEFINING REPONSE 

function getBotResponse(input) {
    const lowerInput = input.toLowerCase();
    if (lowerInput.includes("hi")) {
        return "Hello! How can I assist you today?, input 'recipe' to know more about our mexican recipe collection";
    } else if (lowerInput.includes("recipe")) {
        return "Sure! Here are ten delicious Mexican recipes you can try:\n\n1. Classic Guacamole\n2. Tacos al Pastor\n3. Carne Asada\n4. Gorditas\n5. Burrito\n6. Elote\n7. Enchiladas\n8. Quesadillas\n9. Mexican Stuffed Mushrooms\n10. Tamarind Chicken\n\nLet me know if you'd like more information about any specific recipe!";
    } else if (lowerInput.includes("classic guacamole")) {
        return "Classic Guacamole is a creamy and flavorful dip or spread made primarily from mashed avocados, often combined with ingredients like lime juice, onions, cilantro, tomatoes, and spices.";
    } else if (lowerInput.includes("tacos al pastor")) {
        return "Tacos al pastor are a popular Mexican street food dish consisting of marinated and spit-roasted pork, typically served in corn tortillas and garnished with pineapple, onions, cilantro, and salsa.";
    } else if (lowerInput.includes("carne asada")) {
        return "Carne Asada is a grilled beef dish, usually made from marinated skirt or flank steak and served with tortillas, guacamole, salsa, and other toppings.";
    } else if (lowerInput.includes("gorditas")) {
        return "Gorditas are thick, round, masa-based cakes that are cooked on a griddle and typically stuffed with various fillings such as meat, cheese, beans, or vegetables.";
    } else if (lowerInput.includes("burrito")) {
        return "A burrito is a popular Mexican dish consisting of a flour tortilla filled with ingredients such as meat, beans, rice, cheese, and salsa.";
    } else if (lowerInput.includes("elote")) {
        return "Elote, also known as Mexican street corn, is a grilled or boiled corn on the cob that is typically slathered with mayonnaise, sprinkled with cheese and chili powder, and served with lime wedges.";
    } else if (lowerInput.includes("enchiladas")) {
        return "Enchiladas are rolled tortillas filled with a variety of ingredients, such as meat, cheese, beans, or vegetables, and topped with sauce before baking.";
    } else if (lowerInput.includes("quesadillas")) {
        return "Quesadillas are tortillas filled with cheese and other ingredients, such as meat, veggies, or beans, and then grilled or cooked until the cheese is melted and the tortilla is crispy.";
    } else if (lowerInput.includes("mexican stuffed mushrooms")) {
        return "Mexican Stuffed Mushrooms are savory mushroom caps filled with a flavorful mixture of ingredients like cheese, herbs, spices, and sometimes meat, then baked until tender and golden.";
    } else if (lowerInput.includes("tamarind chicken")) {
        return "Tamarind Chicken is a delicious dish where chicken is marinated in a tangy tamarind sauce and then grilled, roasted, or cooked until tender and flavorful.";
    } else {
        return "Sorry, I don't have information on that topic at the moment. Is there anything else you'd like to know?";
    }
}



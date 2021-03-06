let input = document.querySelector('.text');
let clickBut = document.querySelector('.add');
let list = document.querySelector('#list');
let trash = document.getElementsByClassName('.trash');


let toDoList = [];

list.addEventListener('click', function(event){
    let el = event.target;
    console.log(el.checked);
    for(let i = 0; i < toDoList.length; i++){
        if(el.attributes.class.value == 'trash'+String(i)){
            el.parentNode.style.display = 'none';
            delete toDoList[i];
        }
    }
    if(el.checked == true){
        el.parentNode.style.textDecoration = 'line-through';
    }
    else{
        el.parentNode.style.textDecoration = 'none';
    }
    
});

function del(el){
    el.parentNode.style.display = 'none';
}

clickBut.addEventListener('click', function(){
    
    let newItem = {
        list: input.value,
        checked: false,
        del: false
    };
    toDoList.push(newItem);
    
    displayMessages();
    input.value ='';
});



function displayMessages(){
    let displayMessage = '';
    toDoList.forEach(function(item, i){
        displayMessage += `
        <li class = "sp${i}">
            <input type = 'checkbox' class = 'item_${i}'>
            <label class = 'item_${i}'>${item.list}</label>
            <img src = "trash.png" class = 'trash${i}' id = "trash">
        </li>
        `;
        

        list.innerHTML = displayMessage;
        
    }); 
}

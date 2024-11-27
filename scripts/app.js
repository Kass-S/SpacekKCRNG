
let nameDisplayFirst = document.getElementById('nameDisplay');
let codeEmailDisplay = document.getElementById('codeEmailDisplay');
let emailDisplay = document.getElementById('emailDisplay');
let displayList = document.getElementById('displayList');
let randomBtn = document.getElementById('randomBtn');

let nameListArray = [];


randomBtn.addEventListener('click', function(){
    getNameData().then(nameList => {
        let randomName = getRandomName(nameList);
        console.log(randomName);

        nameDisplay.innerText = randomName.firstName + ' ' + randomName.lastName;
        codeEmailDisplay.innerText = randomName.codestackEmail;
        emailDisplay.innerText = randomName.email;
        
        nameListArray.push(nameDisplay);


        if(nameListArray.length > 5){
            nameListArray.shift();
            displayList.removeChild(displayList.firstElementChild)
        }

        let nameCreate = document.createElement('p')
        nameCreate.innerText = `${randomName.firstName} ${randomName.lastName}`;
        displayList.appendChild(nameCreate);

    })
});


function getNameData(){
    return fetch('../data/data.json')
    .then(response => response.json())
    .then(data => {
        return data.nameList;
    });
}

function getRandomName(nameList){
    let randomIndex = Math.floor(Math.random() * nameList.length);
    return nameList[randomIndex];
}
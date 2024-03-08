//let challenges = document.getElementById();
let playerName;
let teamName;
let treasures = document.getElementById("TH")
loadTreasureHunts();
/*function getInfo(){
    fetch("https://codecyprus.org/th/api/list")
        .then(response =>response.json())
        .then(jsonObject =>{
            console.log(jsonObject);
            let treasureHunts = jsonObject.treasureHunts;
            for(let i=0; i<treasureHunts.length;i++){
                //treasures.innerHTML += treasureHunts[i].name;

                treasures.innerHTML += '<button class="THButton" type="button">' + treasureHunts[i].name + ' </button>';
                treasures.innerHTML += '<br>'

            }
        });
}*/
function loadTreasureHunts(){
    fetch("https://codecyprus.org/th/api/list")
        .then(response=>response.json())
        .then(jsonObject => {
            const treasureHuntsList = document.getElementById("treasure hunts-list");
            treasureHuntsList.innerHTML = '';
            let data = jsonObject.treasureHunts;
            data.forEach(treasureHuntsList => {
                /*const listItem = document.createElement('button');
                listItem.textContent = treasureHuntsList.name;
                listItem.className = "THButton";
                listItem.type = "button";
                listItem.innerHTML += '<br>';
                treasures.appendChild(listItem);*/
                treasures.innerHTML += '<button class="THButton" type="button">' + treasureHuntsList.name + ' </button>';
                treasures.innerHTML += '<br>'
            });
        })
        .catch(error => console.error('Error loading treasure hunts: ', error));
}
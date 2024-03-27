//let challenges = document.getElementById();
let playerName;
let teamName;
let treasures = document.getElementById("TH")
loadTreasureHunts();

function loadTreasureHunts(){
    fetch("https://codecyprus.org/th/api/list")
        .then(response=>response.json())
        .then(jsonObject => {
            const treasureHuntsList = document.getElementById("treasure hunts-list");
            treasureHuntsList.innerHTML = "";
            let data = jsonObject.treasureHunts;
            data.forEach(treasureHunt => {
                /*const listItem = document.createElement('button');
                listItem.textContent = treasureHunt.name;
                listItem.className = "THButton";
                listItem.type = "button";
                listItem.innerHTML += '<br>';
                treasures.appendChild(listItem);*/
                let startsOn = treasureHunt.startsOn;
                let endsOn = treasureHunt.endsOn;
                let startStamp = new Date(startsOn);
                let endStamp = new Date(endsOn);
                let currentDate = new Date();

                if (!(endStamp < currentDate) && !(startStamp > currentDate)){
                    treasures.innerHTML += `<button onclick="location.href='startTreasureHunt.html?treasureHuntID=${treasureHuntID=treasureHunt.uuid}&name=${treasureHunt.name}'" class="THButton" type="button"> ${treasureHunt.name}</button>`;
                    treasures.innerHTML += '<br>'
                }
                else {
                    treasures.innerHTML += `<button onclick="location.href='startTreasureHunt.html?treasureHuntID=${treasureHuntID = treasureHunt.uuid}&name=${treasureHunt.name}'" class="THButton" type="button" disabled xmlns="http://www.w3.org/1999/html"> ${treasureHunt.name}
                                            <div style="color: crimson; font-size: small"><br>This treasure hunt is not available!</div</button>`;
                    treasures.innerHTML += '<br>'
                }
            });
        })
        .catch(error => console.error('Error loading treasure hunts: ', error));
}

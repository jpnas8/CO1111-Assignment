//let challenges = document.getElementById();
let playerName;
let teamName;
let treasures = document.getElementById("TH")
getInfo();
function getInfo(){
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
}

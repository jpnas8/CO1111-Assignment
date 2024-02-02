//let challenges = document.getElementById();
let playerName;
let teamName;
getInfo();
function getInfo(){
    fetch("https://codecyprus.org/th/api/list")
        .then(response =>response.json())
        .then(jsonObject =>{
            console.log(jsonObject);
            let treasureHunts = jsonObject.treasureHunts;
            /*for(let i=0; i<treasureHunts.length;i++){


            }*/
        });
}

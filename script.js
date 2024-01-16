//user1 

let ranNumb = Math.floor(Math.random() * 6 + 1); // 1
let ranImg = "images/dice" + ranNumb + ".png"; // images/dice1.png


let img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", ranImg); 

let result = document.getElementById('result').innerHTML = `Result for User 1: ${ranNumb}`



//user2

let ranNumb2 = Math.floor(Math.random()* 6 + 1); //2
let ranImg2 = "images/dice" +  ranNumb2 + ".png" // images/dice2.png

let img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", ranImg2);

let result2 = document.getElementById('result2').innerHTML = `Result for User 2: ${ranNumb2}`


if (ranNumb > ranNumb2){
    document.getElementById("winner").innerHTML = "Winner 1"
}
else if (ranNumb < ranNumb2){
    document.getElementById("winner").innerHTML = "Winner 2"

}
else {
    document.getElementById("winner").innerHTML = "Tie"

}
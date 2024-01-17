function playAgain() {
    // Get user names
    let user1Name = document.getElementById("user1").value;
    let user2Name = document.getElementById("user2").value;

    // User 1
    let ranNumb = Math.floor(Math.random() * 6 + 1);
    let ranImg = "images/dice" + ranNumb + ".png";
    let img1 = document.querySelectorAll("img")[0];
    img1.setAttribute("src", ranImg);
    let result = document.getElementById('result').innerHTML = `${user1Name}'s result: ${ranNumb}`;

    // User 2
    let ranNumb2 = Math.floor(Math.random() * 6 + 1);
    let ranImg2 = "images/dice" + ranNumb2 + ".png";
    let img2 = document.querySelectorAll("img")[1];
    img2.setAttribute("src", ranImg2);
    let result2 = document.getElementById('result2').innerHTML = `${user2Name}'s result: ${ranNumb2}`;

    // Determine the winner
    let winnerElement = document.getElementById("winner");
    if (ranNumb > ranNumb2) {
        winnerElement.innerHTML = `${user1Name} is the Winner!`;
    } else if (ranNumb < ranNumb2) {
        winnerElement.innerHTML = `${user2Name} is the Winner!`;
    } else {
        winnerElement.innerHTML = "It's a Tie!";
    }
}

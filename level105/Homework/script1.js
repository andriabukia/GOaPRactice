function guessNumberGame() {
    const randomNumber = Math.floor(Math.random() * 10) + 1; 
    let lives = 3;

    while (lives > 0) {
        let guess = parseInt(prompt(`გამოიცანი რიცხვი 1-დან 10-მდე. დაგრჩა ${lives} სიცოცხლე:`));

        if (guess === randomNumber) {
            alert("მოიგე");
            return; 
        } else {
            lives--;
            if (lives > 0) {
                alert("არასწორია! სცადე თავიდან.");
            }
        }
    }

    alert(`წააგე სწორი პასუხი იყო: ${randomNumber}`);
}

console.log(guessNumberGame())
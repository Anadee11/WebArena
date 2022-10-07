function openPlayerConfig(event) {
    playerConfigoverlay.style.display = 'block';
    backdropElement.style.display = 'block';
    editedPlayer = +event.target.dataset.playerid;  //+ will conver string to number
}

function closePlayerConfig() {
    playerConfigoverlay.style.display = 'none';
    backdropElement.style.display = 'none';
    errorOutputs.textContent = '';
    InputField.value = '';
    
}

function savePlayerConfig(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayername = formData.get('playername').trim();  //removes space before or after test

    if(!enteredPlayername){
        errorOutputs.textContent = 'Please Enter a valid Name !';
        return;
    }

    const updatedPlayerData = document.getElementById('player-'+editedPlayer+'-data');
    updatedPlayerData.children[1].textContent = enteredPlayername;
    players[editedPlayer - 1].name=enteredPlayername;
    closePlayerConfig();
}
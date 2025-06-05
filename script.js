document.getElementById('chat-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const input = document.getElementById('fråga');
    const fråga = input.value;
    const logg = document.getElementById('chatlog');

    // Visa frågan utan att tillåta HTML-injektion
    const userP = document.createElement('p');
    const userStrong = document.createElement('strong');
    userStrong.textContent = 'Du:';
    userP.appendChild(userStrong);
    userP.appendChild(document.createTextNode(' ' + fråga));
    logg.appendChild(userP);

    // Ge ett fördefinierat "låtsassvar"
    let svar = "Jag är en prototyp. Snart kan jag svara på juridiska frågor om nya lagen.";
    if (fråga.toLowerCase().includes("barn")) {
        svar = "I nya socialtjänstlagen betonas barnets rätt till information och delaktighet.";
    } else if (fråga.toLowerCase().includes("insats utan bistånd")) {
        svar = "Ja, nya lagen öppnar upp för insatser utan föregående biståndsbedömning.";
    }

    // Visa svar
    const botP = document.createElement('p');
    const botStrong = document.createElement('strong');
    botStrong.textContent = 'Bot:';
    botP.appendChild(botStrong);
    botP.appendChild(document.createTextNode(' ' + svar));
    logg.appendChild(botP);
    input.value = '';
    logg.scrollTop = logg.scrollHeight;
});

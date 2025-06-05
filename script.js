document.getElementById('chat-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const input = document.getElementById('fråga');
    const fråga = input.value;
    const logg = document.getElementById('chatlog');

    // Visa frågan utan att tolka eventuellt HTML-innehåll
    const frågap = document.createElement('p');
    const användarStrong = document.createElement('strong');
    användarStrong.textContent = 'Du:';
    frågap.appendChild(användarStrong);
    frågap.append(' ' + fråga);
    logg.appendChild(frågap);

    // Ge ett fördefinierat "låtsassvar"
    let svar = "Jag är en prototyp. Snart kan jag svara på juridiska frågor om nya lagen.";
    if (fråga.toLowerCase().includes("barn")) {
        svar = "I nya socialtjänstlagen betonas barnets rätt till information och delaktighet.";
    } else if (fråga.toLowerCase().includes("insats utan bistånd")) {
        svar = "Ja, nya lagen öppnar upp för insatser utan föregående biståndsbedömning.";
    }

    // Visa svar
    logg.innerHTML += `<p><strong>Bot:</strong> ${svar}</p>`;
    input.value = '';
    logg.scrollTop = logg.scrollHeight;
});

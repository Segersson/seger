document.getElementById('chat-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const input = document.getElementById('fråga');
    const fråga = input.value;
    const logg = document.getElementById('chatlog');

    // Visa frågan
    logg.innerHTML += `<p><strong>Du:</strong> ${fråga}</p>`;

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

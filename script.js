function getSvar(fragga) {
    let svar = "Jag är en prototyp. Snart kan jag svara på juridiska frågor om nya lagen.";
    const lower = fragga.toLowerCase();
    if (lower.includes("barn")) {
        svar = "I nya socialtänstlagen betonas barnets rätt till information och delaktighet.";
    } else if (lower.includes("insats utan bistånd")) {
        svar = "Ja, nya lagen öppnar upp för insatser utan föregående biståndsbedömning.";
    }
    return svar;
}

if (typeof document !== 'undefined') {
    document.getElementById('chat-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const input = document.getElementById('fråga');
        const fråga = input.value;
        const logg = document.getElementById('chatlog');

        logg.innerHTML += `<p><strong>Du:</strong> ${fråga}</p>`;

        const svar = getSvar(fråga);

        logg.innerHTML += `<p><strong>Bot:</strong> ${svar}</p>`;
        input.value = '';
        logg.scrollTop = logg.scrollHeight;
    });
}

if (typeof module !== 'undefined') {
    module.exports = { getSvar };
}

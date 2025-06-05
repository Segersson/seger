document.getElementById('chat-form').addEventListener('submit', async function (e) {
    e.preventDefault();
    const input = document.getElementById('fråga');
    const fråga = input.value;
    const logg = document.getElementById('chatlog');

    logg.innerHTML += `<p><strong>Du:</strong> ${fråga}</p>`;
    input.value = '';

    try {
        const res = await fetch(`/api/riksdagen?q=${encodeURIComponent(fråga)}`);
        const data = await res.json();
        let svar = 'Hittade inget resultat.';
        const docs = data.dokumentlista?.dokument || data.dokumentlista?.dok || [];
        if (docs.length > 0) {
            const items = docs.slice(0, 5).map(d => {
                const titel = d.titel || d.ingress || 'Okänt dokument';
                const url = d.dok_id ? `https://data.riksdagen.se/dokument/${d.dok_id}` : d.url;
                return `<li><a href="${url}" target="_blank">${titel}</a></li>`;
            }).join('');
            svar = `<ul>${items}</ul>`;
        }
        logg.innerHTML += `<p><strong>Bot:</strong> ${svar}</p>`;
    } catch (err) {
        logg.innerHTML += `<p><strong>Bot:</strong> Kunde inte hämta resultat.</p>`;
    }
    logg.scrollTop = logg.scrollHeight;
});

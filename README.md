# Seger

En enkel webbapplikation för att ställa frågor om den svenska socialtjänstlagen.

## Installation

1. Installera beroenden:

```bash
npm install express
```

2. Starta servern:

```bash
node server.js
```

Applikationen är nu tillgänglig på `http://localhost:3000`.

## API

Servern tillhandahåller ett API som i sin tur hämtar data från riksdagens öppna data.

### `GET /api/riksdagen?q=<sökterm>`

Returnerar JSON-data från riksdagens sök-API. Parametern `q` är den sökterm som skickas vidare till `https://data.riksdagen.se/dokumentlista`.

Exempel:

```
GET /api/riksdagen?q=barnkonventionen
```

Svar:

```json
{
  "dokumentlista": {
    "dok": [ ... ]
  }
}
```

Klienten visar de första resultaten i chatten och länkar till respektive dokument hos riksdagen.

## Licens

Se filen [LICENSE](LICENSE).

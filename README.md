# Socialtjänstchatt

Detta repo innehåller en liten webbapplikation som demonstrerar en chatt om den nya socialtjänstlagen. Applikationen består av statiska filer (HTML, CSS och JavaScript) och ger fördefinierade svar beroende på vad användaren skriver.

## Köra sidan lokalt

1. Klona eller ladda ner projektet.
2. Öppna projektmappen i terminalen.
3. Starta en lokal webbserver i mappen. Några exempel:
   ```bash
   python3 -m http.server 8000
   # eller
   npx serve .
   ```
   Öppna sedan `http://localhost:8000` i din webbläsare.

Det går även bra att dubbelklicka på `index.html` och öppna filen direkt i en modern webbläsare, men en lokal server rekommenderas om webbläsaren begränsar skript som körs från filsystemet.

## Beroenden

Applikationen har inga externa beroenden. För att starta en lokal server kan Python (ingår ofta i operativsystemet) eller Node.js användas om du har det installerat.


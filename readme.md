# Music Playlist – Innlevering 3

En responsiv nettside der brukeren kan utforske en musikksamling og
sette sammen sin egen spilleliste.

Prosjektet er laget som en individuell innlevering i Fullstack-utvikling.
Formålet er å øve på JavaScript, array-metoder, DOM-manipulering,
hendelser og lokal lagring.

## Funksjoner

- Viser alle de 23 sangene fra den utdelte datafilen.
- Søker etter sangtittel eller artist mens brukeren skriver.
- Filtrerer sangene etter sjanger.
- Sorterer etter tittel, artist eller spilletid.
- Kombinerer søk, filtrering og sortering.
- Lar brukeren legge til og fjerne sanger fra spillelisten.
- Hindrer at samme sang legges til flere ganger.
- Viser spillelistens samlede spilletid.
- Lagrer spillelisten med localStorage.
- Viser meldinger når spillelisten er tom eller ingen sanger matcher søket.

## Teknologier

- HTML for struktur og innhold.
- CSS for utseende og responsivt oppsett.
- JavaScript for funksjonalitet.
- Google Fonts for skrifttypen Inter.
- Git og GitHub for versjonskontroll og lagring av kildekode.

Prosjektet bruker ingen JavaScript-biblioteker eller rammeverk.

## Filstruktur

- `index.html` – sidens HTML-struktur.
- `css/reset.css` – grunnleggende tilbakestilling av nettleserstiler.
- `css/variables.css` – variabler for farger, skrift og størrelser.
- `css/styles.css` – layout, komponenter og responsive tilpasninger.
- `data/songs.js` – sangdata levert med oppgaven.
- `js/app.js` – søk, filtrering, sortering og håndtering av spillelisten.
- `assets/` – mappe for eventuelle bilder og andre ressurser.
- `readme.md` – prosjektbeskrivelse og lenker.

## Kjør prosjektet lokalt

1. Last ned eller klon prosjektet.
2. Åpne prosjektmappen i Visual Studio Code.
3. Åpne `index.html` med Live Server.

Prosjektet krever ingen installasjon av pakker eller byggesteg.

## Lagring av spillelisten

Spillelisten lagres som sang-id-er i nettleserens localStorage.
Når siden åpnes igjen, hentes informasjonen om sangene fra `songs.js`.

Lagringen gjelder nettleseren og nettadressen som brukes.
Spillelisten synkroniseres ikke mellom enheter og kan forsvinne
dersom nettleserdata slettes.

## Utforming og tilgjengelighet

- Responsivt oppsett med CSS Grid og Flexbox.
- CSS-klasser navngitt etter BEM-konvensjonen.
- Semantiske HTML-elementer.
- Synlige etiketter for søk og nedtrekkslister.
- Tydelig fokusmarkering ved tastaturnavigasjon.
- Beskrivende navn for fjern-knappene ved bruk av skjermleser.

## Kilder og bruk av KI

Sangdataene i `data/songs.js` er levert med oppgaven og er brukt uendret.

ChatGPT er brukt til veiledning, forklaring av begreper,
feilsøking, oversettelse og gjennomgang av koden.
Deler av HTML-, CSS- og JavaScript-koden bygger på disse forslagene.

Skrifttypen Inter er hentet fra Google Fonts:
https://fonts.google.com/specimen/Inter

## Lenker

- GitHub-repository: Legges inn når repositoryet er opprettet.
- Publisert nettside: Legges inn når nettsiden er publisert.

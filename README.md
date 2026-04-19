# NextEDI.ai - Futuristische EDI/AI/API Dienstleistungswebseite

Moderne, responsive Webseite zur Vorstellung von EDI-, AI- und API-Dienstleistungen mit Fokus auf:

- EDI-Erfahrung in Automotive, Retail und Finance
- OFTP2-, AS2-, Host-to-Host-, EBICS-, SWIFT- und SAP-Ariba-Anbindungen
- AI-gestuetzte EDI-Optimierung und konkrete AI Use Cases
- Self-Service-Portale, Partner-Onboarding, Fehleranalyse und Migrationen
- Erfahrung mit SEEBURGER BIS, Axway B2Bi, SAP und INFOR

## Projektstruktur

- `index.html` - Hauptseite mit dynamisch gerenderten Inhalten und Kontaktbereich
- `assets/style.css` - futuristisches UI-Design
- `assets/app.js` - dynamische Inhalte und Kontaktformular-Logik
- `impressum.html` - Impressum
- `datenschutz.html` - Datenschutzerklaerung
- `sitemap.xml` - Sitemap fuer Suchmaschinen
- `robots.txt` - Crawling-Regeln
- `site.webmanifest` - Basis-Metadaten fuer PWA/Installierbarkeit
- `.github/workflows/deploy-pages.yml` - automatisches Deployment auf GitHub Pages

## Lokal starten

Die Webseite ist statisch und kann direkt im Browser geoeffnet werden:

1. `index.html` doppelklicken **oder**
2. Optional per lokalem Webserver starten:

```bash
python3 -m http.server 8080
```

Dann im Browser aufrufen: `http://localhost:8080`

## Deployment auf GitHub Pages (kostenlose Domain)

Die Seite wird per GitHub Actions automatisch auf GitHub Pages deployed.

Nach dem Merge auf `main` ist sie unter folgender URL erreichbar:

`https://dk1189.github.io/dk1189/`

Optional kann spaeter eine eigene Domain verbunden werden.

## Google-Sichtbarkeit (Basis-Setup)

1. Property in Google Search Console anlegen (`URL-Praefix`: `https://dk1189.github.io/dk1189/`)
2. `sitemap.xml` in Search Console einreichen (`https://dk1189.github.io/dk1189/sitemap.xml`)
3. Google Business Profile einrichten und auf die Website verlinken
4. Regelmaessig fachliche Inhalte/Referenzen ergaenzen und Backlinks aufbauen

## Rechtlicher Hinweis vor dem Livegang

Die rechtlichen Seiten wurden mit den bereitgestellten Daten vorbelegt.
Bitte pruefen Sie vor Veroeffentlichung insbesondere:

- korrekte Firmierung und Vertretungsverhaeltnisse
- aktuelle Kontaktangaben
- USt-IdNr. (falls vorhanden)
- ggf. weitere branchenspezifische Pflichtangaben

Dies ersetzt keine individuelle Rechtsberatung.

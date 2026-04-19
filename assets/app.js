const highlights = [
  "EDI mit AI: datengetriebene Priorisierung von Incidents und intelligente Routing-Empfehlungen",
  "Self-Service-Partneronboarding mit validierten Stammdaten, Leitfaeden und Testautomatisierung",
  "Branchenspezifische Integrationen von OFTP2 (Automotive) ueber AS2 (Retail) bis SWIFT/EBICS (Finance)",
  "Migrationen, Stabilisierung und kontinuierliche Prozessoptimierung fuer messbare Betriebsqualitaet",
];

const services = [
  {
    title: "EDI Integration Engineering",
    text: "Konzeption und Umsetzung belastbarer B2B-Integrationen inklusive Mapping, Kommunikationsprofilen, Monitoring und sicherer Betriebsuebergabe.",
  },
  {
    title: "EDI mit AI",
    text: "Ergaenzung klassischer EDI-Prozesse durch AI-gestuetzte Mustererkennung, intelligente Fehlerklassifizierung und priorisierte Bearbeitungspfade.",
  },
  {
    title: "AI-gestuetzte Prozessoptimierung",
    text: "Identifikation von Bottlenecks in Message-Flows, SLA-Verletzungen und manuellen Taetigkeiten mit klaren Massnahmen zur Durchlaufzeitreduktion.",
  },
  {
    title: "Spezifische AI Use Cases fuer EDI",
    text: "Use Cases wie Anomalieerkennung in Nachrichten, automatische Mapping-Vorschlaege, Fruehwarnsysteme fuer Partnerprobleme und intelligente Ticket-Triage.",
  },
  {
    title: "Self-Service Portale",
    text: "Self-Service-Applikationen fuer Partner mit gefuehrter Anbindung, automatisierten Checks und transparentem Status fuer ein deutlich schnelleres Onboarding.",
  },
  {
    title: "Partner Onboarding leicht gemacht",
    text: "Strukturierte Onboarding-Strecken fuer Lieferanten, Kunden und Banken inklusive technischer Leitlinien, Testplan, Zertifizierung und produktivem Go-live.",
  },
  {
    title: "Fehleranalyse & Stabilisierung",
    text: "Root-Cause-Analysen in Mapping, Konverter, Transport und ERP-Posting mit belastbaren Operating-Standards und Eskalationsprozessen.",
  },
  {
    title: "Migration von EDI-Anwendungen",
    text: "Risikominimierte Uebergaenge zwischen Plattformen, inklusive Parallelbetrieb, Cutover-Planung, Datenqualitaetskontrolle und Hypercare.",
  },
  {
    title: "API-/EDI-Konvergenz",
    text: "Verknuepfung klassischer EDI-Flows mit API-basierten Services fuer End-to-End-Transparenz, Reaktionsgeschwindigkeit und Automatisierung.",
  },
  {
    title: "Governance, Security & Compliance",
    text: "Absicherung von Integrationsprozessen durch dokumentierte Standards, Nachvollziehbarkeit, Berechtigungskonzepte und auditierbare Betriebsprozesse.",
  },
];

const industries = [
  {
    title: "Automotive",
    text: "Fokus auf OFTP2 als etablierten Transportstandard im Automotive-Umfeld sowie stabile Prozesse fuer Lieferabrufe, Lieferscheine, Wareneingaenge und Gutschriftsverfahren.",
  },
  {
    title: "Retail",
    text: "AS2-basierte Partnerkommunikation fuer hohe Partnerzahlen und dynamische Sortimente mit Blick auf den Order-to-Cash-Prozess von Bestellung ueber Versand bis zur Rechnung.",
  },
  {
    title: "Finance",
    text: "Unternehmen-zu-Bank-Anbindungen ueber Host-to-Host sowie Bank-zu-Bank-Prozesse mit EBICS und SWIFT fuer sichere, regulatorisch belastbare Zahlungs- und Reportingablaeufe.",
  },
];

const stack = [
  "Middleware: SEEBURGER BIS, Axway B2Bi",
  "ERP: SAP, INFOR",
  "Standards & Protokolle: EDIFACT, ANSI X12, OFTP2, AS2, EBICS, SWIFT",
  "B2B-Plattformen: SAP Ariba und Partnernetzwerke",
  "Modernisierung: AI Use Cases fuer Monitoring, Analyse und Incident-Handling",
  "Mehr als 10 Jahre Erfahrung in EDI-/API-Projekten",
];

const processSteps = [
  "IST-Aufnahme, Zielbild und messbare KPIs fuer EDI-, API- und AI-Optimierung",
  "Technisches Design inklusive Mapping-, Kommunikations- und Self-Service-Konzept",
  "Umsetzung mit Partnerabstimmung, Testautomation und AI-gestuetztem Monitoring",
  "Go-live-Begleitung mit Hypercare, Wissenstransfer und kontinuierlicher Verbesserung",
];

function renderList(items, targetId) {
  const target = document.getElementById(targetId);
  if (!target) return;
  target.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

function renderCards(items, targetId) {
  const target = document.getElementById(targetId);
  if (!target) return;
  target.innerHTML = items
    .map(
      (item) => `
      <article class="card">
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </article>
    `,
    )
    .join("");
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  const messageBox = document.getElementById("form-message");
  if (!form || !messageBox) return;

  const encodedAddress = form.getAttribute("data-mail");
  if (!encodedAddress) return;

  let endpoint = "";
  try {
    const emailAddress = atob(encodedAddress);
    endpoint = `https://formsubmit.co/ajax/${emailAddress}`;
  } catch (error) {
    messageBox.textContent = "Kontaktformular ist aktuell nicht verfuegbar.";
    return;
  }

  if (!endpoint) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const company = String(data.get("company") || "").trim();
    const message = String(data.get("message") || "").trim();
    const hasConsent = data.get("privacy-consent") === "on";

    if (!name || !email || !message) {
      messageBox.textContent = "Bitte Name, E-Mail und Projektbeschreibung ausfuellen.";
      return;
    }

    if (!hasConsent) {
      messageBox.textContent = "Bitte bestaetigen Sie die Datenschutzerklaerung.";
      return;
    }

    messageBox.textContent = "Ihre Anfrage wird gerade sicher uebermittelt...";

    const payload = {
      name,
      email,
      company: company || "-",
      message,
      source: window.location.href,
      submittedAt: new Date().toISOString(),
    };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
      }
      const result = await response.json();
      if (result.success !== "true") {
        throw new Error("Form provider returned error");
      }

      form.reset();
      messageBox.textContent =
        "Vielen Dank. Ihre Anfrage wurde erfolgreich gesendet. Ich melde mich zeitnah zurueck.";
    } catch (error) {
      messageBox.textContent =
        "Der Versand war leider nicht erfolgreich. Bitte versuchen Sie es spaeter erneut.";
    }
  });
}

function initFooterYear() {
  const yearElement = document.getElementById("year");
  if (!yearElement) return;
  yearElement.textContent = String(new Date().getFullYear());
}

renderList(highlights, "highlights-list");
renderCards(services, "services-grid");
renderCards(industries, "industries-grid");
renderList(stack, "tools-list");
renderList(processSteps, "process-list");
initContactForm();
initFooterYear();

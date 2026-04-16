const highlights = [
  "OFTP2-, AS2- und SAP Ariba-Anbindungen für internationale Partnernetzwerke",
  "Partner-Onboarding mit klaren Testplänen und produktionsnahen Validierungen",
  "Migrationen von Legacy-EDI-Landschaften zu resilienten Integrationsarchitekturen",
  "Schnelle Fehleranalyse in Mapping, Transport und Prozessmonitoring",
];

const services = [
  {
    title: "EDI Integration Engineering",
    text: "Konzeption und Umsetzung belastbarer B2B-Integrationen inklusive Mapping, Kommunikationsprofilen und Monitoring.",
  },
  {
    title: "Partner Onboarding",
    text: "Strukturierte Onboarding-Prozesse für Lieferanten und Kunden mit Testkoordination und Qualitätskriterien.",
  },
  {
    title: "Fehleranalyse & Stabilisierung",
    text: "Root-Cause-Analyse wiederkehrender Incidents und Einführung sauberer Betriebs- und Eskalationsprozesse.",
  },
  {
    title: "Migration von EDI-Anwendungen",
    text: "Risikominimierte Übergänge zwischen Plattformen, inklusive Parallelbetrieb, Cutover-Planung und Hypercare.",
  },
  {
    title: "API-/EDI-Konvergenz",
    text: "Verknüpfung klassischer EDI-Flows mit API-basierten Services für mehr Transparenz und Automatisierung.",
  },
  {
    title: "Governance & Security",
    text: "Absicherung von Integrationsprozessen durch klare Standards, Dokumentation und revisionssichere Nachvollziehbarkeit.",
  },
];

const industries = [
  {
    title: "Automotive",
    text: "Steuerung komplexer Lieferketten mit hohen Anforderungen an Stabilität, Timing und Nachrichtenqualität.",
  },
  {
    title: "Retail",
    text: "Skalierbare EDI-Prozesse für Einkaufs-, Logistik- und Rechnungsflüsse in dynamischen Handelsumgebungen.",
  },
  {
    title: "Finance",
    text: "Integrationslösungen für regulierte Datenflüsse mit Fokus auf Sicherheit, Compliance und Transparenz.",
  },
];

const stack = [
  "Middleware: SEEBURGER BIS, Axway B2Bi",
  "ERP: SAP, INFOR",
  "Standards & Protokolle: EDIFACT, ANSI X12, OFTP2, AS2",
  "B2B-Plattformen: SAP Ariba und Partnernetzwerke",
  "Mehr als 10 Jahre Erfahrung in EDI-/API-Projekten",
];

const processSteps = [
  "IST-Aufnahme, Zielbild und Integrations-Roadmap",
  "Technisches Design inklusive Mapping- und Kommunikationskonzept",
  "Umsetzung mit Testautomation, Monitoring und Partnerabstimmung",
  "Go-Live-Begleitung mit Hypercare und nachhaltigem Wissenstransfer",
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

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const company = String(data.get("company") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !message) {
      messageBox.textContent = "Bitte Name, E-Mail und Projektbeschreibung ausfüllen.";
      return;
    }

    const subject = encodeURIComponent(`Projektanfrage EDI/API von ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nE-Mail: ${email}\nUnternehmen: ${company || "-"}\n\nProjektbeschreibung:\n${message}`,
    );

    messageBox.textContent =
      "Ihre Anfrage wurde vorbereitet. Ihr E-Mail-Programm öffnet sich jetzt.";
    window.location.href = `mailto:kontakt@edi-next.example?subject=${subject}&body=${body}`;
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

const highlights = [
  "EDI mit AI: Prozessoptimierung durch den Einsatz von AI, Vereinfachung der IT Prozesse für den Business User.",
  "Self-Service-Partneronboarding mit validierten Stammdaten, Leitfaeden und Testautomatisierung",
  "Branchenspezifische Integrationen von OFTP2 (Automotive) ueber AS2 (Retail) bis SWIFT/EBICS (Finance)",
  "Migrationen, Stabilisierung und kontinuierliche Prozessoptimierung fuer messbare Betriebsqualitaet",
];

const services = [
  {
    title: "EDI Integration",
    text: "Konzeption und Umsetzung belastbarer B2B-Integrationen inklusive Mapping, Kommunikationsprofilen, Monitoring und sicherer Betriebsuebergabe.",
  },
  {
    title: "EDI mit AI",
    text: "Ergänzung klassischer EDI-Prozesse durch AI-gestützte Mustererkennung, intelligente Fehlerklassifizierung und priorisierte Bearbeitungspfade.",
  },
  {
    title: "AI-gestützte Prozessoptimierung",
    text: "Agentenbasierte Fehlererkennung und Behebung, Verwenden von Chatbots zur Vereinfachung der EDI für den Business Anwender.",
  },
  {
    title: "Spezifische AI Use Cases für EDI",
    text: "Use Cases wie Anomalieerkennung in Nachrichten, automatische Mapping-Vorschlaege, Fruehwarnsysteme fuer Partnerprobleme und intelligente Ticket-Triage.",
  },
  {
    title: "Self-Service Portale",
    text: "Self-Service-Applikationen fuer Partner mit geführter Anbindung, automatisierten Checks und transparentem Status fuer ein deutlich schnelleres Onboarding.",
  },
  {
    title: "Partner Onboarding",
    text: "Strukturierte Onboarding-Strecken für Lieferanten, Kunden und Banken inklusive technischer Leitlinien, Testplan, Zertifizierung und produktivem Go-live.",
  },
  {
    title: "Fehleranalyse & Stabilisierung",
    text: "Root-Cause-Analysen in Mapping, Konverter, Transport und ERP-Posting mit belastbaren Operating-Standards und Eskalationsprozessen.",
  },
  {
    title: "Migration von EDI-Anwendungen",
    text: "Risikominimierte Übergaenge zwischen Plattformen, inklusive Parallelbetrieb, Cutover-Planung, Datenqualitätskontrolle und Hypercare.",
  },
  {
    title: "API-/EDI-Konvergenz",
    text: "Verknüpfung klassischer EDI-Flows mit API-basierten Services für End-to-End-Transparenz, Reaktionsgeschwindigkeit und Automatisierung.",
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
  "Middleware: SEEBURGER BIS, Axway B2Bi, Amplify Fusion",
  "ERP: SAP ECC, INFOR",
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
  const submitButton = form.querySelector('button[type="submit"]');

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
    if (submitButton) submitButton.disabled = true;

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

      const responseType = response.headers.get("content-type") || "";
      let result = null;
      if (responseType.includes("application/json")) {
        result = await response.json();
      } else {
        const textBody = await response.text();
        try {
          result = JSON.parse(textBody);
        } catch (parseError) {
          result = { raw: textBody };
        }
      }

      if (!response.ok) {
        throw new Error(result?.message || `Request failed: ${response.status}`);
      }

      const successValue = result?.success;
      const isSuccess =
        successValue === true ||
        successValue === "true" ||
        successValue === 1 ||
        successValue === "1" ||
        successValue === undefined;

      if (!isSuccess) {
        throw new Error(
          result?.message ||
            "Bitte bestaetigen Sie ggf. die Aktivierungs-E-Mail von FormSubmit und senden Sie danach erneut.",
        );
      }

      form.reset();
      messageBox.textContent =
        "Vielen Dank. Ihre Anfrage wurde erfolgreich gesendet. Ich melde mich zeitnah zurueck.";
    } catch (error) {
      const rawMessage = String(error?.message || "").trim();
      const lowerMessage = rawMessage.toLowerCase();
      if (lowerMessage.includes("confirm") || lowerMessage.includes("activate")) {
        messageBox.textContent =
          "Bitte bestaetigen Sie einmalig die Aktivierungs-E-Mail von FormSubmit und senden Sie Ihre Anfrage danach erneut.";
      } else if (rawMessage) {
        messageBox.textContent = `Der Versand war leider nicht erfolgreich. Hinweis: ${rawMessage}`;
      } else {
        messageBox.textContent =
          "Der Versand war leider nicht erfolgreich. Bitte versuchen Sie es spaeter erneut.";
      }
    } finally {
      if (submitButton) submitButton.disabled = false;
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

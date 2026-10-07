const knowledgeBase = [
  {
    name: "Common Cold",
    symptoms: ["runny nose", "sneezing", "sore throat", "cough", "headache"],
    tests: "Clinical evaluation; tests depend on symptoms"
  },
  {
    name: "Influenza-like Illness",
    symptoms: ["fever", "cough", "sore throat", "headache", "body ache", "fatigue"],
    tests: "Clinical evaluation; influenza testing may be considered"
  },
  {
    name: "Allergic Rhinitis",
    symptoms: ["sneezing", "runny nose", "itchy eyes", "fatigue"],
    tests: "Clinical evaluation; allergy assessment if indicated"
  },
  {
    name: "Gastroenteritis",
    symptoms: ["nausea", "vomiting", "diarrhea", "abdominal pain", "fever"],
    tests: "Clinical evaluation; tests depend on severity and suspected cause"
  },
  {
    name: "Respiratory Infection Pattern",
    symptoms: ["cough", "fever", "shortness of breath", "chest pain", "fatigue"],
    tests: "Clinical evaluation; respiratory testing may be considered"
  },
  {
    name: "COVID-19-like Illness",
    symptoms: ["fever", "cough", "fatigue", "sore throat", "headache", "loss of smell", "shortness of breath"],
    tests: "Clinical evaluation; COVID-19 antigen or PCR testing may be considered"
  },
  {
    name: "Acute Sinusitis Pattern",
    symptoms: ["facial pressure", "nasal congestion", "runny nose", "headache", "sore throat", "fever"],
    tests: "Clinical evaluation; imaging is reserved for persistent or complicated cases"
  },
  {
    name: "Migraine Pattern",
    symptoms: ["headache", "nausea", "vomiting", "sensitivity to light", "sensitivity to sound", "visual aura"],
    tests: "Clinical evaluation; imaging may be considered when warning signs are present"
  },
  {
    name: "Urinary Tract Infection Pattern",
    symptoms: ["painful urination", "frequent urination", "urinary urgency", "lower abdominal pain", "blood in urine", "fever"],
    tests: "Urinalysis and urine culture when clinically indicated"
  },
  {
    name: "Strep Throat Pattern",
    symptoms: ["sore throat", "fever", "swollen glands", "difficulty swallowing", "headache", "tonsil spots"],
    tests: "Rapid strep test; throat culture may be used for confirmation"
  },
  {
    name: "Pneumonia Pattern",
    symptoms: ["fever", "cough", "shortness of breath", "chest pain", "fatigue", "chills", "mucus"],
    tests: "Clinical evaluation; chest imaging and respiratory testing may be considered"
  },
  {
    name: "Asthma Flare Pattern",
    symptoms: ["wheezing", "shortness of breath", "chest tightness", "cough", "fatigue"],
    tests: "Clinical evaluation; oxygen level and breathing tests may be assessed"
  },
  {
    name: "Food Poisoning Pattern",
    symptoms: ["nausea", "vomiting", "diarrhea", "abdominal pain", "fever", "chills"],
    tests: "Clinical evaluation; stool testing may be considered for severe or persistent illness"
  },
  {
    name: "Acid Reflux Pattern",
    symptoms: ["heartburn", "acid reflux", "chest pain", "nausea", "sore throat"],
    tests: "Clinical evaluation; reflux monitoring or endoscopy may be considered when persistent"
  },
  {
    name: "Conjunctivitis Pattern",
    symptoms: ["red eyes", "itchy eyes", "eye discharge", "eye pain", "light sensitivity"],
    tests: "Clinical eye examination; swab testing may be considered when indicated"
  },
  {
    name: "Dehydration Pattern",
    symptoms: ["thirst", "dry mouth", "dizziness", "fatigue", "dark urine", "headache"],
    tests: "Clinical assessment; urine and blood tests may be considered based on severity"
  },
  {
    name: "Bronchitis Pattern",
    symptoms: ["cough", "wheezing", "chest tightness", "fatigue", "mucus", "fever"],
    tests: "Clinical evaluation; chest examination and respiratory assessment may be considered"
  },
  {
    name: "Viral Pharyngitis Pattern",
    symptoms: ["sore throat", "fever", "headache", "body ache", "fatigue", "swollen glands"],
    tests: "Clinical assessment; throat swab or testing is based on symptoms and exposure"
  },
  {
    name: "Ear Infection Pattern",
    symptoms: ["ear pain", "fever", "hearing loss", "ear fullness", "fatigue"],
    tests: "Clinical ear examination; specialist review may be needed for persistent symptoms"
  },
  {
    name: "Allergic Conjunctivitis Pattern",
    symptoms: ["itchy eyes", "red eyes", "eye watering", "runny nose", "sneezing"],
    tests: "Clinical eye assessment; allergy history may guide evaluation"
  },
  {
    name: "Anxiety or Panic Pattern",
    symptoms: ["palpitations", "shortness of breath", "dizziness", "fatigue", "nausea"],
    tests: "Clinical assessment; evaluation depends on symptom duration and any red-flag features"
  },
  {
    name: "Diabetes-Related Pattern",
    symptoms: ["increased thirst", "frequent urination", "fatigue", "blurred vision", "slow wound healing"],
    tests: "Blood glucose testing, HbA1c, and clinical evaluation may be considered"
  },
  {
    name: "Thyroid Disorder Pattern",
    symptoms: ["fatigue", "weight change", "heat intolerance", "cold intolerance", "palpitations"],
    tests: "Thyroid function tests and clinical review may be indicated"
  },
  {
    name: "Skin Allergy Pattern",
    symptoms: ["rash", "itching", "red skin", "hives", "swelling"],
    tests: "Clinical skin assessment; allergy history may guide further evaluation"
  },
  {
    name: "Migraine With Aura Pattern",
    symptoms: ["headache", "visual aura", "nausea", "sensitivity to light", "sensitivity to sound"],
    tests: "Clinical assessment; neurologic evaluation may be considered depending on severity"
  },
  {
    name: "Neurological Concern Pattern",
    symptoms: ["weakness", "dizziness", "headache", "numbness", "vision changes"],
    tests: "Clinical evaluation; neurologic assessment and imaging may be indicated"
  }
];

const aliases = {
  "high temperature": "fever",
  "elevated body temperature": "fever",
  "temperature": "fever",
  "coughing": "cough",
  "throat pain": "sore throat",
  "painful throat": "sore throat",
  "running nose": "runny nose",
  "nasal discharge": "runny nose",
  "blocked nose": "runny nose",
  "head pain": "headache",
  "tiredness": "fatigue",
  "tired": "fatigue",
  "body pain": "body ache",
  "muscle pain": "body ache",
  "breathlessness": "shortness of breath",
  "difficulty breathing": "shortness of breath",
  "chest discomfort": "chest pain",
  "feeling sick": "nausea",
  "throwing up": "vomiting",
  "loose stools": "diarrhea",
  "loose motions": "diarrhea",
  "stomach pain": "abdominal pain",
  "belly pain": "abdominal pain",
  "facial pain": "facial pressure",
  "pressure in the face": "facial pressure",
  "stuffy nose": "nasal congestion",
  "loss of taste": "loss of smell",
  "cannot smell": "loss of smell",
  "light sensitivity": "sensitivity to light",
  "sensitive to light": "sensitivity to light",
  "sound sensitivity": "sensitivity to sound",
  "sensitive to sound": "sensitivity to sound",
  "flashing lights": "visual aura",
  "pain when urinating": "painful urination",
  "burning urination": "painful urination",
  "peeing often": "frequent urination",
  "frequent need to urinate": "urinary urgency",
  "lower belly pain": "lower abdominal pain",
  "blood in pee": "blood in urine",
  "swollen neck glands": "swollen glands",
  "trouble swallowing": "difficulty swallowing",
  "white spots on tonsils": "tonsil spots",
  "phlegm": "mucus",
  "chest congestion": "mucus",
  "tight chest": "chest tightness",
  "red eye": "red eyes",
  "eye discharge": "eye discharge",
  "dry lips": "dry mouth",
  "very thirsty": "thirst",
  "dark pee": "dark urine",
  "sneezes": "sneezing",
  "eye itching": "itchy eyes",
  "ear ache": "ear pain",
  "ear pressure": "ear fullness",
  "hearing trouble": "hearing loss",
  "watery eyes": "eye watering",
  "racing heart": "palpitations",
  "heart racing": "palpitations",
  "lightheaded": "dizziness",
  "feeling dizzy": "dizziness",
  "chest pressure": "chest tightness",
  "blurred sight": "blurred vision",
  "sudden vision changes": "vision changes",
  "skin rash": "rash",
  "itchy skin": "itching",
  "bumps on skin": "hives",
  "swollen face": "swelling",
  "weak in body": "weakness",
  "numb hands": "numbness",
  "excessive thirst": "increased thirst",
  "more thirst": "increased thirst",
  "weight gain": "weight change",
  "weight loss": "weight change",
  "feeling hot": "heat intolerance",
  "feeling cold": "cold intolerance",
  "slow healing": "slow wound healing"
};

function normalize(input) {
  const cleanedInput = input.toLowerCase()
    .replace(/[^a-z0-9,;\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const pieces = cleanedInput
    .split(/[,;\n]+/);

  const result = new Set();
  const knownSymptoms = new Set(knowledgeBase.flatMap(condition => condition.symptoms));
  const terms = [...knownSymptoms, ...Object.keys(aliases)]
    .sort((a, b) => b.length - a.length);
  const matchedRanges = [];

  terms.forEach(term => {
    const expression = new RegExp(`\\b${term.replace(/[.*+?^${}()|[\\]\\]/g, "\\\\$&")}\\b`, "g");
    const matches = [...cleanedInput.matchAll(expression)];
    if (!matches.length) return;

    const hasOverlap = matches.some(match => {
      const start = match.index;
      const end = start + term.length;
      return matchedRanges.some(range => start < range.end && end > range.start);
    });
    if (hasOverlap) return;

    const firstMatch = matches[0];
    matchedRanges.push({ start: firstMatch.index, end: firstMatch.index + term.length });
    result.add(aliases[term] || term);
  });

  for (let piece of pieces) {
    piece = piece.trim().replace(/\s+/g, " ");
    if (!piece) continue;

    if (aliases[piece]) {
      result.add(aliases[piece]);
      continue;
    }

    if ([...knownSymptoms].includes(piece)) result.add(piece);

    Object.keys(aliases).forEach(alias => {
      if (piece.includes(alias)) result.add(aliases[alias]);
    });
  }

  return [...result];
}

function analyze(input) {
  const symptoms = normalize(input);

  return {
    symptoms,
    results: knowledgeBase
      .map(d => {
        const matched = d.symptoms.filter(s => symptoms.includes(s));
        const missing = d.symptoms.filter(s => !symptoms.includes(s));
        return {
          ...d,
          score: matched.length,
          matched,
          missing,
          percentage: Math.round((matched.length / d.symptoms.length) * 100)
        };
      })
      .filter(d => d.score > 0)
      .sort((a,b) => b.score - a.score || b.percentage - a.percentage)
  };
}

function render(data) {
  const section = document.getElementById("resultsSection");
  const box = document.getElementById("results");
  const normalized = document.getElementById("normalizedText");

  section.classList.remove("hidden");
  normalized.textContent = data.symptoms.length
    ? "Normalized symptoms: " + data.symptoms.join(", ")
    : "No recognizable symptoms were found.";

  if (!data.results.length) {
    box.innerHTML = `<div class="result-card"><strong>No matching conditions found.</strong><p>Try adding more symptoms from the project knowledge base.</p></div>`;
    return;
  }

  box.innerHTML = data.results.map((r, i) => `
    <article class="result-card">
      <div class="result-top">
        <div><span class="rank">#${i + 1}</span> <strong>${r.name}</strong></div>
        <span class="score">${r.score}/${r.symptoms.length} • ${r.percentage}%</span>
      </div>
      <div class="bar"><span style="width:${r.percentage}%"></span></div>
      <p><strong>Matched:</strong> ${r.matched.join(", ") || "None"}</p>
      <p><strong>Not matched:</strong> ${r.missing.join(", ") || "None"}</p>
      <p><strong>Discriminating test/example:</strong> ${r.tests}</p>
    </article>
  `).join("");
}

function getStoredUser() {
  return JSON.parse(localStorage.getItem("symptomMatchUser") || "null");
}

function setCurrentUser(user) {
  localStorage.setItem("symptomMatchCurrentUser", JSON.stringify(user));
}

function getCurrentUser() {
  return JSON.parse(localStorage.getItem("symptomMatchCurrentUser") || "null");
}

function saveAnalysis(input, data) {
  const history = JSON.parse(localStorage.getItem("symptomMatchHistory") || "[]");
  history.unshift({ input: input.trim(), symptoms: data.symptoms, topMatch: data.results[0]?.name || "No match", date: new Date().toLocaleDateString() });
  localStorage.setItem("symptomMatchHistory", JSON.stringify(history.slice(0, 8)));
}

function setupMatcher() {
  const analyzeButton = document.getElementById("analyzeBtn");
  if (!analyzeButton) return;

  analyzeButton.addEventListener("click", () => {
    const input = document.getElementById("symptoms").value;
    const data = analyze(input);
    render(data);
    saveAnalysis(input, data);
    document.getElementById("resultsSection").scrollIntoView({ behavior: "smooth" });
  });

  document.getElementById("exampleBtn").addEventListener("click", () => {
    document.getElementById("symptoms").value = "high temperature, coughing, throat pain";
  });

  document.querySelectorAll(".tag").forEach(btn => {
    btn.addEventListener("click", () => {
      const textarea = document.getElementById("symptoms");
      textarea.value = textarea.value.trim() ? textarea.value.trim() + ", " + btn.dataset.symptom : btn.dataset.symptom;
    });
  });

  document.getElementById("clearBtn").addEventListener("click", () => {
    document.getElementById("symptoms").value = "";
    document.getElementById("results").innerHTML = "";
    document.getElementById("normalizedText").textContent = "";
    document.getElementById("resultsSection").classList.add("hidden");
  });
}

function setupAuth() {
  const signupForm = document.getElementById("signupForm");
  const loginForm = document.getElementById("loginForm");

  signupForm?.addEventListener("submit", event => {
    event.preventDefault();
    const user = { name: document.getElementById("signupName").value.trim(), email: document.getElementById("signupEmail").value.trim(), password: document.getElementById("signupPassword").value };
    localStorage.setItem("symptomMatchUser", JSON.stringify(user));
    setCurrentUser(user);
    window.location.href = "dashboard.html";
  });

  loginForm?.addEventListener("submit", event => {
    event.preventDefault();
    const stored = getStoredUser();
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;
    const message = document.getElementById("loginMessage");
    if (!stored || stored.email !== email || stored.password !== password) {
      message.textContent = "Account not found. Create an account first or check your details.";
      message.className = "form-message error-message";
      return;
    }
    setCurrentUser(stored);
    window.location.href = "dashboard.html";
  });
}

function setupDashboard() {
  if (!document.getElementById("historyList")) return;
  const user = getCurrentUser();
  if (!user) {
    window.location.href = "login.html";
    return;
  }
  document.getElementById("userName").textContent = user.name.split(" ")[0];
  const history = JSON.parse(localStorage.getItem("symptomMatchHistory") || "[]");
  document.getElementById("analysisCount").textContent = history.length;
  const knowledgeBaseCount = document.getElementById("knowledgeBaseCount");
  if (knowledgeBaseCount) knowledgeBaseCount.textContent = knowledgeBase.length;
  document.getElementById("lastInput").textContent = history[0]?.symptoms?.join(", ") || "None yet";
  document.getElementById("historyList").innerHTML = history.length ? history.map(item => `<div class="history-item"><div><strong>${item.topMatch}</strong><span>${item.symptoms.join(", ") || item.input || "No recognized symptoms"}</span></div><time>${item.date}</time></div>`).join("") : `<div class="empty-state"><strong>No analyses yet</strong><span>Your recent symptom comparisons will appear here.</span></div>`;
}

function logout() {
  localStorage.removeItem("symptomMatchCurrentUser");
  window.location.href = "login.html";
}

function setupProfile() {
  const profileName = document.getElementById("profileName");
  if (!profileName) return;
  const user = getCurrentUser();
  if (!user) {
    window.location.href = "login.html";
    return;
  }
  profileName.textContent = user.name;
  document.getElementById("profileEmail").textContent = user.email;
  document.getElementById("profileInitials").textContent = user.name.split(" ").map(part => part[0]).join("").slice(0, 2).toUpperCase();
  document.getElementById("profileLogoutBtn").addEventListener("click", logout);
}

const themeButton = document.getElementById("themeBtn");
themeButton?.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeButton.textContent = document.body.classList.contains("dark") ? "☀" : "☾";
});

setupMatcher();
setupAuth();
setupDashboard();
document.getElementById("logoutBtn")?.addEventListener("click", logout);
setupProfile();

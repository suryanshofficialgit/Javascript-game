import { useState, useEffect } from "react";

const LEVEL2_CHAPTERS = [
  {
    id: 1,
    title: "The Spell Registry",
    scene: "The Mages' Tower keeps every spell in ordered lists called Arrays. The Head Mage hands you a task...",
    narrative: `"Welcome to Level 2," the Head Mage says, adjusting her robes.
"In the upper floors, we store things in ARRAYS — ordered lists that hold many items.
Your first task: create an array called 'spells' containing three strings:
'fireball', 'icebolt', and 'thunderclap'.
Then log it to prove you've registered them."`,
    task: "Create an array called 'spells' with 3 string items and console.log it",
    hint: "let spells = ['fireball', 'icebolt', 'thunderclap'];\nconsole.log(spells);",
    concept: "Arrays",
    conceptDesc: "Arrays store multiple values in one variable using square brackets []. Items are separated by commas.",
    validate: (code) =>
      /let\s+spells\s*=\s*\[/.test(code) &&
      /['"`]fireball['"`]/.test(code) &&
      /['"`]icebolt['"`]/.test(code) &&
      /['"`]thunderclap['"`]/.test(code) &&
      /console\.log\s*\(\s*spells\s*\)/.test(code),
    expectedOutput: '> ["fireball", "icebolt", "thunderclap"]',
    successStory: '"Excellent!" the Mage claps. "Three spells registered! Arrays are your first real superpower — store any number of items in one place."',
    starterCode: "// Register the spells!\nlet spells = [\n  'fireball',\n  \n  \n];\n\nconsole.log(spells);",
  },
  {
    id: 2,
    title: "The Growing Arsenal",
    scene: "A war horn sounds — the kingdom needs more spells! The registry must be updated immediately...",
    narrative: `"Emergency!" a runner bursts in. "We need to add a new spell — 'lightningstrike'!
The array already exists. We don't rewrite it. We use a METHOD — a built-in action.
Use .push() to add 'lightningstrike' to your spells array.
Then log spells.length to confirm how many spells we have."`,
    task: "Use .push() to add 'lightningstrike' to spells, then log spells.length",
    hint: "spells.push('lightningstrike');\nconsole.log(spells.length);",
    concept: "Array .push() & .length",
    conceptDesc: ".push() adds a new item to the END of an array. .length tells you how many items are inside.",
    validate: (code) =>
      /spells\.push\s*\(\s*['"`]lightningstrike['"`]\s*\)/.test(code) &&
      /console\.log\s*\(\s*spells\.length\s*\)/.test(code),
    expectedOutput: "> 4",
    successStory: '"4 spells in the registry!" the runner cheers. "You used .push() and .length — two of the most-used array tools in all of JavaScript!"',
    starterCode: "let spells = ['fireball', 'icebolt', 'thunderclap'];\n\n// Add the new spell!\nspells.push(\n\n// Log the count\nconsole.log(",
  },
  {
    id: 3,
    title: "The Mage's Profile",
    scene: "The Tower's records hold not just lists, but full profiles — with many different details per mage...",
    narrative: `The Archivist explains:
"Arrays are great for lists, but a mage has MANY different details — name, level, specialty.
For that, we use OBJECTS. An object groups related data as key: value pairs.
Create an object called 'mage' with three properties:
  name: your chosen name (string)
  level: 7 (number)
  specialty: 'Elemental' (string)
Then log mage.level."`,
    task: "Create an object called 'mage' with name, level:7, and specialty properties. Log mage.level",
    hint: "let mage = {\n  name: 'Zara',\n  level: 7,\n  specialty: 'Elemental'\n};\nconsole.log(mage.level);",
    concept: "Objects",
    conceptDesc: "Objects store related data as key: value pairs inside curly braces {}. Access values with dot notation: object.key",
    validate: (code) =>
      /let\s+mage\s*=\s*\{/.test(code) &&
      /name\s*:/.test(code) &&
      /level\s*:\s*7/.test(code) &&
      /specialty\s*:\s*['"`]Elemental['"`]/.test(code) &&
      /console\.log\s*\(\s*mage\.level\s*\)/.test(code),
    expectedOutput: "> 7",
    successStory: '"Level 7 confirmed!" the Archivist stamps the record. "Objects are how JavaScript describes anything complex — from user profiles to game characters to products in a shop."',
    starterCode: "// Build your mage profile!\nlet mage = {\n  name: 'Zara',\n  level: 7,\n  \n};\n\nconsole.log(",
  },
  {
    id: 4,
    title: "The Enchanted Scroll",
    scene: "An ancient scroll arrives — its text needs transforming before the King can read it...",
    narrative: `The Royal Scribe hands you a scroll:
"The message arrived in lowercase. Royal decrees must be in UPPERCASE.
The string method .toUpperCase() transforms any string instantly.
You have: let message = 'the kingdom is safe'
Use .toUpperCase() on it and log the result — the King is waiting!"`,
    task: "Use .toUpperCase() on the message string and log the result",
    hint: "let message = 'the kingdom is safe';\nconsole.log(message.toUpperCase());",
    concept: "String .toUpperCase()",
    conceptDesc: "Strings have built-in methods too! .toUpperCase() converts every character to capitals. .toLowerCase() does the opposite.",
    validate: (code) =>
      /\.toUpperCase\s*\(\s*\)/.test(code) &&
      /console\.log/.test(code),
    expectedOutput: '> "THE KINGDOM IS SAFE"',
    successStory: '"THE KINGDOM IS SAFE!" booms across the hall. "String methods are tiny tools built into every string — master them and text manipulation becomes effortless!"',
    starterCode: "let message = 'the kingdom is safe';\n\n// Transform it to uppercase!\nconsole.log(",
  },
  {
    id: 5,
    title: "The Lost Word",
    scene: "A coded message arrived — the kingdom's spies buried a secret word inside it...",
    narrative: `The Spymaster leans in close:
"Somewhere in this sentence is the hidden word. We need to find exactly WHERE it is.
Use the string method .indexOf() — it returns the position (index) of a word inside a string.
Find the position of the word 'dragon' in the message.
Remember: indexes start from 0!"`,
    task: "Use .indexOf('dragon') on the message string and log the result",
    hint: "let message = 'the dragon sleeps at dawn';\nconsole.log(message.indexOf('dragon'));",
    concept: "String .indexOf()",
    conceptDesc: ".indexOf() searches a string and returns the position of the first match. Returns -1 if not found.",
    validate: (code) =>
      /\.indexOf\s*\(\s*['"`]dragon['"`]\s*\)/.test(code) &&
      /console\.log/.test(code),
    expectedOutput: "> 4",
    successStory: '"Position 4 — found it!" the Spymaster whispers. "Count: t(0) h(1) e(2) space(3) d(4) — dragon starts at index 4. .indexOf() is your search radar in any string!"',
    starterCode: "let message = 'the dragon sleeps at dawn';\n\n// Find where 'dragon' is hiding!\nconsole.log(message.indexOf(",
  },
  {
    id: 6,
    title: "The Name Splitter",
    scene: "A list of adventurers arrived as one long string — but the Guild needs each name separately...",
    narrative: `The Guild Master sighs at a long parchment:
"Every name is crammed into one string, separated by commas. I need a proper ARRAY of names.
The string method .split() breaks a string apart at a character you choose.
You have: let roster = 'Aria,Kael,Mira,Zeno'
Split it by ',' and log the resulting array."`,
    task: "Use .split(',') on the roster string and log the array result",
    hint: "let roster = 'Aria,Kael,Mira,Zeno';\nconsole.log(roster.split(','));",
    concept: "String .split()",
    conceptDesc: ".split(separator) breaks a string into an array of pieces, cutting at each separator. The opposite is .join()!",
    validate: (code) =>
      /\.split\s*\(\s*['"`],['"`]\s*\)/.test(code) &&
      /console\.log/.test(code),
    expectedOutput: '> ["Aria", "Kael", "Mira", "Zeno"]',
    successStory: '"Four names — perfectly separated!" the Guild Master cheers. ".split() is one of the most practical string tools you\'ll use — perfect for parsing CSV data, URLs, and user input."',
    starterCode: "let roster = 'Aria,Kael,Mira,Zeno';\n\n// Split into an array!\nconsole.log(roster.split(",
  },
  {
    id: 7,
    title: "The Final Chronicle",
    scene: "The Royal Chronicler must write a personalised scroll for each hero — using their object data...",
    narrative: `The Chronicler unrolls a blank scroll:
"Every hero deserves a personalised introduction — using their OWN data.
Combine what you know: create a hero object, then use a TEMPLATE LITERAL to build a sentence.
Template literals use backticks and \${} to embed variables directly into strings.
Make an object called 'hero' with name and level, then log:
'Hero [name] has reached level [level]!'"`,
    task: "Create a hero object, then use a template literal to log their name and level",
    hint: "let hero = { name: 'Aria', level: 10 };\nconsole.log(`Hero ${hero.name} has reached level ${hero.level}!`);",
    concept: "Template Literals + Objects",
    conceptDesc: "Template literals (backticks ` `) let you embed any JS expression with ${} inside a string — clean and readable!",
    validate: (code) =>
      /let\s+hero\s*=\s*\{/.test(code) &&
      /name\s*:/.test(code) &&
      /level\s*:/.test(code) &&
      /`.*\$\{hero\.name\}.*\$\{hero\.level\}.*`/.test(code) &&
      /console\.log/.test(code),
    expectedOutput: '> "Hero Aria has reached level 10!"',
    successStory: '"Magnificent!" the Chronicler seals the scroll with wax. "You\'ve combined objects AND template literals — this is real-world JavaScript. Every modern web app uses exactly this pattern!"',
    starterCode: "// Create your hero!\nlet hero = {\n  name: 'Aria',\n  level: 10\n};\n\n// Write their chronicle!\nconsole.log(`Hero ${hero.name}",
  },
];

const CONCEPT_TRAIL = ["Arrays", ".push() & .length", "Objects", ".toUpperCase()", ".indexOf()", ".split()", "Template Literals"];

export default function CodeQuestLevel2({ onRestart, onNextLevel }) {
  const [chapter, setChapter] = useState(0);
  const [code, setCode] = useState(LEVEL2_CHAPTERS[0].starterCode);
  const [phase, setPhase] = useState("story");
  const [showHint, setShowHint] = useState(false);
  const [output, setOutput] = useState("");
  const [shake, setShake] = useState(false);
  const [particles, setParticles] = useState([]);
  const [typedText, setTypedText] = useState("");
  const current = LEVEL2_CHAPTERS[chapter];

  useEffect(() => {
    setTypedText("");
    let i = 0;
    const text = current.narrative;
    const interval = setInterval(() => {
      setTypedText(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 16);
    return () => clearInterval(interval);
  }, [chapter]);

  const handleRun = () => {
    if (current.validate(code)) {
      setOutput(current.expectedOutput);
      setTimeout(() => {
        const pts = Array.from({ length: 20 }, (_, i) => ({
          id: i, x: Math.random() * 100, delay: Math.random() * 0.6,
          emoji: ["🔷", "💠", "⚡", "🌊", "✦"][i % 5],
        }));
        setParticles(pts);
        setTimeout(() => setParticles([]), 2000);
        setPhase("success");
      }, 400);
    } else {
      setOutput("✗ Not quite — read the hint, you're close!");
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  const handleNext = () => {
    if (chapter + 1 < LEVEL2_CHAPTERS.length) {
      const next = chapter + 1;
      setChapter(next);
      setCode(LEVEL2_CHAPTERS[next].starterCode);
      setPhase("story");
      setShowHint(false);
      setOutput("");
    } else {
      setPhase("complete");
    }
  };

  const progressPct = (chapter / LEVEL2_CHAPTERS.length) * 100;

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(160deg, #020c18 0%, #041828 55%, #08100a 100%)",
      fontFamily: "'Palatino Linotype', 'Book Antiqua', serif",
      color: "#c0d8e8",
      position: "relative",
      overflow: "hidden",
    }}>
      <style>{`
        @keyframes ripple { 0%,100%{opacity:0.04;transform:scale(1)}50%{opacity:0.1;transform:scale(1.05)} }
        @keyframes glow2 { 0%,100%{box-shadow:0 0 18px rgba(30,140,200,0.2)}50%{box-shadow:0 0 36px rgba(30,140,200,0.5)} }
        @keyframes fadeIn2 { from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)} }
        @keyframes flyUp3 { 0%{transform:translateY(0) scale(1);opacity:1}100%{transform:translateY(-260px) scale(0.4);opacity:0} }
        @keyframes shake2 { 0%,100%{transform:translateX(0)}25%{transform:translateX(-7px)}75%{transform:translateX(7px)} }
        @keyframes shimmer2 { 0%,100%{opacity:0.85}50%{opacity:1} }
        @keyframes completePulse { 0%,100%{text-shadow:0 0 20px rgba(30,200,255,0.4)}50%{text-shadow:0 0 50px rgba(30,200,255,0.9)} }
        textarea:focus { outline:none; }
        .run2:hover { background:#0a4060!important; transform:scale(1.02); }
        .hint2:hover { background:rgba(180,130,50,0.15)!important; }
        .cont2:hover { background:#1a0a50!important; }
        .replay2:hover { opacity:0.7; }
      `}</style>

      {/* Subtle ocean hex pattern background */}
      <div style={{
        position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
        background: `radial-gradient(circle at 20% 50%, rgba(0,60,120,0.12) 0%, transparent 50%),
                     radial-gradient(circle at 80% 20%, rgba(0,40,80,0.1) 0%, transparent 40%),
                     radial-gradient(circle at 60% 80%, rgba(0,80,60,0.08) 0%, transparent 40%)`,
      }} />

      {/* Floating orbs */}
      {[...Array(6)].map((_, i) => (
        <div key={i} style={{
          position: "fixed",
          width: `${80 + i * 40}px`, height: `${80 + i * 40}px`,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(${i % 2 === 0 ? "20,120,200" : "10,180,140"},0.06) 0%, transparent 70%)`,
          top: `${10 + i * 15}%`, left: `${5 + i * 16}%`,
          animation: `ripple ${4 + i}s ease-in-out infinite`,
          animationDelay: `${i * 0.7}s`,
          pointerEvents: "none", zIndex: 0,
        }} />
      ))}

      {/* Particles */}
      {particles.map(p => (
        <div key={p.id} style={{
          position: "fixed", left: `${p.x}%`, top: "50%", zIndex: 100,
          fontSize: "1.3rem", animation: `flyUp3 1.8s ease-out forwards`,
          animationDelay: `${p.delay}s`, pointerEvents: "none",
        }}>{p.emoji}</div>
      ))}

      <div style={{ position: "relative", zIndex: 1, maxWidth: "880px", margin: "0 auto", padding: "20px 16px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "26px" }}>
          <div style={{ fontSize: "0.62rem", letterSpacing: "5px", color: "#1a4060", textTransform: "uppercase", marginBottom: "8px" }}>
            ✦ Level 2 · The Mages' Tower ✦
          </div>
          <h1 style={{
            margin: 0, fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: "bold",
            color: "#40b8e0", letterSpacing: "3px",
            textShadow: "0 0 30px rgba(40,160,220,0.5)",
            animation: "shimmer2 3s ease-in-out infinite",
          }}>CodeQuest</h1>
          <div style={{ fontSize: "0.78rem", color: "#1a5070", marginTop: "4px", letterSpacing: "1px" }}>
            Intermediate · Arrays · Objects · String Methods
          </div>
        </div>

        {/* Progress trail */}
        <div style={{ marginBottom: "24px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
            {CONCEPT_TRAIL.map((c, i) => (
              <div key={c} style={{
                fontSize: "0.58rem", letterSpacing: "0.3px", textTransform: "uppercase",
                color: i < chapter ? "#30b8d0" : i === chapter ? "#f0b840" : "#0a2030",
                textAlign: "center", flex: 1, transition: "color 0.5s",
              }}>
                {i < chapter ? "✓ " : i === chapter ? "▶ " : ""}{c}
              </div>
            ))}
          </div>
          <div style={{ height: "3px", background: "rgba(255,255,255,0.05)", borderRadius: "2px", overflow: "hidden" }}>
            <div style={{
              height: "100%", width: `${progressPct}%`,
              background: "linear-gradient(90deg, #30b8d0, #f0b840)",
              transition: "width 0.8s ease",
              boxShadow: "0 0 10px rgba(40,180,220,0.6)",
            }} />
          </div>
        </div>

        {/* ── COMPLETE SCREEN ── */}
        {phase === "complete" ? (
          <div style={{ textAlign: "center", animation: "fadeIn2 0.7s ease", padding: "30px 20px" }}>
            <div style={{ fontSize: "3.5rem", marginBottom: "16px" }}>🗼</div>
            <h2 style={{ color: "#40c8f0", fontSize: "2rem", marginBottom: "12px", animation: "completePulse 2s infinite" }}>
              The Tower is Yours!
            </h2>
            <p style={{ color: "#2a6080", maxWidth: "460px", margin: "0 auto 20px", lineHeight: "1.8", fontSize: "0.93rem" }}>
              You've climbed every floor of the Mages' Tower and mastered{" "}
              <span style={{ color: "#40c8f0" }}>Arrays, Objects, and String Methods</span>{" "}
              — the building blocks of real JavaScript applications.
            </p>

            {/* Badges */}
            <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap", marginBottom: "32px" }}>
              {["📋 Arrays", "🔢 .push()", "🧩 Objects", "🔡 .toUpperCase()", "🔍 .indexOf()", "✂️ .split()", "📝 Template Literals"].map(b => (
                <div key={b} style={{
                  padding: "6px 13px", background: "rgba(40,160,220,0.08)",
                  border: "1px solid rgba(40,160,220,0.25)", borderRadius: "20px",
                  fontSize: "0.72rem", color: "#2a9abf",
                }}>{b}</div>
              ))}
            </div>

            {/* ★ ENTER LEVEL 3 BUTTON ★ */}
            <div style={{ marginBottom: "20px" }}>
              <div style={{ fontSize: "0.62rem", letterSpacing: "3px", color: "#1a2a30", textTransform: "uppercase", marginBottom: "14px" }}>
                ✦ The Final Stage awaits ✦
              </div>
              <button
                onClick={onNextLevel}
                style={{
                  padding: "16px 48px",
                  background: "linear-gradient(135deg, rgba(30,5,0,0.95), rgba(60,12,0,0.95))",
                  border: "2px solid rgba(220,80,30,0.6)",
                  borderRadius: "14px",
                  color: "#ffccaa",
                  fontSize: "1.05rem",
                  cursor: "pointer",
                  fontFamily: "Palatino Linotype, serif",
                  letterSpacing: "2px",
                  transition: "all 0.3s ease",
                  boxShadow: "0 0 30px rgba(200,60,20,0.3)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "12px",
                }}
                onMouseOver={e => { e.currentTarget.style.boxShadow = "0 0 60px rgba(220,80,20,0.7)"; e.currentTarget.style.transform = "scale(1.05)"; }}
                onMouseOut={e => { e.currentTarget.style.boxShadow = "0 0 30px rgba(200,60,20,0.3)"; e.currentTarget.style.transform = "scale(1)"; }}
              >
                <span style={{ fontSize: "1.3rem" }}>🌋</span>
                Enter Level 3
                <span style={{ fontSize: "0.85rem", color: "rgba(220,120,60,0.7)" }}>→</span>
              </button>
              <div style={{ marginTop: "10px", fontSize: "0.72rem", color: "#0a1a20" }}>
                Closures · Recursion · Classes · Promises · Final Boss
              </div>
            </div>

            <button
              onClick={onRestart}
              className="replay2"
              style={{
                padding: "9px 22px", background: "transparent",
                border: "1px solid rgba(40,160,220,0.2)", borderRadius: "10px",
                color: "#0a3040", fontSize: "0.78rem", cursor: "pointer",
                fontFamily: "Palatino Linotype, serif", transition: "opacity 0.2s",
              }}>↺ Restart from Level 1</button>
          </div>
        ) : (
          /* ── GAME PANELS ── */
          <div style={{ display: "grid", gap: "20px" }}>

            {/* Story Panel */}
            <div style={{
              background: "rgba(2,14,28,0.9)",
              border: "1px solid rgba(30,140,200,0.22)",
              borderRadius: "16px", padding: "24px",
              boxShadow: "0 0 40px rgba(0,0,0,0.6)",
              animation: "glow2 4s ease-in-out infinite",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <div style={{
                  width: "38px", height: "38px", borderRadius: "8px",
                  background: "linear-gradient(135deg, #0a6090, #1890c0)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1rem", fontWeight: "bold", color: "#d0f0ff", flexShrink: 0,
                  boxShadow: "0 0 12px rgba(20,140,200,0.4)",
                }}>{current.id}</div>
                <div>
                  <div style={{ fontSize: "0.6rem", letterSpacing: "3px", color: "#0a3050", textTransform: "uppercase" }}>Stage {current.id}</div>
                  <h2 style={{ margin: 0, fontSize: "1.15rem", color: "#60d0f0" }}>{current.title}</h2>
                </div>
                <div style={{
                  marginLeft: "auto", padding: "4px 12px",
                  background: "rgba(240,184,64,0.1)", border: "1px solid rgba(240,184,64,0.25)",
                  borderRadius: "12px", fontSize: "0.67rem", color: "#b08820", letterSpacing: "1px",
                }}>📐 {current.concept}</div>
              </div>

              <div style={{ fontStyle: "italic", color: "#0a4060", fontSize: "0.82rem", marginBottom: "14px", paddingBottom: "14px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                🗺 {current.scene}
              </div>

              <div style={{ lineHeight: "1.8", color: "#6090b0", fontSize: "0.92rem", minHeight: "85px", whiteSpace: "pre-line" }}>
                {typedText}
                <span style={{ borderRight: "2px solid #40b8e0", animation: "shimmer2 0.7s step-end infinite" }}> </span>
              </div>

              {/* Concept callout */}
              <div style={{
                marginTop: "16px", padding: "11px 15px",
                background: "rgba(10,50,80,0.4)", border: "1px solid rgba(20,100,150,0.2)",
                borderRadius: "10px", fontSize: "0.79rem", color: "#2a7090",
              }}>
                <span style={{ color: "#3090b8", fontWeight: "bold" }}>💡 {current.concept}: </span>
                {current.conceptDesc}
              </div>

              {phase === "story" && (
                <button
                  onClick={() => { setPhase("challenge"); setOutput(""); }}
                  style={{
                    marginTop: "18px", padding: "11px 28px",
                    background: "linear-gradient(135deg, rgba(10,50,100,0.8), rgba(10,70,120,0.9))",
                    border: "1px solid rgba(30,140,200,0.4)", borderRadius: "10px",
                    color: "#60c8e8", fontSize: "0.9rem", cursor: "pointer",
                    fontFamily: "Palatino Linotype, serif", letterSpacing: "1px",
                    transition: "all 0.2s",
                  }}>◈ Accept the Challenge</button>
              )}
            </div>

            {/* Code Editor Panel */}
            {(phase === "challenge" || phase === "success") && (
              <div style={{ animation: "fadeIn2 0.4s ease" }}>
                <div style={{
                  background: "rgba(0,6,16,0.95)",
                  border: "1px solid rgba(30,140,200,0.15)",
                  borderRadius: "16px", overflow: "hidden",
                }}>
                  {/* Title bar */}
                  <div style={{
                    background: "rgba(0,0,0,0.6)", padding: "10px 16px",
                    display: "flex", alignItems: "center", gap: "8px",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                  }}>
                    {["#e05252","#e0a752","#52c0e0"].map(c => (
                      <div key={c} style={{ width: "9px", height: "9px", borderRadius: "50%", background: c }} />
                    ))}
                    <span style={{ marginLeft: "8px", fontSize: "0.7rem", color: "#0a3050", letterSpacing: "1px" }}>tower.js</span>
                    <span style={{ marginLeft: "auto", fontSize: "0.68rem", color: "#0a2030" }}>🎯 {current.task}</span>
                  </div>

                  {/* Code area */}
                  <textarea
                    value={code}
                    onChange={e => setCode(e.target.value)}
                    disabled={phase === "success"}
                    style={{
                      width: "100%", minHeight: "130px", padding: "18px",
                      background: "transparent", border: "none",
                      color: "#50c0e0", fontSize: "0.93rem", lineHeight: "1.75",
                      fontFamily: "'Courier New', monospace",
                      boxSizing: "border-box", caretColor: "#40b8e0",
                      animation: shake ? "shake2 0.4s ease" : "none",
                    }}
                    spellCheck={false}
                  />

                  {/* Output */}
                  {output && (
                    <div style={{
                      padding: "11px 16px", borderTop: "1px solid rgba(255,255,255,0.05)",
                      background: "rgba(0,0,0,0.5)", fontFamily: "monospace", fontSize: "0.83rem",
                      color: output.startsWith("✗") ? "#d06060" : "#40c8e0",
                      animation: "fadeIn2 0.3s ease",
                    }}>
                      {output.split("\n").map((line, i) => <div key={i}>{line}</div>)}
                    </div>
                  )}

                  {/* Buttons */}
                  <div style={{
                    padding: "11px 16px", borderTop: "1px solid rgba(255,255,255,0.05)",
                    display: "flex", gap: "10px", flexWrap: "wrap",
                  }}>
                    {phase === "challenge" && (<>
                      <button onClick={handleRun} className="run2" style={{
                        padding: "9px 22px", background: "#063050",
                        border: "1px solid rgba(30,140,200,0.4)", borderRadius: "8px",
                        color: "#40b8e0", fontSize: "0.88rem", cursor: "pointer",
                        fontFamily: "Palatino Linotype, serif", transition: "all 0.2s",
                      }}>▶ Run Code</button>
                      <button onClick={() => setShowHint(!showHint)} className="hint2" style={{
                        padding: "9px 18px", background: "transparent",
                        border: "1px solid rgba(240,184,64,0.28)", borderRadius: "8px",
                        color: "#8a6010", fontSize: "0.88rem", cursor: "pointer",
                        fontFamily: "Palatino Linotype, serif", transition: "all 0.2s",
                      }}>{showHint ? "✕ Hide Hint" : "💡 Hint"}</button>
                    </>)}
                    {phase === "success" && (
                      <button onClick={handleNext} className="cont2" style={{
                        padding: "9px 24px",
                        background: "linear-gradient(135deg, #10086a, #1a1090)",
                        border: "1px solid rgba(100,80,220,0.4)", borderRadius: "8px",
                        color: "#a090f8", fontSize: "0.88rem", cursor: "pointer",
                        fontFamily: "Palatino Linotype, serif", transition: "all 0.2s",
                      }}>
                        {chapter + 1 < LEVEL2_CHAPTERS.length ? "→ Next Stage" : "🗼 Reach the Summit"}
                      </button>
                    )}
                  </div>
                </div>

                {/* Hint box */}
                {showHint && (
                  <div style={{
                    marginTop: "12px", padding: "14px 18px",
                    background: "rgba(12,8,2,0.95)", border: "1px solid rgba(240,184,64,0.25)",
                    borderRadius: "12px", animation: "fadeIn2 0.3s ease",
                  }}>
                    <div style={{ fontSize: "0.7rem", color: "#604010", marginBottom: "8px", letterSpacing: "2px" }}>SCROLL OF HINTS</div>
                    <code style={{ color: "#c09840", fontFamily: "monospace", fontSize: "0.88rem", whiteSpace: "pre" }}>{current.hint}</code>
                  </div>
                )}

                {/* Victory panel */}
                {phase === "success" && (
                  <div style={{
                    marginTop: "12px", padding: "16px 20px",
                    background: "rgba(0,14,30,0.95)", border: "1px solid rgba(30,140,200,0.25)",
                    borderRadius: "12px", animation: "fadeIn2 0.5s ease",
                  }}>
                    <div style={{ fontSize: "0.68rem", color: "#0a3858", marginBottom: "8px", letterSpacing: "2px" }}>◈ STAGE CLEARED</div>
                    <p style={{ margin: 0, color: "#30a0c8", lineHeight: "1.75", fontSize: "0.92rem" }}>
                      {current.successStory}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        <div style={{ textAlign: "center", marginTop: "28px", fontSize: "0.62rem", color: "#060e18", letterSpacing: "2px" }}>
          CODEQUEST · LEVEL 2 · STAGE {chapter + 1} OF {LEVEL2_CHAPTERS.length}
        </div>
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";

const STORY_CHAPTERS = [
  {
    id: 1,
    title: "The Awakening",
    scene: "Deep in the Digital Forest, a young apprentice coder finds a broken lantern...",
    narrative: `You stumble upon an ancient lantern flickering with dying light. A voice echoes from within:
"I am the Spirit of Code. My flame grows dim — only you can restore it. 
To light me, you must speak the first words of power: tell the world your name."`,
    task: "Print a greeting using console.log()",
    hint: 'console.log("Hello, World!")',
    concept: "Output",
    conceptDesc: "console.log() sends messages to the output — it's how programs communicate!",
    validate: (code) => /console\.log\s*\(\s*["'`].*["'`]\s*\)/.test(code),
    expectedOutput: '> "Hello, World!"',
    successStory: 'The lantern blazes to life! Golden light floods the forest. The Spirit cheers: "You\'ve spoken the first words of Code!"',
    starterCode: '// Light the lantern!\nconsole.log("Hello, World!")',
  },
  {
    id: 2,
    title: "The Memory Vault",
    scene: "A crumbling vault blocks your path. Ancient runes read: 'Store before you seek.'",
    narrative: `The Spirit of Code explains: "This vault holds treasures, but first you must label them. 
In the language of code, we call these 'variables'. 
Create a variable called 'treasure' and give it any string value to open the vault."`,
    task: "Create a variable called 'treasure' and assign it any string value",
    hint: 'let treasure = "golden key";',
    concept: "Variables",
    conceptDesc: "Variables are like labeled boxes — they store data so you can use it later!",
    validate: (code) =>
      /let\s+treasure\s*=\s*["'`].+["'`]/.test(code) ||
      /const\s+treasure\s*=\s*["'`].+["'`]/.test(code),
    expectedOutput: '> treasure = "golden key"',
    successStory: "The vault doors grind open! Inside, you find the Golden Key of Variables — with it, your code can remember anything!",
    starterCode: '// Label your treasure!\nlet treasure = "golden key";',
  },
  {
    id: 3,
    title: "The Two Paths",
    scene: "A fork in the road. One path leads to sunlight, the other to shadow.",
    narrative: `A riddle stone appears before you:
"I will only show you the safe path IF you prove your worth.
Write an if-statement: if the password equals 'open', log 'The sunlit path opens!'"
The Spirit whispers: "This is an if-statement — code that makes decisions."`,
    task: "Write an if-statement checking if password === 'open'",
    hint: 'if (password === "open") { console.log("The sunlit path opens!"); }',
    concept: "Conditionals",
    conceptDesc: "If-statements let your code make decisions — like a fork in the road!",
    validate: (code) =>
      /if\s*\(\s*password\s*===?\s*["'`]open["'`]\s*\)/.test(code),
    expectedOutput: '> "The sunlit path opens!"',
    successStory: 'The riddle stone glows and the safe path reveals itself! "Well decided," rumbles the stone. "You understand the power of choice!"',
    starterCode: 'let password = "open";\n\n// Write your if-statement!\nif (password === "open") {\n  console.log("The sunlit path opens!");\n}',
  },
  {
    id: 4,
    title: "The Echo Caves",
    scene: "A cave of a thousand echoes stretches before you. The Spirit says there's a faster way...",
    narrative: `"Look at these cave walls," the Spirit says. "Each echo repeats the same sound.
In code, when we repeat something, we use a LOOP!
To escape, call out 'Hello!' exactly 3 times — but using a loop, not copy-paste."`,
    task: "Write a for loop that runs exactly 3 times",
    hint: 'for (let i = 0; i < 3; i++) {\n  console.log("Hello!");\n}',
    concept: "Loops",
    conceptDesc: "Loops repeat actions — instead of copy-pasting code, loops do it automatically!",
    validate: (code) =>
      /for\s*\(\s*let\s+\w+\s*=\s*0\s*;/.test(code) && /i\s*<\s*3/.test(code),
    expectedOutput: '> "Hello!"\n> "Hello!"\n> "Hello!"',
    successStory: "Three perfect echoes ring out! The cave entrance seals behind you as you emerge into daylight. 'Loops are your magic multiplier!' cries the Spirit.",
    starterCode: "// Echo 3 times with a loop!\nfor (let i = 0; i < 3; i++) {\n  console.log(\"Hello!\");\n}",
  },
  {
    id: 5,
    title: "The Final Spell",
    scene: "The Dragon of Bugs lies across the bridge to the Code Kingdom. Only a Function can defeat it!",
    narrative: `The Spirit speaks gravely: "This is your final test. The Dragon of Bugs fears only organised code.
A FUNCTION is a named block of magic you can call whenever you need it.
Create a function called 'defeatDragon' that logs 'Dragon defeated!' — then call it!"`,
    task: "Write a function called 'defeatDragon' and call it",
    hint: "function defeatDragon() {\n  console.log(\"Dragon defeated!\");\n}\ndefeatDragon();",
    concept: "Functions",
    conceptDesc: "Functions are reusable spells — write the magic once, cast it whenever you need!",
    validate: (code) =>
      /function\s+defeatDragon\s*\(\s*\)/.test(code) &&
      /defeatDragon\s*\(\s*\)/.test(code.split("function defeatDragon")[1] || ""),
    expectedOutput: '> "Dragon defeated!"',
    successStory: "The Dragon roars and vanishes in a flash of clean code! The bridge appears. You've mastered the Five Pillars of Code! The Kingdom awaits!",
    starterCode: "// Write your function spell!\nfunction defeatDragon() {\n  console.log(\"Dragon defeated!\");\n}\n\n// Now call it!\ndefeatDragon();",
  },
];

const CONCEPTS = ["Output", "Variables", "Conditionals", "Loops", "Functions"];

export default function CodeQuestLevel1({ onNextLevel }) {
  const [chapter, setChapter] = useState(0);
  const [code, setCode] = useState(STORY_CHAPTERS[0].starterCode);
  const [phase, setPhase] = useState("story"); // story | challenge | success | complete
  const [showHint, setShowHint] = useState(false);
  const [output, setOutput] = useState("");
  const [shake, setShake] = useState(false);
  const [particles, setParticles] = useState([]);
  const [typedText, setTypedText] = useState("");
  const current = STORY_CHAPTERS[chapter];

  useEffect(() => {
    setTypedText("");
    let i = 0;
    const text = current.narrative;
    const interval = setInterval(() => {
      setTypedText(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 18);
    return () => clearInterval(interval);
  }, [chapter]);

  const handleRun = () => {
    if (current.validate(code)) {
      setOutput(current.expectedOutput);
      setTimeout(() => {
        const pts = Array.from({ length: 18 }, (_, i) => ({
          id: i, x: Math.random() * 100, delay: Math.random() * 0.5,
        }));
        setParticles(pts);
        setTimeout(() => setParticles([]), 1800);
        setPhase("success");
      }, 400);
    } else {
      setOutput("✗ Not quite right. Check the hint if you need help!");
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  const handleNext = () => {
    if (chapter + 1 < STORY_CHAPTERS.length) {
      const next = chapter + 1;
      setChapter(next);
      setCode(STORY_CHAPTERS[next].starterCode);
      setPhase("story");
      setShowHint(false);
      setOutput("");
    } else {
      setPhase("complete");
    }
  };

  const progressPct = (chapter / STORY_CHAPTERS.length) * 100;

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0a0a1a 0%, #0d1b2e 50%, #0a1a0a 100%)",
      fontFamily: "'Georgia', serif",
      color: "#e8d5b0",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Stars */}
      {Array.from({ length: 60 }).map((_, i) => (
        <div key={i} style={{
          position: "fixed", borderRadius: "50%", background: "#fff",
          width: i % 8 === 0 ? "2px" : "1px", height: i % 8 === 0 ? "2px" : "1px",
          top: `${(i * 137.5) % 100}%`, left: `${(i * 97.3) % 100}%`,
          opacity: 0.2 + (i % 5) * 0.1,
          animation: `twinkle ${2 + (i % 4)}s ease-in-out infinite`,
          animationDelay: `${(i % 6) * 0.5}s`,
          pointerEvents: "none", zIndex: 0,
        }} />
      ))}

      {/* Victory particles */}
      {particles.map(p => (
        <div key={p.id} style={{
          position: "fixed", left: `${p.x}%`, top: "50%", zIndex: 100,
          fontSize: "1.5rem", animation: `flyUp 1.5s ease-out forwards`,
          animationDelay: `${p.delay}s`, pointerEvents: "none",
        }}>
          {["✨", "⭐", "🌟", "💫", "🔮"][p.id % 5]}
        </div>
      ))}

      <style>{`
        @keyframes twinkle { 0%,100%{opacity:0.1}50%{opacity:0.8} }
        @keyframes flyUp { 0%{transform:translateY(0) scale(1);opacity:1}100%{transform:translateY(-300px) scale(0.5);opacity:0} }
        @keyframes shake { 0%,100%{transform:translateX(0)}25%{transform:translateX(-8px)}75%{transform:translateX(8px)} }
        @keyframes glow { 0%,100%{box-shadow:0 0 20px rgba(255,200,80,0.3)}50%{box-shadow:0 0 40px rgba(255,200,80,0.7)} }
        @keyframes fadeIn { from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)} }
        @keyframes pulseGold { 0%,100%{color:#f5c842}50%{color:#ffd700} }
        @keyframes nextLevelPulse { 0%,100%{box-shadow:0 0 20px rgba(100,220,255,0.4)}50%{box-shadow:0 0 50px rgba(100,220,255,0.9), 0 0 80px rgba(180,100,255,0.4)} }
        textarea:focus { outline:none; }
        .run-btn:hover { background:#2d6a3f!important; transform:scale(1.03); }
        .hint-btn:hover { background:rgba(255,200,80,0.2)!important; }
        .next-btn:hover { background:#3a1d8a!important; }
        .nextlevel-btn:hover { transform:scale(1.05)!important; filter:brightness(1.2); }
      `}</style>

      <div style={{ position: "relative", zIndex: 1, maxWidth: "860px", margin: "0 auto", padding: "20px 16px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <div style={{ fontSize: "0.7rem", letterSpacing: "4px", color: "#f5c842", marginBottom: "6px", textTransform: "uppercase" }}>
            ⚔ Level 1 · The Digital Forest ⚔
          </div>
          <h1 style={{
            margin: 0, fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: "bold",
            color: "#f5c842", textShadow: "0 0 30px rgba(245,200,66,0.5)", letterSpacing: "2px",
          }}>CodeQuest</h1>
          <div style={{ fontSize: "0.8rem", color: "#a89060", marginTop: "4px" }}>Learn to code through legend & lore</div>
        </div>

        {/* Progress trail */}
        <div style={{ marginBottom: "24px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
            {CONCEPTS.map((c, i) => (
              <div key={c} style={{
                fontSize: "0.65rem", letterSpacing: "1px", textTransform: "uppercase",
                color: i < chapter ? "#4ade80" : i === chapter ? "#f5c842" : "#3a3030",
                textAlign: "center", flex: 1, transition: "color 0.5s",
              }}>
                {i < chapter ? "✓ " : i === chapter ? "▶ " : ""}{c}
              </div>
            ))}
          </div>
          <div style={{ height: "4px", background: "rgba(255,255,255,0.08)", borderRadius: "2px", overflow: "hidden" }}>
            <div style={{
              height: "100%", width: `${progressPct}%`,
              background: "linear-gradient(90deg, #4ade80, #f5c842)",
              borderRadius: "2px", transition: "width 0.8s ease",
              boxShadow: "0 0 12px rgba(245,200,66,0.6)",
            }} />
          </div>
        </div>

        {/* ── COMPLETE SCREEN ── */}
        {phase === "complete" ? (
          <div style={{ textAlign: "center", animation: "fadeIn 0.6s ease", padding: "30px 20px" }}>
            <div style={{ fontSize: "4rem", marginBottom: "16px" }}>🏰</div>
            <h2 style={{ color: "#f5c842", fontSize: "2rem", marginBottom: "12px", animation: "pulseGold 2s infinite" }}>
              Level 1 Complete!
            </h2>
            <p style={{ color: "#b8a070", maxWidth: "460px", margin: "0 auto 20px", lineHeight: "1.75", fontSize: "0.95rem" }}>
              You've mastered the <span style={{ color: "#f5c842" }}>Five Pillars of Code</span> and entered the Kingdom.
              A greater challenge stirs beyond the horizon...
            </p>

            {/* Badges */}
            <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap", marginBottom: "36px" }}>
              {["📤 Output", "📦 Variables", "🔀 Conditionals", "🔁 Loops", "🪄 Functions"].map(badge => (
                <div key={badge} style={{
                  padding: "7px 14px", background: "rgba(245,200,66,0.1)",
                  border: "1px solid rgba(245,200,66,0.3)", borderRadius: "20px",
                  fontSize: "0.78rem", color: "#f5c842",
                }}>{badge}</div>
              ))}
            </div>

            {/* ★ THE NEXT LEVEL BUTTON ★ */}
            <div style={{ marginBottom: "20px" }}>
              <div style={{ fontSize: "0.65rem", letterSpacing: "3px", color: "#4a4060", textTransform: "uppercase", marginBottom: "14px" }}>
                ✦ A new realm awaits ✦
              </div>
              <button
                onClick={onNextLevel}
                className="nextlevel-btn"
                style={{
                  padding: "16px 48px",
                  background: "linear-gradient(135deg, rgba(20,10,60,0.95), rgba(40,20,90,0.95))",
                  border: "2px solid rgba(100,180,255,0.6)",
                  borderRadius: "14px",
                  color: "#c0e8ff",
                  fontSize: "1.05rem",
                  cursor: "pointer",
                  fontFamily: "Georgia, serif",
                  letterSpacing: "2px",
                  transition: "all 0.3s ease",
                  animation: "nextLevelPulse 2.5s ease-in-out infinite",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "12px",
                }}>
                <span style={{ fontSize: "1.3rem" }}>🌌</span>
                Enter Level 2
                <span style={{ fontSize: "0.85rem", color: "#7090d0" }}>→</span>
              </button>
              <div style={{ marginTop: "10px", fontSize: "0.75rem", color: "#3a3550" }}>
                Arrays · Objects · String Methods
              </div>
            </div>

            {/* Replay option */}
            <button
              onClick={() => { setChapter(0); setCode(STORY_CHAPTERS[0].starterCode); setPhase("story"); setOutput(""); setShowHint(false); }}
              style={{
                padding: "9px 22px", background: "transparent",
                border: "1px solid rgba(245,200,66,0.2)", borderRadius: "8px",
                color: "#6a5030", fontSize: "0.78rem", cursor: "pointer",
                fontFamily: "Georgia, serif", marginTop: "8px",
              }}>↺ Replay Level 1</button>
          </div>
        ) : (
          /* ── GAME PANELS ── */
          <div style={{ display: "grid", gap: "20px" }}>

            {/* Story Panel */}
            <div style={{
              background: "rgba(10,15,30,0.88)",
              border: "1px solid rgba(245,200,66,0.22)",
              borderRadius: "16px", padding: "24px",
              boxShadow: "0 0 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(245,200,66,0.08)",
              animation: "glow 4s ease-in-out infinite",
            }}>
              {/* Chapter badge row */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <div style={{
                  width: "36px", height: "36px", borderRadius: "50%",
                  background: "linear-gradient(135deg, #f5c842, #e07b20)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1rem", fontWeight: "bold", color: "#0a0a1a", flexShrink: 0,
                }}>{current.id}</div>
                <div>
                  <div style={{ fontSize: "0.62rem", letterSpacing: "3px", color: "#7a6040", textTransform: "uppercase" }}>Chapter {current.id}</div>
                  <h2 style={{ margin: 0, fontSize: "1.2rem", color: "#f5c842" }}>{current.title}</h2>
                </div>
                <div style={{
                  marginLeft: "auto", padding: "4px 12px",
                  background: "rgba(74,222,128,0.1)", border: "1px solid rgba(74,222,128,0.25)",
                  borderRadius: "12px", fontSize: "0.68rem", color: "#4ade80", letterSpacing: "1px",
                }}>📚 {current.concept}</div>
              </div>

              {/* Scene */}
              <div style={{ fontStyle: "italic", color: "#9a8060", fontSize: "0.83rem", marginBottom: "14px", paddingBottom: "14px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                🗺 {current.scene}
              </div>

              {/* Typewriter narrative */}
              <div style={{ lineHeight: "1.8", color: "#d4bc8a", fontSize: "0.93rem", minHeight: "80px", whiteSpace: "pre-line" }}>
                {typedText}
                <span style={{ borderRight: "2px solid #f5c842", animation: "twinkle 0.8s step-end infinite" }}> </span>
              </div>

              {/* Concept callout */}
              <div style={{
                marginTop: "16px", padding: "11px 15px",
                background: "rgba(26,61,143,0.25)", border: "1px solid rgba(100,140,255,0.18)",
                borderRadius: "10px", fontSize: "0.8rem", color: "#8898d8",
              }}>
                <span style={{ color: "#6888e8", fontWeight: "bold" }}>💡 {current.concept}: </span>
                {current.conceptDesc}
              </div>

              {phase === "story" && (
                <button onClick={() => { setPhase("challenge"); setOutput(""); }} style={{
                  marginTop: "18px", padding: "11px 28px",
                  background: "linear-gradient(135deg, #8b1a1a, #a02020)",
                  border: "1px solid rgba(255,100,100,0.35)", borderRadius: "10px",
                  color: "#ffcccc", fontSize: "0.9rem", cursor: "pointer",
                  fontFamily: "Georgia, serif", letterSpacing: "1px",
                }}>⚔ Accept the Challenge</button>
              )}
            </div>

            {/* Code Editor Panel */}
            {(phase === "challenge" || phase === "success") && (
              <div style={{ animation: "fadeIn 0.4s ease" }}>
                <div style={{
                  background: "rgba(5,20,10,0.92)",
                  border: "1px solid rgba(74,222,128,0.18)",
                  borderRadius: "16px", overflow: "hidden",
                  boxShadow: "0 0 30px rgba(0,0,0,0.5)",
                }}>
                  {/* Editor title bar */}
                  <div style={{
                    background: "rgba(0,0,0,0.5)", padding: "10px 16px",
                    display: "flex", alignItems: "center", gap: "8px",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                  }}>
                    {["#e05252","#e0a752","#52e066"].map(c => (
                      <div key={c} style={{ width: "10px", height: "10px", borderRadius: "50%", background: c }} />
                    ))}
                    <span style={{ marginLeft: "8px", fontSize: "0.72rem", color: "#3a5a3a", letterSpacing: "1px" }}>quest.js</span>
                    <span style={{ marginLeft: "auto", fontSize: "0.7rem", color: "#3a4a3a" }}>🎯 {current.task}</span>
                  </div>

                  {/* Code textarea */}
                  <textarea
                    value={code}
                    onChange={e => setCode(e.target.value)}
                    disabled={phase === "success"}
                    style={{
                      width: "100%", minHeight: "120px", padding: "16px",
                      background: "transparent", border: "none",
                      color: "#a8e6a0", fontSize: "0.95rem", lineHeight: "1.75",
                      fontFamily: "'Courier New', monospace",
                      boxSizing: "border-box", caretColor: "#4ade80",
                      animation: shake ? "shake 0.4s ease" : "none",
                    }}
                    spellCheck={false}
                  />

                  {/* Output */}
                  {output && (
                    <div style={{
                      padding: "11px 16px", borderTop: "1px solid rgba(255,255,255,0.06)",
                      background: "rgba(0,0,0,0.4)", fontFamily: "monospace", fontSize: "0.84rem",
                      color: output.startsWith("✗") ? "#f08080" : "#4ade80",
                      animation: "fadeIn 0.3s ease",
                    }}>
                      {output.split("\n").map((line, i) => <div key={i}>{line}</div>)}
                    </div>
                  )}

                  {/* Buttons */}
                  <div style={{
                    padding: "11px 16px", borderTop: "1px solid rgba(255,255,255,0.06)",
                    display: "flex", gap: "10px", flexWrap: "wrap",
                  }}>
                    {phase === "challenge" && (<>
                      <button onClick={handleRun} className="run-btn" style={{
                        padding: "9px 22px", background: "#1a5c2a",
                        border: "1px solid rgba(74,222,128,0.4)", borderRadius: "8px",
                        color: "#4ade80", fontSize: "0.88rem", cursor: "pointer",
                        fontFamily: "Georgia, serif", transition: "all 0.2s",
                      }}>▶ Run Code</button>
                      <button onClick={() => setShowHint(!showHint)} className="hint-btn" style={{
                        padding: "9px 18px", background: "transparent",
                        border: "1px solid rgba(245,200,66,0.3)", borderRadius: "8px",
                        color: "#c8a030", fontSize: "0.88rem", cursor: "pointer",
                        fontFamily: "Georgia, serif", transition: "all 0.2s",
                      }}>{showHint ? "✕ Hide Hint" : "💡 Hint"}</button>
                    </>)}
                    {phase === "success" && (
                      <button onClick={handleNext} className="next-btn" style={{
                        padding: "9px 24px",
                        background: "linear-gradient(135deg, #2a1a6a, #3d28a8)",
                        border: "1px solid rgba(150,120,255,0.4)", borderRadius: "8px",
                        color: "#c8b0ff", fontSize: "0.88rem", cursor: "pointer",
                        fontFamily: "Georgia, serif", transition: "all 0.2s",
                      }}>
                        {chapter + 1 < STORY_CHAPTERS.length ? "→ Continue Quest" : "🏰 Enter the Kingdom"}
                      </button>
                    )}
                  </div>
                </div>

                {/* Hint */}
                {showHint && (
                  <div style={{
                    marginTop: "12px", padding: "14px 18px",
                    background: "rgba(30,20,5,0.92)", border: "1px solid rgba(245,200,66,0.28)",
                    borderRadius: "12px", animation: "fadeIn 0.3s ease",
                  }}>
                    <div style={{ fontSize: "0.72rem", color: "#7a6020", marginBottom: "6px", letterSpacing: "2px" }}>SCROLL OF HINTS</div>
                    <code style={{ color: "#e8c060", fontFamily: "monospace", fontSize: "0.9rem", whiteSpace: "pre" }}>{current.hint}</code>
                  </div>
                )}

                {/* Victory story */}
                {phase === "success" && (
                  <div style={{
                    marginTop: "12px", padding: "16px 20px",
                    background: "rgba(5,28,10,0.92)", border: "1px solid rgba(74,222,128,0.28)",
                    borderRadius: "12px", animation: "fadeIn 0.5s ease",
                  }}>
                    <div style={{ fontSize: "0.7rem", color: "#2a6030", marginBottom: "8px", letterSpacing: "2px" }}>⚔ VICTORY</div>
                    <p style={{ margin: 0, color: "#7aea8a", lineHeight: "1.75", fontSize: "0.93rem" }}>
                      {current.successStory}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        <div style={{ textAlign: "center", marginTop: "28px", fontSize: "0.65rem", color: "#2a2018", letterSpacing: "2px" }}>
          CODEQUEST · LEVEL 1 · CHAPTER {chapter + 1} OF {STORY_CHAPTERS.length}
        </div>
      </div>
    </div>
  );
}

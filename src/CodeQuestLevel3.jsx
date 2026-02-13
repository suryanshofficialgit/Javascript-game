import { useState, useEffect } from "react";

const LEVEL3_CHAPTERS = [
  {
    id: 1,
    title: "The Destructuring Vault",
    scene: "The Final Sanctum's entrance is sealed by a vault that only opens when you unpack its contents precisely...",
    narrative: `The Ancient Keeper speaks:
"In the old ways, you accessed objects like this: hero.name, hero.level — one by one.
The advanced way is DESTRUCTURING — unpacking multiple values in one elegant line.
You have this object: const hero = { name: 'Kael', level: 15, power: 'shadow' }
Use destructuring to extract name AND level in one line.
Then log them both."`,
    task: "Destructure 'name' and 'level' from the hero object in one line, then log both",
    hint: "const hero = { name: 'Kael', level: 15, power: 'shadow' };\nconst { name, level } = hero;\nconsole.log(name, level);",
    concept: "Destructuring",
    conceptDesc: "Destructuring unpacks values from objects/arrays into variables in one line. const { key } = obj or const [a, b] = arr.",
    validate: (code) =>
      /const\s*\{\s*\w+\s*,\s*\w+\s*\}\s*=\s*hero/.test(code) &&
      /console\.log/.test(code),
    expectedOutput: '> "Kael" 15',
    successStory: '"Elegantly done!" the Keeper nods. "Destructuring is everywhere in modern JavaScript — React props, API responses, function parameters. You\'ll use this daily."',
    starterCode: "const hero = { name: 'Kael', level: 15, power: 'shadow' };\n\n// Destructure in ONE line!\nconst { ",
  },
  {
    id: 2,
    title: "The Reducing Forge",
    scene: "A forge of a thousand numbers roars — the Master Smith needs them all combined into one...",
    narrative: `The Master Smith bellows over the fire:
"I need ONE total from ALL these numbers. Not a loop — that's amateur!
The weapon of masters is .reduce() — it processes every item and accumulates a result.
You have: [10, 20, 30, 40]
Use .reduce() to sum all numbers into a single total.
The accumulator starts at 0."`,
    task: "Use .reduce() to sum [10, 20, 30, 40] into a single number and log it",
    hint: "const nums = [10, 20, 30, 40];\nconst total = nums.reduce((acc, n) => acc + n, 0);\nconsole.log(total);",
    concept: "Array .reduce()",
    conceptDesc: ".reduce(callback, initialValue) processes every item in an array, carrying a running 'accumulator' value. Perfect for sums, products, building objects from arrays.",
    validate: (code) =>
      /\.reduce\s*\(/.test(code) &&
      /acc.*\+.*n|n.*\+.*acc/.test(code) &&
      /,\s*0\s*\)/.test(code) &&
      /console\.log/.test(code),
    expectedOutput: "> 100",
    successStory: '"100 — forged perfectly!" the Smith roars. ".reduce() is the most powerful array method — it can do anything .map() or .filter() can, plus much more. Master it."',
    starterCode: "const nums = [10, 20, 30, 40];\n\n// Reduce to a single total!\nconst total = nums.reduce((acc, n) => ",
  },
  {
    id: 3,
    title: "The Closure Crypts",
    scene: "Deep in the crypts, a door opens only for those who understand secrets kept inside functions...",
    narrative: `A whisper from the darkness:
"A CLOSURE is a function that remembers variables from its outer scope — even after the outer function has finished.
Write a function called 'makeCounter' that:
  - Has a variable 'count' starting at 0 inside it
  - RETURNS another function that increments count by 1 and returns the new value
Call makeCounter() to create 'counter'.
Then call counter() twice and log each result."`,
    task: "Write a makeCounter() closure — call it, then call the returned function twice and log results",
    hint: "function makeCounter() {\n  let count = 0;\n  return function() {\n    count++;\n    return count;\n  };\n}\nconst counter = makeCounter();\nconsole.log(counter());\nconsole.log(counter());",
    concept: "Closures",
    conceptDesc: "A closure is a function that 'closes over' variables from its outer scope. The inner function keeps a private reference to those variables — even after the outer function returns.",
    validate: (code) =>
      /function\s+makeCounter/.test(code) &&
      /let\s+count\s*=\s*0/.test(code) &&
      /return\s+function/.test(code) &&
      /count\+\+|count\s*\+=\s*1/.test(code) &&
      /const\s+counter\s*=\s*makeCounter\s*\(\s*\)/.test(code) &&
      /counter\s*\(\s*\)/.test(code),
    expectedOutput: "> 1\n> 2",
    successStory: '"The crypt door slides open!" The voice whispers: "Closures power private state, factory functions, and module patterns. You just built a stateful counter with zero global variables."',
    starterCode: "function makeCounter() {\n  let count = 0;\n  return function() {\n    count++;\n    return count;\n  };\n}\n\nconst counter = makeCounter();\nconsole.log(",
  },
  {
    id: 4,
    title: "The Recursive Labyrinth",
    scene: "An infinite maze where the only exit is a function that calls itself until it finds the way out...",
    narrative: `The Labyrinth Guardian speaks:
"RECURSION is when a function calls ITSELF to solve a smaller version of the same problem.
Write a function called 'factorial' that takes a number n and:
  - Returns 1 if n is 0 (BASE CASE — stops the recursion!)
  - Otherwise returns n multiplied by factorial(n - 1)
Then call factorial(5) and log the result.
(5! = 5×4×3×2×1 = 120)"`,
    task: "Write a recursive factorial(n) function and log factorial(5)",
    hint: "function factorial(n) {\n  if (n === 0) return 1;\n  return n * factorial(n - 1);\n}\nconsole.log(factorial(5));",
    concept: "Recursion",
    conceptDesc: "Recursion = a function calling itself. Every recursive function needs a BASE CASE (stop condition) to prevent infinite loops. Perfect for trees, mazes, and nested structures.",
    validate: (code) =>
      /function\s+factorial\s*\(\s*\w+\s*\)/.test(code) &&
      /if\s*\(.*===?\s*0|n\s*===?\s*0.*return\s+1/.test(code) &&
      /return\s+n\s*\*\s*factorial\s*\(/.test(code) &&
      /console\.log\s*\(\s*factorial\s*\(\s*5\s*\)/.test(code),
    expectedOutput: "> 120",
    successStory: '"120 — the labyrinth collapses!" the Guardian roars. "Recursion is how you navigate file trees, parse nested JSON, implement search algorithms. The base case is everything."',
    starterCode: "function factorial(n) {\n  // Base case — stop here!\n  if (n === 0) return 1;\n  // Recursive case\n  return n * factorial(",
  },
  {
    id: 5,
    title: "The Promised Portal",
    scene: "A shimmering portal that takes time to stabilise — you must wait for it without freezing the realm...",
    narrative: `The Portal Mage explains:
"Some operations take TIME — fetching data, reading files. We can't freeze everything to wait.
A PROMISE represents a value that will exist in the future.
Write a function called 'openPortal' that returns a new Promise.
Inside, use setTimeout to resolve with 'Portal ready!' after 0ms delay.
Chain .then() on the call to log the result."`,
    task: "Write openPortal() returning a Promise that resolves with 'Portal ready!', chain .then() to log it",
    hint: "function openPortal() {\n  return new Promise((resolve) => {\n    setTimeout(() => resolve('Portal ready!'), 0);\n  });\n}\nopenPortal().then(msg => console.log(msg));",
    concept: "Promises",
    conceptDesc: "A Promise is an object representing a future value. Use .then() to handle success, .catch() for errors. The foundation of all async JavaScript.",
    validate: (code) =>
      /function\s+openPortal/.test(code) &&
      /new\s+Promise/.test(code) &&
      /resolve\s*\(\s*['"`]Portal ready/.test(code) &&
      /\.then\s*\(/.test(code) &&
      /console\.log/.test(code),
    expectedOutput: '> "Portal ready!"',
    successStory: '"The portal blazes open!" the Mage gasps. "Promises are the backbone of JavaScript\'s async model. Every fetch() call, every database query — Promises all the way down."',
    starterCode: "function openPortal() {\n  return new Promise((resolve) => {\n    setTimeout(() => resolve('Portal ready!'), 0);\n  });\n}\n\nopenPortal().then(msg => console.log(",
  },
  {
    id: 6,
    title: "The Citadel of Classes",
    scene: "The Citadel's architects built everything from blueprints — reusable templates that create countless objects...",
    narrative: `The Chief Architect addresses you:
"A CLASS is a blueprint for creating objects. With it, you can stamp out as many objects as you need.
Create a class called 'Warrior' with:
  - A constructor that takes 'name' and 'hp' and stores them as this.name and this.hp
  - A method called 'status()' that returns the string: '[name] has [hp] HP'
Create one Warrior instance and call .status(), logging the result."`,
    task: "Write a Warrior class with constructor(name, hp) and status() method — instantiate and log .status()",
    hint: "class Warrior {\n  constructor(name, hp) {\n    this.name = name;\n    this.hp = hp;\n  }\n  status() {\n    return `${this.name} has ${this.hp} HP`;\n  }\n}\nconst w = new Warrior('Kael', 200);\nconsole.log(w.status());",
    concept: "Classes",
    conceptDesc: "Classes are blueprints for objects. The constructor runs when you call 'new ClassName()'. Methods are shared across all instances automatically.",
    validate: (code) =>
      /class\s+Warrior/.test(code) &&
      /constructor\s*\(\s*\w+\s*,\s*\w+\s*\)/.test(code) &&
      /this\.\w+\s*=/.test(code) &&
      /status\s*\(\s*\)/.test(code) &&
      /new\s+Warrior\s*\(/.test(code) &&
      /console\.log/.test(code),
    expectedOutput: '> "Kael has 200 HP"',
    successStory: '"The Citadel stands strong!" the Architect cheers. "Classes are the foundation of Object-Oriented Programming. Every React component you\'ll ever write is built on this exact pattern."',
    starterCode: "class Warrior {\n  constructor(name, hp) {\n    this.name = name;\n    this.hp = hp;\n  }\n  status() {\n    return `${this.name} has ${this.hp} HP`;\n  }\n}\n\nconst w = new Warrior('Kael', 200);\nconsole.log(",
  },
  {
    id: 7,
    title: "The Error Abyss",
    scene: "The Abyss is where programs crash and die — unless you know how to catch what falls...",
    narrative: `The Abyss Warden warns:
"Real programs FAIL. Servers go down. Users enter bad data. Networks break.
A TRY...CATCH block lets you handle errors gracefully instead of crashing.
Write a function called 'riskySpell' that:
  - Throws an Error with message 'Spell backfired!' inside
Wrap the call in a try...catch.
In the catch block, log: 'Caught: ' + the error's message."`,
    task: "Write riskySpell() that throws an Error, wrap in try...catch and log 'Caught: [message]'",
    hint: "function riskySpell() {\n  throw new Error('Spell backfired!');\n}\ntry {\n  riskySpell();\n} catch (e) {\n  console.log('Caught: ' + e.message);\n}",
    concept: "try...catch & Error Handling",
    conceptDesc: "try{} runs code. If it throws, catch(e){} catches it — giving you the error object. Always handle errors in production code or your app will crash on the user.",
    validate: (code) =>
      /function\s+riskySpell/.test(code) &&
      /throw\s+new\s+Error/.test(code) &&
      /try\s*\{/.test(code) &&
      /catch\s*\(\s*\w+\s*\)/.test(code) &&
      /console\.log\s*\(.*e\.message|console\.log\s*\(.*err\.message/.test(code),
    expectedOutput: '> "Caught: Spell backfired!"',
    successStory: '"You caught it before it hit the ground!" the Warden exhales. "Error handling separates hobby code from production code. Real apps never let errors reach the user uncaught."',
    starterCode: "function riskySpell() {\n  throw new Error('Spell backfired!');\n}\n\ntry {\n  riskySpell();\n} catch (e) {\n  console.log('Caught: ' + ",
  },
  {
    id: 8,
    title: "The Final Boss: The Grand Codex",
    scene: "⚔ THE FINAL CHALLENGE ⚔ — The Grand Codex demands everything you have learned. No hints. No mercy.",
    narrative: `The Grand Codex glows with terrible power:
"YOU HAVE COME FAR, CODER. Now prove you are a MASTER.
Combine your skills in one challenge:
  1. Create a class 'Hero' with constructor(name, scores) — scores is an ARRAY of numbers
  2. Add a method 'average()' that uses .reduce() to return the average score
  3. Add a method 'report()' that returns a template literal: '[name]: avg [average]'
  4. Create a Hero with scores [80, 90, 100, 70]
  5. Log hero.report()
This is the final test. Classes + Arrays + .reduce() + Template Literals — all at once."`,
    task: "Build a Hero class with average() using .reduce() and report() using template literal — log hero.report()",
    hint: "class Hero {\n  constructor(name, scores) {\n    this.name = name;\n    this.scores = scores;\n  }\n  average() {\n    return this.scores.reduce((a, b) => a + b, 0) / this.scores.length;\n  }\n  report() {\n    return `${this.name}: avg ${this.average()}`;\n  }\n}\nconst hero = new Hero('Aria', [80, 90, 100, 70]);\nconsole.log(hero.report());",
    concept: "Grand Finale: Classes + reduce() + Template Literals",
    conceptDesc: "This combines everything: OOP classes, array methods, and template literals — the exact patterns used in real-world JavaScript applications every single day.",
    validate: (code) =>
      /class\s+Hero/.test(code) &&
      /constructor\s*\(\s*\w+\s*,\s*\w+\s*\)/.test(code) &&
      /\.reduce\s*\(/.test(code) &&
      /average\s*\(\s*\)/.test(code) &&
      /report\s*\(\s*\)/.test(code) &&
      /`.*\$\{.*\}.*`/.test(code) &&
      /new\s+Hero\s*\(/.test(code) &&
      /console\.log/.test(code),
    expectedOutput: '> "Aria: avg 85"',
    successStory: "🌋 THE GRAND CODEX SHATTERS. The ground shakes. A blinding light fills the chamber. \"YOU ARE A MASTER CODER,\" it thunders. \"You have learned what took others years in a single quest. The realm of code bows before you.\"",
    starterCode: "// THE FINAL CHALLENGE — YOU CAN DO THIS!\nclass Hero {\n  constructor(name, scores) {\n    this.name = name;\n    this.scores = scores;\n  }\n  average() {\n    return this.scores.reduce((a, b) => ",
    isBoss: true,
  },
];

const CONCEPT_TRAIL = ["Destructuring", ".reduce()", "Closures", "Recursion", "Promises", "Classes", "try...catch", "⚔ Final Boss"];

export default function CodeQuestLevel3({ onRestart }) {
  const [chapter, setChapter] = useState(0);
  const [code, setCode] = useState(LEVEL3_CHAPTERS[0].starterCode);
  const [phase, setPhase] = useState("story");
  const [showHint, setShowHint] = useState(false);
  const [output, setOutput] = useState("");
  const [shake, setShake] = useState(false);
  const [particles, setParticles] = useState([]);
  const [typedText, setTypedText] = useState("");
  const [bossMode, setBossMode] = useState(false);
  const current = LEVEL3_CHAPTERS[chapter];

  useEffect(() => {
    setBossMode(!!current.isBoss);
    setTypedText("");
    let i = 0;
    const text = current.narrative;
    const interval = setInterval(() => {
      setTypedText(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 15);
    return () => clearInterval(interval);
  }, [chapter]);

  const handleRun = () => {
    if (current.validate(code)) {
      setOutput(current.expectedOutput);
      setTimeout(() => {
        const emojis = current.isBoss
          ? ["🔥","💥","⚡","🌋","👑","✨","🏆","💎"]
          : ["🔥","💀","⚡","🌑","✦"];
        const pts = Array.from({ length: current.isBoss ? 30 : 20 }, (_, i) => ({
          id: i, x: Math.random() * 100, delay: Math.random() * 0.8,
          emoji: emojis[i % emojis.length],
        }));
        setParticles(pts);
        setTimeout(() => setParticles([]), current.isBoss ? 3000 : 2000);
        setPhase("success");
      }, 400);
    } else {
      setOutput("✗ Not there yet. This is the final stage — think carefully!");
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  const handleNext = () => {
    if (chapter + 1 < LEVEL3_CHAPTERS.length) {
      const next = chapter + 1;
      setChapter(next);
      setCode(LEVEL3_CHAPTERS[next].starterCode);
      setPhase("story");
      setShowHint(false);
      setOutput("");
    } else {
      setPhase("complete");
    }
  };

  const progressPct = (chapter / LEVEL3_CHAPTERS.length) * 100;

  // ── colours driven by boss mode ──
  const accent     = bossMode ? "#ff4422" : "#e05020";
  const accentDim  = bossMode ? "rgba(255,60,30,0.18)" : "rgba(200,70,20,0.14)";
  const accentBdr  = bossMode ? "rgba(255,80,40,0.5)"  : "rgba(200,80,30,0.3)";
  const trailColor = bossMode ? "#ff4422" : "#e07030";

  return (
    <div style={{
      minHeight: "100vh",
      background: bossMode
        ? "linear-gradient(160deg, #1a0000 0%, #2d0800 50%, #0a0000 100%)"
        : "linear-gradient(160deg, #0e0600 0%, #1e0c00 55%, #100400 100%)",
      fontFamily: "'Courier New', 'Lucida Console', monospace",
      color: "#d8b090",
      position: "relative",
      overflow: "hidden",
      transition: "background 1s ease",
    }}>
      <style>{`
        @keyframes ember { 0%{transform:translateY(0) rotate(0);opacity:0.6} 100%{transform:translateY(-120px) rotate(360deg);opacity:0} }
        @keyframes glow3 { 0%,100%{box-shadow:0 0 16px rgba(200,80,20,0.2)}50%{box-shadow:0 0 40px rgba(200,80,20,0.55)} }
        @keyframes bossGlow { 0%,100%{box-shadow:0 0 25px rgba(255,50,20,0.35)}50%{box-shadow:0 0 70px rgba(255,50,20,0.8), 0 0 120px rgba(255,100,20,0.3)} }
        @keyframes fadeIn3 { from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)} }
        @keyframes flyUp4 { 0%{transform:translateY(0) scale(1);opacity:1}100%{transform:translateY(-300px) scale(0.3);opacity:0} }
        @keyframes shake3 { 0%,100%{transform:translateX(0)}25%{transform:translateX(-9px)}75%{transform:translateX(9px)} }
        @keyframes flicker { 0%,100%{opacity:1}45%{opacity:0.9}50%{opacity:0.6}55%{opacity:0.95} }
        @keyframes bossText { 0%,100%{text-shadow:0 0 20px rgba(255,60,20,0.6)}50%{text-shadow:0 0 60px rgba(255,80,20,1),0 0 100px rgba(255,40,0,0.5)} }
        @keyframes crownSpin { 0%{transform:rotate(-5deg) scale(1)}50%{transform:rotate(5deg) scale(1.1)}100%{transform:rotate(-5deg) scale(1)} }
        @keyframes masterPulse { 0%,100%{box-shadow:0 0 30px rgba(255,200,50,0.3)}50%{box-shadow:0 0 80px rgba(255,200,50,0.8),0 0 120px rgba(255,100,20,0.4)} }
        textarea:focus { outline:none; }
        .run3:hover { background:#5a1a0a!important; transform:scale(1.03); }
        .hint3:hover { background:rgba(200,120,40,0.15)!important; }
        .cont3:hover { background:#3a0808!important; }
        .restart3:hover { opacity:0.6; }
      `}</style>

      {/* Ember particles background */}
      {Array.from({ length: 14 }).map((_, i) => (
        <div key={i} style={{
          position: "fixed",
          width: `${2 + (i % 3)}px`, height: `${2 + (i % 3)}px`,
          borderRadius: "50%",
          background: i % 3 === 0 ? "#ff6030" : i % 3 === 1 ? "#ff9020" : "#ffb040",
          bottom: "0",
          left: `${(i * 7.1) % 100}%`,
          animation: `ember ${3 + (i % 5)}s ease-out infinite`,
          animationDelay: `${(i * 0.6) % 4}s`,
          pointerEvents: "none", zIndex: 0, opacity: 0,
        }} />
      ))}

      {/* Lava glow layers */}
      <div style={{
        position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
        background: `
          radial-gradient(ellipse at 50% 100%, rgba(200,50,0,0.12) 0%, transparent 60%),
          radial-gradient(ellipse at 20% 80%, rgba(180,40,0,0.08) 0%, transparent 40%),
          radial-gradient(ellipse at 80% 90%, rgba(180,60,0,0.08) 0%, transparent 40%)
        `,
      }} />

      {/* Victory particles */}
      {particles.map(p => (
        <div key={p.id} style={{
          position: "fixed", left: `${p.x}%`, top: "45%", zIndex: 100,
          fontSize: current.isBoss ? "1.8rem" : "1.4rem",
          animation: `flyUp4 ${current.isBoss ? "2.5s" : "2s"} ease-out forwards`,
          animationDelay: `${p.delay}s`, pointerEvents: "none",
        }}>{p.emoji}</div>
      ))}

      <div style={{ position: "relative", zIndex: 1, maxWidth: "900px", margin: "0 auto", padding: "20px 16px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <div style={{
            fontSize: "0.62rem", letterSpacing: "6px",
            color: bossMode ? "rgba(255,80,30,0.6)" : "rgba(180,60,20,0.5)",
            textTransform: "uppercase", marginBottom: "8px",
            animation: bossMode ? "flicker 2s ease-in-out infinite" : "none",
          }}>
            {bossMode ? "⚔ ☠ FINAL BOSS ☠ ⚔" : "🌋 Level 3 · The Final Stage 🌋"}
          </div>
          <h1 style={{
            margin: 0, fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: "bold",
            letterSpacing: "3px",
            color: bossMode ? "#ff4422" : "#e06020",
            animation: bossMode ? "bossText 1.5s ease-in-out infinite" : "flicker 4s ease-in-out infinite",
          }}>CodeQuest</h1>
          <div style={{ fontSize: "0.75rem", color: "rgba(150,60,20,0.6)", marginTop: "4px", letterSpacing: "2px" }}>
            Advanced · Closures · Classes · Recursion · Promises
          </div>
        </div>

        {/* Progress trail */}
        <div style={{ marginBottom: "24px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
            {CONCEPT_TRAIL.map((c, i) => (
              <div key={c} style={{
                fontSize: "0.54rem", letterSpacing: "0.2px", textTransform: "uppercase",
                color: i < chapter ? "#e06030" : i === chapter ? "#ffb040" : "#1a0800",
                textAlign: "center", flex: 1, transition: "color 0.5s",
                fontWeight: i === 7 ? "bold" : "normal",
              }}>
                {i < chapter ? "✓ " : i === chapter ? "▶ " : ""}{c}
              </div>
            ))}
          </div>
          <div style={{ height: "3px", background: "rgba(255,255,255,0.04)", borderRadius: "2px", overflow: "hidden" }}>
            <div style={{
              height: "100%", width: `${progressPct}%`,
              background: bossMode
                ? "linear-gradient(90deg, #e06020, #ff4422, #ffaa00)"
                : "linear-gradient(90deg, #e06020, #ffaa00)",
              transition: "width 0.8s ease",
              boxShadow: `0 0 12px ${bossMode ? "rgba(255,60,20,0.8)" : "rgba(220,90,20,0.6)"}`,
            }} />
          </div>
        </div>

        {/* ── COMPLETE SCREEN ── */}
        {phase === "complete" ? (
          <div style={{ textAlign: "center", animation: "fadeIn3 0.7s ease", padding: "30px 20px" }}>
            <div style={{ fontSize: "4rem", marginBottom: "16px", animation: "crownSpin 3s ease-in-out infinite" }}>👑</div>
            <h2 style={{
              fontSize: "2.2rem", marginBottom: "8px",
              color: "#ffaa30",
              animation: "bossText 2s ease-in-out infinite",
            }}>MASTER CODER</h2>
            <div style={{ fontSize: "0.7rem", letterSpacing: "5px", color: "rgba(200,100,30,0.5)", marginBottom: "20px", textTransform: "uppercase" }}>
              All Three Levels Conquered
            </div>

            <p style={{
              color: "rgba(180,100,40,0.7)", maxWidth: "500px",
              margin: "0 auto 24px", lineHeight: "1.85", fontSize: "0.93rem",
            }}>
              From a flickering lantern in the Digital Forest to shattering the Grand Codex itself —
              you have learned{" "}
              <span style={{ color: "#ffaa30" }}>
                Output, Variables, Conditionals, Loops, Functions, Arrays, Objects, String Methods,
                Destructuring, .reduce(), Closures, Recursion, Promises, Classes, and Error Handling.
              </span>{" "}
              That is the full stack of modern JavaScript fundamentals.
            </p>

            {/* All badges */}
            <div style={{ display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap", marginBottom: "32px" }}>
              {[
                "📤 Output","📦 Variables","🔀 Conditionals","🔁 Loops","🪄 Functions",
                "📋 Arrays","🧩 Objects","🔡 Strings",
                "⚡ Destructuring","🔢 .reduce()","🔒 Closures","♾️ Recursion","⏳ Promises","🏛 Classes","🛡 try/catch",
                "👑 Final Boss",
              ].map(b => (
                <div key={b} style={{
                  padding: "5px 12px",
                  background: b === "👑 Final Boss"
                    ? "rgba(255,180,40,0.15)"
                    : "rgba(200,80,20,0.08)",
                  border: `1px solid ${b === "👑 Final Boss" ? "rgba(255,180,40,0.4)" : "rgba(200,80,20,0.2)"}`,
                  borderRadius: "20px", fontSize: "0.68rem",
                  color: b === "👑 Final Boss" ? "#ffb030" : "rgba(180,80,20,0.8)",
                }}>{b}</div>
              ))}
            </div>

            {/* What's next */}
            <div style={{
              maxWidth: "420px", margin: "0 auto 28px", padding: "16px 20px",
              background: "rgba(30,8,0,0.7)", border: "1px solid rgba(200,80,20,0.2)",
              borderRadius: "12px", fontSize: "0.84rem", color: "rgba(160,70,20,0.7)", lineHeight: "1.8",
              animation: "masterPulse 3s ease-in-out infinite",
            }}>
              🚀 <strong style={{ color: "rgba(220,120,30,0.9)" }}>Your next chapter:</strong> Build real projects.
              Try <span style={{ color: "#e08030" }}>React, Node.js, or TypeScript</span> — everything you learned here
              directly powers all three.
            </div>

            <button onClick={onRestart} className="restart3" style={{
              padding: "11px 28px", background: "transparent",
              border: "1px solid rgba(200,80,20,0.25)", borderRadius: "10px",
              color: "rgba(150,60,20,0.6)", fontSize: "0.82rem", cursor: "pointer",
              fontFamily: "Courier New, monospace", transition: "opacity 0.2s",
            }}>↺ Restart from Level 1</button>
          </div>
        ) : (
          /* ── GAME PANELS ── */
          <div style={{ display: "grid", gap: "20px" }}>

            {/* Story Panel */}
            <div style={{
              background: bossMode ? "rgba(20,4,0,0.95)" : "rgba(14,4,0,0.92)",
              border: `1px solid ${accentBdr}`,
              borderRadius: "16px", padding: "24px",
              boxShadow: "0 0 40px rgba(0,0,0,0.7)",
              animation: bossMode ? "bossGlow 2s ease-in-out infinite" : "glow3 4s ease-in-out infinite",
            }}>
              {/* Chapter row */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <div style={{
                  width: "40px", height: "40px",
                  borderRadius: current.isBoss ? "4px" : "8px",
                  background: current.isBoss
                    ? "linear-gradient(135deg, #8a1000, #cc2000)"
                    : "linear-gradient(135deg, #5a1800, #903000)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: current.isBoss ? "1.3rem" : "1rem",
                  fontWeight: "bold", color: "#ffccaa", flexShrink: 0,
                  boxShadow: current.isBoss ? "0 0 20px rgba(255,40,0,0.6)" : "0 0 10px rgba(200,60,0,0.4)",
                  animation: current.isBoss ? "bossGlow 1.5s ease-in-out infinite" : "none",
                }}>{current.isBoss ? "⚔" : current.id}</div>
                <div>
                  <div style={{ fontSize: "0.6rem", letterSpacing: "3px", color: "rgba(150,50,10,0.6)", textTransform: "uppercase" }}>
                    {current.isBoss ? "⚔ FINAL BOSS" : `Stage ${current.id} of 8`}
                  </div>
                  <h2 style={{
                    margin: 0, fontSize: "1.15rem",
                    color: current.isBoss ? "#ff6030" : "#e08040",
                    animation: current.isBoss ? "bossText 2s infinite" : "none",
                  }}>{current.title}</h2>
                </div>
                <div style={{
                  marginLeft: "auto", padding: "4px 11px",
                  background: accentDim,
                  border: `1px solid ${accentBdr}`,
                  borderRadius: "10px", fontSize: "0.62rem",
                  color: accent, letterSpacing: "0.5px",
                  maxWidth: "160px", textAlign: "center",
                }}>🔥 {current.concept}</div>
              </div>

              {/* Scene */}
              <div style={{
                fontStyle: "italic",
                color: current.isBoss ? "rgba(255,80,30,0.45)" : "rgba(160,70,20,0.5)",
                fontSize: "0.8rem", marginBottom: "14px", paddingBottom: "14px",
                borderBottom: "1px solid rgba(255,255,255,0.04)",
              }}>
                🌋 {current.scene}
              </div>

              {/* Typewriter */}
              <div style={{
                lineHeight: "1.85", fontSize: "0.91rem", minHeight: "95px",
                whiteSpace: "pre-line",
                color: current.isBoss ? "rgba(255,150,80,0.7)" : "rgba(200,130,70,0.7)",
              }}>
                {typedText}
                <span style={{
                  borderRight: `2px solid ${accent}`,
                  animation: "flicker 0.8s step-end infinite",
                }}> </span>
              </div>

              {/* Concept callout */}
              <div style={{
                marginTop: "16px", padding: "11px 14px",
                background: "rgba(40,10,0,0.5)",
                border: `1px solid rgba(180,60,10,0.18)`,
                borderRadius: "10px", fontSize: "0.78rem",
                color: "rgba(160,80,20,0.7)",
              }}>
                <span style={{ color: "rgba(220,100,20,0.85)", fontWeight: "bold" }}>
                  🔥 {current.concept}:{" "}
                </span>
                {current.conceptDesc}
              </div>

              {phase === "story" && (
                <button
                  onClick={() => { setPhase("challenge"); setOutput(""); }}
                  style={{
                    marginTop: "18px", padding: "12px 30px",
                    background: current.isBoss
                      ? "linear-gradient(135deg, rgba(120,10,0,0.9), rgba(180,20,0,0.9))"
                      : "linear-gradient(135deg, rgba(80,16,0,0.85), rgba(120,30,0,0.9))",
                    border: `1px solid ${accentBdr}`,
                    borderRadius: "10px",
                    color: current.isBoss ? "#ffaaaa" : "#ffccaa",
                    fontSize: current.isBoss ? "1rem" : "0.9rem",
                    cursor: "pointer",
                    fontFamily: "Courier New, monospace",
                    letterSpacing: "2px",
                    transition: "all 0.2s",
                    animation: current.isBoss ? "bossGlow 1.5s infinite" : "none",
                  }}>
                  {current.isBoss ? "⚔ FACE THE FINAL BOSS ⚔" : "🔥 Accept the Challenge"}
                </button>
              )}
            </div>

            {/* Code Editor */}
            {(phase === "challenge" || phase === "success") && (
              <div style={{ animation: "fadeIn3 0.4s ease" }}>
                <div style={{
                  background: "rgba(6,2,0,0.97)",
                  border: `1px solid ${accentBdr}`,
                  borderRadius: "16px", overflow: "hidden",
                  animation: current.isBoss ? "bossGlow 2s infinite" : "none",
                }}>
                  {/* Title bar */}
                  <div style={{
                    background: "rgba(0,0,0,0.7)", padding: "10px 16px",
                    display: "flex", alignItems: "center", gap: "8px",
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                  }}>
                    {["#e05252","#e07830","#e05020"].map(c => (
                      <div key={c} style={{ width: "9px", height: "9px", borderRadius: "50%", background: c }} />
                    ))}
                    <span style={{ marginLeft: "8px", fontSize: "0.7rem", color: "rgba(120,40,10,0.6)", letterSpacing: "1px" }}>
                      {current.isBoss ? "final_boss.js" : "sanctum.js"}
                    </span>
                    <span style={{ marginLeft: "auto", fontSize: "0.66rem", color: "rgba(100,30,10,0.5)" }}>
                      🎯 {current.task}
                    </span>
                  </div>

                  {/* Code area */}
                  <textarea
                    value={code}
                    onChange={e => setCode(e.target.value)}
                    disabled={phase === "success"}
                    style={{
                      width: "100%",
                      minHeight: current.isBoss ? "160px" : "130px",
                      padding: "18px",
                      background: "transparent", border: "none",
                      color: "#e09060", fontSize: "0.92rem", lineHeight: "1.75",
                      fontFamily: "'Courier New', monospace",
                      boxSizing: "border-box",
                      caretColor: accent,
                      animation: shake ? "shake3 0.4s ease" : "none",
                    }}
                    spellCheck={false}
                  />

                  {/* Output */}
                  {output && (
                    <div style={{
                      padding: "11px 16px",
                      borderTop: "1px solid rgba(255,255,255,0.04)",
                      background: "rgba(0,0,0,0.6)",
                      fontFamily: "monospace", fontSize: "0.83rem",
                      color: output.startsWith("✗") ? "#c05040" : "#e08040",
                      animation: "fadeIn3 0.3s ease",
                    }}>
                      {output.split("\n").map((line, i) => <div key={i}>{line}</div>)}
                    </div>
                  )}

                  {/* Buttons */}
                  <div style={{
                    padding: "11px 16px",
                    borderTop: "1px solid rgba(255,255,255,0.04)",
                    display: "flex", gap: "10px", flexWrap: "wrap",
                  }}>
                    {phase === "challenge" && (<>
                      <button onClick={handleRun} className="run3" style={{
                        padding: "9px 22px", background: "rgba(80,20,0,0.7)",
                        border: `1px solid ${accentBdr}`, borderRadius: "8px",
                        color: "#e08040", fontSize: "0.88rem", cursor: "pointer",
                        fontFamily: "Courier New, monospace", transition: "all 0.2s",
                      }}>▶ Run Code</button>
                      {/* No hint on final boss */}
                      {!current.isBoss && (
                        <button onClick={() => setShowHint(!showHint)} className="hint3" style={{
                          padding: "9px 18px", background: "transparent",
                          border: "1px solid rgba(180,120,40,0.28)", borderRadius: "8px",
                          color: "rgba(160,100,20,0.7)", fontSize: "0.88rem", cursor: "pointer",
                          fontFamily: "Courier New, monospace", transition: "all 0.2s",
                        }}>{showHint ? "✕ Hide Hint" : "💡 Hint"}</button>
                      )}
                      {current.isBoss && (
                        <span style={{ fontSize: "0.72rem", color: "rgba(120,40,10,0.5)", alignSelf: "center", letterSpacing: "1px" }}>
                          ☠ No hints on the final boss
                        </span>
                      )}
                    </>)}
                    {phase === "success" && (
                      <button onClick={handleNext} className="cont3" style={{
                        padding: "9px 26px",
                        background: "linear-gradient(135deg, rgba(80,10,0,0.8), rgba(120,20,0,0.9))",
                        border: `1px solid ${accentBdr}`, borderRadius: "8px",
                        color: "#ffccaa", fontSize: "0.88rem", cursor: "pointer",
                        fontFamily: "Courier New, monospace", transition: "all 0.2s",
                        animation: current.isBoss ? "bossGlow 1.5s infinite" : "none",
                      }}>
                        {chapter + 1 < LEVEL3_CHAPTERS.length
                          ? "→ Next Stage"
                          : "👑 Claim Your Crown"}
                      </button>
                    )}
                  </div>
                </div>

                {/* Hint */}
                {showHint && !current.isBoss && (
                  <div style={{
                    marginTop: "12px", padding: "14px 18px",
                    background: "rgba(14,4,0,0.97)",
                    border: "1px solid rgba(180,90,20,0.25)",
                    borderRadius: "12px", animation: "fadeIn3 0.3s ease",
                  }}>
                    <div style={{ fontSize: "0.68rem", color: "rgba(120,50,10,0.6)", marginBottom: "8px", letterSpacing: "2px" }}>
                      SCROLL OF HINTS
                    </div>
                    <code style={{ color: "#c07030", fontFamily: "monospace", fontSize: "0.87rem", whiteSpace: "pre" }}>
                      {current.hint}
                    </code>
                  </div>
                )}

                {/* Victory */}
                {phase === "success" && (
                  <div style={{
                    marginTop: "12px", padding: "18px 20px",
                    background: current.isBoss ? "rgba(30,5,0,0.98)" : "rgba(16,4,0,0.96)",
                    border: `1px solid ${accentBdr}`,
                    borderRadius: "12px", animation: "fadeIn3 0.6s ease",
                  }}>
                    <div style={{
                      fontSize: "0.68rem", color: "rgba(160,50,10,0.6)",
                      marginBottom: "10px", letterSpacing: "3px",
                    }}>
                      {current.isBoss ? "⚔ BOSS DEFEATED ⚔" : "🔥 STAGE CLEARED"}
                    </div>
                    <p style={{
                      margin: 0, lineHeight: "1.8", fontSize: "0.92rem",
                      color: current.isBoss ? "#ffaa60" : "#d07840",
                    }}>
                      {current.successStory}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        <div style={{ textAlign: "center", marginTop: "28px", fontSize: "0.6rem", color: "rgba(80,20,0,0.3)", letterSpacing: "2px" }}>
          CODEQUEST · LEVEL 3 · STAGE {chapter + 1} OF {LEVEL3_CHAPTERS.length}
        </div>
      </div>
    </div>
  );
}

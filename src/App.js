import { useState } from "react";
import CodeQuestLevel1 from "./CodeQuestLevel1";
import CodeQuestLevel2 from "./CodeQuestLevel2";
import CodeQuestLevel3 from "./CodeQuestLevel3";

export default function App() {
  const [level, setLevel] = useState(1);

  if (level === 1) return <CodeQuestLevel1 onNextLevel={() => setLevel(2)} />;
  if (level === 2) return <CodeQuestLevel2 onNextLevel={() => setLevel(3)} onRestart={() => setLevel(1)} />;
  if (level === 3) return <CodeQuestLevel3 onRestart={() => setLevel(1)} />;
}

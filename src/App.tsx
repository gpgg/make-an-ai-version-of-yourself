import { useState } from "react";

import Audio from "./components/Audio";
import Input from "./components/Input";
import MessageContainer from "./components/MessageContainer";
import IdleVideo from "./components/IdleVideo";
import ActiveVideo from "./components/ActiveVideo";

function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <header className="flex-none h-20 w-full">
        <h1 className="text-center text-2xl uppercase font-bold p-4">
          Build an AI version of yourself
        </h1>
      </header>
      <div className="flex-none w-6/12 h-auto flex flex-col items-center">
        {!isActive ? (
          <IdleVideo source="./idle.mp4" />
        ) : (
          <>
            <ActiveVideo source="./active.mp4" setActive={setIsActive} />
            <Audio source="./input_audio.wav" />
          </>
        )}
      </div>

      <article className="grow w-6/12 bg-slate-100 rounded-lg pt-4 mt-6 overflow-auto scrollbar">
        <div className="flex flex-col gap-2 items-center">
          <MessageContainer />
        </div>
      </article>

      <div className="flex-none w-6/12 h-20">
        <Input />
      </div>
      <button
        onClick={(e) => {
          console.log("button");
          setIsActive(true);
        }}
      >
        play
      </button>
    </div>
  );
}

export default App;

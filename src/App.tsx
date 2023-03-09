import { useState } from "react";

import Audio from "./components/Audio";
import Input from "./components/Input";
import MessageContainer, { Message } from "./components/MessageContainer";
import IdleVideo from "./components/IdleVideo";
import ActiveVideo from "./components/ActiveVideo";

function App() {
  const [isActive, setIsActive] = useState(false);
  const [videoSource, setVideoSource] = useState("");
  const [audioSource, setAudioSource] = useState("");
  const [messages, setMessages] = useState<Message[] | undefined>();

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <header className="flex-none h-20 w-full">
        <h1 className="text-center text-2xl uppercase font-bold p-4">
          Make an AI version of yourself
        </h1>
      </header>
      <div className="flex-none md:w-6/12 w-6/12  h-auto flex flex-col items-center">
        {!isActive ? (
          <IdleVideo source="./idle.mp4" />
        ) : (
          <>
            <ActiveVideo source={videoSource} setActive={setIsActive} />
            <Audio source={audioSource} />
          </>
        )}
      </div>

      <article className="grow md:w-5/12 w-6/12 bg-slate-100 rounded-lg mt-6 overflow-auto scrollbar">
        <div className="flex flex-col gap-2 items-center">
          <MessageContainer messages={messages} />
        </div>
      </article>

      <div className="flex-none md:w-5/12 w-6/12 h-20">
        <Input
          setActive={setIsActive}
          setVideoSource={setVideoSource}
          setAudioSource={setAudioSource}
          setMessages={setMessages}
        />
      </div>
    </div>
  );
}

export default App;

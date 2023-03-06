import Input from "./components/Input";
import Messages from "./components/Messages";
import Video from "./components/Video";

function App() {
  return (
    <div className="flex flex-col items-center w-screen h-screen">
      <header className="flex-none h-20 w-full">
        <h1 className="text-center text-2xl uppercase font-bold p-4">
          Build an AI version of yourself
        </h1>
      </header>
      <article className="grow w-2/5">
        <div className="flex flex-col gap-2 items-center">
          <Video />
          <Messages />
        </div>
      </article>
      <div className="flex-none w-2/5 h-20 p-2">
        <Input />
      </div>
    </div>
  );
}

export default App;

import axios from "axios";
import { useState } from "react";

import { Message } from "./MessageContainer";
interface InputProps {
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  setVideoSource: React.Dispatch<React.SetStateAction<string>>;
  setAudioSource: React.Dispatch<React.SetStateAction<string>>;
  setMessages: React.Dispatch<React.SetStateAction<Message[] | undefined>>;
}
const Input = ({
  setActive,
  setVideoSource,
  setAudioSource,
  setMessages,
}: InputProps) => {
  const [textMessage, setTextMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const form = event.target;
    // const formData = new FormData(form);
    // console.log(event);
    // console.log(event.target);
    // console.log(formData);
    // const formJson = Object.fromEntries(formData.entries());
    // console.log(formJson);

    console.log(textMessage);
    setMessages((messages) => {
      if (messages) {
        return [
          ...messages,
          {
            id: messages.length,
            name: "",
            img: "",
            message: textMessage,
            type: 1,
          },
        ];
      } else {
        return [{ id: 0, name: "", img: "", message: textMessage, type: 1 }];
      }
    });

    // send request
    axios({
      method: "post",
      url: "http://localhost:5000/chat",
      data: {
        user_message: textMessage,
      },
    })
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          const data = response.data;
          const botMessage = data.bot_message;
          console.log(botMessage);
          setMessages((messages) => {
            if (messages) {
              return [
                ...messages,
                {
                  id: messages.length,
                  name: "",
                  img: "",
                  message: botMessage,
                  type: 0,
                },
              ];
            } else {
              return [
                { id: 0, name: "", img: "", message: botMessage, type: 0 },
              ];
            }
          });
          setActive(true);
          setVideoSource(data.video_source);
          setAudioSource(data.audio_source);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    // get reponse
    // response contains three parts
    // video url
    // audio url
    // reponse text

    // setActive(true);
    // setVideoSource("");
    // setAudioSource("");

    // clear user input
    setTextMessage("");
  };

  return (
    <form method="post" onSubmit={handleSubmit}>
      <label htmlFor="chat" className="sr-only">
        Your message
      </label>
      <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
        <button
          type="button"
          className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
        >
          <svg
            aria-hidden="true"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Upload image</span>
        </button>
        <button
          type="button"
          className="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
        >
          <svg
            aria-hidden="true"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Add emoji</span>
        </button>
        <textarea
          id="chat"
          name="text-message"
          rows={1}
          className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Your message..."
          value={textMessage}
          onChange={(e) => setTextMessage(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
        >
          <svg
            aria-hidden="true"
            className="w-6 h-6 rotate-90"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
          </svg>
          <span className="sr-only">Send message</span>
        </button>
      </div>
    </form>
  );
};
export default Input;

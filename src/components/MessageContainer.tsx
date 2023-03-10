import BotMessage from "./BotMessage";
import UserMessage from "./UserMessage";

export type Message = {
  id: number;
  name: string;
  img: string;
  message: string;
  type: number; // 0 represents bot; 1 represents user
};

interface MeesageContainerProps {
  messages: Message[] | undefined;
}

const MessageContainer = ({ messages }: MeesageContainerProps) => {
  return (
    <div className="flex-1 py-4 justify-between flex flex-col h-screen w-4/5">
      <div
        id="messages"
        className="flex flex-col space-y-4 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
      >
        {messages &&
          messages.map((message) => {
            return message.type === 0 ? (
              <BotMessage
                key={message.id}
                id={message.id}
                name={message.name}
                img={message.img}
                message={message.message}
              />
            ) : (
              <UserMessage
                key={message.id}
                id={message.id}
                name={message.name}
                img={message.img}
                message={message.message}
              />
            );
          })}

        {/* <div className="chat-message">
          <div className="flex items-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
              <div>
                <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                  Command was run with root privileges. I'm sure about that.
                </span>
              </div>
              <div>
                <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                  I've update the description so it's more obviously now
                </span>
              </div>
              <div>
                <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                  FYI https://askubuntu.com/a/700266/510172
                </span>
              </div>
              <div>
                <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                  Check the line above (it ends with a # so, I'm running it as
                  root )<pre># npm install -g @vue/devtools</pre>
                </span>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
              alt="My profile"
              className="w-6 h-6 rounded-full order-1"
            />
          </div>
        </div>
        <div className="chat-message">
          <div className="flex items-end justify-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
              <div>
                <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                  Any updates on this issue? I'm getting the same error when
                  trying to install devtools. Thanks
                </span>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
              alt="My profile"
              className="w-6 h-6 rounded-full order-2"
            />
          </div>
        </div>
        <div className="chat-message">
          <div className="flex items-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
              <div>
                <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                  Thanks for your message David. I thought I'm alone with this
                  issue. Please, ? the issue to support it :)
                </span>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
              alt="My profile"
              className="w-6 h-6 rounded-full order-1"
            />
          </div>
        </div>
        <div className="chat-message">
          <div className="flex items-end justify-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
              <div>
                <span className="px-4 py-2 rounded-lg inline-block bg-blue-600 text-white ">
                  Are you using sudo?
                </span>
              </div>
              <div>
                <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                  Run this command sudo chown -R `whoami` /Users/ /.npm-global/
                  then install the package globally without using sudo
                </span>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
              alt="My profile"
              className="w-6 h-6 rounded-full order-2"
            />
          </div>
        </div>
        <div className="chat-message">
          <div className="flex items-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
              <div>
                <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                  It seems like you are from Mac OS world. There is no /Users/
                  folder on linux ?
                </span>
              </div>
              <div>
                <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                  I have no issue with any other packages installed with root
                  permission globally.
                </span>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
              alt="My profile"
              className="w-6 h-6 rounded-full order-1"
            />
          </div>
        </div>
        <div className="chat-message">
          <div className="flex items-end justify-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
              <div>
                <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                  yes, I have a mac. I never had issues with root permission as
                  well, but this helped me to solve the problem
                </span>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
              alt="My profile"
              className="w-6 h-6 rounded-full order-2"
            />
          </div>
        </div>
        <div className="chat-message">
          <div className="flex items-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
              <div>
                <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                  I get the same error on Arch Linux (also with sudo)
                </span>
              </div>
              <div>
                <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                  I also have this issue, Here is what I was doing until now:
                  #1076
                </span>
              </div>
              <div>
                <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                  even i am facing
                </span>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
              alt="My profile"
              className="w-6 h-6 rounded-full order-1"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default MessageContainer;

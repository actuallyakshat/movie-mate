const ChatRequest = () => {
  return (
    <div className="w-[40%] h-fit bg-white rounded-lg ml-10 mb-10">
      <h2 className="font-[700] pt-4 pl-4">Chat Requests</h2>
      <div className="w-[90%] mx-auto pt-4 pb-8 px-4 flex flex-col gap-4">
        <div className="flex w-full pr-2 py-2 text-base border-b-2 border-b-gray-300">
          <img
            src="https://i.pinimg.com/564x/f2/d9/2d/f2d92d88ec6c94c995c64c78790d2748.jpg"
            alt="#"
            width={60}
            height={60}
            className="rounded-full aspect-square"
          />
          <div className="ml-4 my-auto leading-5">
            <h3 className="font-bold text-[1.3rem]">Akshat Dubey</h3>
            <p className="text-gray-700 text-[1.1rem] font-[500]">For Jawan</p>
          </div>
          <div className="ml-auto flex gap-2 my-auto">
            <button className="bg-red-400 px-3 rounded-full py-2 h-fit text-[1rem] font-[500]">
              Accept
            </button>
            <button className="bg-green-300 px-3 rounded-full py-2 h-fit text-[1rem] font-[500]">
              Deny
            </button>
          </div>
        </div>
        <div className="flex w-full pr-2 py-2 text-base border-b-2 border-b-gray-300 overflow-hidden">
          <img
            src="https://i.pinimg.com/564x/5e/44/56/5e44569d4f6c6e3ad62340e61da7a577.jpg"
            alt="#"
            width={60}
            height={60}
            className="rounded-full aspect-square"
          />
          <div className="ml-4 my-auto leading-5">
            <h3 className="font-bold text-[1.3rem]">Rishi Naik</h3>
            <p className="text-gray-700 text-[1.1rem] font-[500]">
              For Kedarnath
            </p>
          </div>
          <div className="ml-auto flex gap-2 my-auto">
            <button className="bg-red-400 px-3 rounded-full py-2 h-fit text-[1rem] font-[500]">
              Accept
            </button>
            <button className="bg-green-300 px-3 rounded-full py-2 h-fit text-[1rem] font-[500]">
              Deny
            </button>
          </div>
        </div>
        <div className="flex pr-2 py-4 w-full text-base border-b-2 border-b-gray-300 overflow-hidden">
          <img
            src="https://i.pinimg.com/564x/c5/3b/13/c53b1363b75bb34c56cee9bbfe47426d.jpg"
            alt="#"
            width={60}
            height={60}
            className="rounded-full aspect-square"
          />
          <div className="ml-4 my-auto leading-5">
            <h3 className="font-bold text-[1.3rem]">Aditi Shah</h3>
            <p className="text-gray-700 text-[1.1rem] font-[500]">
              For Interstellar
            </p>
          </div>
          <div className="ml-auto flex gap-2 my-auto">
            <button className="bg-red-400 px-3 rounded-full py-2 h-fit text-[1rem] font-[500]">
              Accept
            </button>
            <button className="bg-green-300 px-3 rounded-full py-2 h-fit text-[1rem] font-[500]">
              Deny
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatRequest;

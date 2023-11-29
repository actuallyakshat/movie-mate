const UpcomingMeets = () => {
  return (
    <div className="w-[40%] h-fit bg-white rounded-lg ml-10 mb-10">
      <h2 className="font-[700] pt-4 pl-4">Upcoming Meets</h2>
      <div className="w-[90%] mx-auto pt-4 pb-8 px-4 flex flex-col gap-4">
        <div className="flex w-full pr-2 py-2 text-base border-b-2 border-b-gray-300">
          <img
            src="https://i.pinimg.com/564x/5f/26/b0/5f26b0de987b29763f3aff21dc606c01.jpg"
            alt="#"
            width={60}
            height={60}
            className="rounded-full aspect-square"
          />
          <div className="ml-4 my-auto leading-5">
            <h3 className="font-bold text-[1.3rem]">Akshat Dubey</h3>
            <p className="forestGreen text-[1.1rem] font-[500]">Oppenheimer</p>
          </div>
          <div className="ml-auto flex flex-col items-center leading-4 justify-center my-auto w-[60px] h-[60px] bg-[#dbdde0]">
            <h1 className="font-bold text-lg">11</h1>
            <p>Dec</p>
          </div>
        </div>
        <div className="flex w-full pr-2 py-2 text-base border-b-2 border-b-gray-300 overflow-hidden">
          <img
            src="https://i.pinimg.com/564x/41/1d/7d/411d7d25b21d9295279fd0bcd6251504.jpg"
            alt="#"
            width={60}
            height={60}
            className="rounded-full aspect-square"
          />
          <div className="ml-4 my-auto leading-5">
            <h3 className="font-bold text-[1.3rem]">Rohit Dixit</h3>
            <p className="forestGreen text-[1.1rem] font-[500]">Oppenheimer</p>
          </div>
          <div className="ml-auto flex flex-col items-center leading-4 justify-center my-auto w-[60px] h-[60px] bg-[#dbdde0]">
            <h1 className="font-bold text-lg">17</h1>
            <p>Dec</p>
          </div>
        </div>
        <div className="flex pr-2 py-4 w-full text-base border-b-2 border-b-gray-300 overflow-hidden">
          <img
            src="https://i.pinimg.com/564x/43/af/9a/43af9ab2cc9103b5fe65a29590db90ff.jpg"
            alt="#"
            width={60}
            height={60}
            className="rounded-full aspect-square"
          />
          <div className="ml-4 my-auto leading-5">
            <h3 className="font-bold text-[1.3rem]">Alakh Sharma</h3>
            <p className="forestGreen text-[1.1rem] font-[500]">Oppenheimer</p>
          </div>
          <div className="ml-auto flex flex-col items-center leading-4 justify-center my-auto w-[60px] h-[60px] bg-[#dbdde0]">
            <h1 className="font-bold text-lg">26</h1>
            <p>Dec</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingMeets;

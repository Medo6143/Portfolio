import { MobileList } from "./MobileList";

export const Header = () => {
  return (
    <header className="bg-[#222222] text-white p-4 flex justify-between items-center  w-[100%]">
      <h1 className="text-shadow m-0 text-2xl font-bold ">Mohamed</h1>
      <ul className="list-none md:flex hidden gap-9">
        <li className="m-0 font-bold cursor-pointer hover:text-[#32D3FF] hover:border-b-2 p-1 delay-100 transition-all ease-in-out border-[#32D3FF]">
          <a href="#home">Home</a>
        </li>
        <li className="m-0 font-bold cursor-pointer hover:text-[#32D3FF] hover:border-b-2 p-1 delay-100 transition-all ease-in-out border-[#32D3FF] ">
          <a href="#about">About</a>
        </li>
        <li className="m-0 font-bold cursor-pointer hover:text-[#32D3FF] hover:border-b-2 p-1 delay-100 transition-all ease-in-out border-[#32D3FF] ">
          <a href="#skills">Skills</a>
        </li>
        <li className="m-0 font-bold cursor-pointer hover:text-[#32D3FF] hover:border-b-2 p-1 delay-100 transition-all ease-in-out border-[#32D3FF] ">
          <a href="#projects">Projects</a>
        </li>
        <li className="m-0 font-bold cursor-pointer text-[#32D3FF] hover:bg-[#32D3FF] hover:text-white  border-b-2 p-2 shadow-inner transition-all border-[#32D3FF] bg-slate-900 rounded-lg shadow-inherit">
          Contact
        </li>
      </ul>

      <MobileList />
    </header>
  );
};

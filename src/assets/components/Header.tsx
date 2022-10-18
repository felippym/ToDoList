import logo from "../logo.svg";

export function Header() {
  return (
    <div className="bg-gray-700 h-48 flex items-center justify-center w-full">
      <div className="flex flex-row justify-center items-center gap-3">
        <img src={logo} alt="logo" />
        <div className="font-black text-4xl">
          <span className="text-blue">to</span>
          <span className="text-purple-dark">do</span>
        </div>
      </div>
    </div>
  );
}

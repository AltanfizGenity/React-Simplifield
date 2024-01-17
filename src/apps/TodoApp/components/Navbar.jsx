import MenuBtn from "./MenuBtn";
import SearchBtn from "./SearchBtn";

function Navbar() {
  return (
    <nav className="fixed w-full p-10 flex justify-between items-center bg-transparent">
      <div className="title font-bold text-xl">Todo List</div>
      <ul className="flex justify-center items-center gap-5">
        <SearchBtn />
        <MenuBtn />
      </ul>
    </nav>
  );
}

export default Navbar;

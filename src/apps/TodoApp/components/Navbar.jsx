import MenuBtn from "./MenuBtn";

function Navbar() {
  return (
    <nav className="fixed w-full p-10 flex justify-between items-center bg-transparent">
      <div className="title font-bold text-xl">Todo List</div>
      <MenuBtn />
    </nav>
  );
}

export default Navbar;

function Navbar() {
  return (
    <nav className="fixed w-full h-[32px] p-8">
      <div className="flex w-full justify-between content-center">
        <div className="title font-bold text-xl">Todo List</div>
        <ul className="nav-btn flex justify-center content-center gap-5">
          <li>
            <button className="icon-btn">menu btn</button>
          </li>
          <li>
            <button className="icon-btn">list btn</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

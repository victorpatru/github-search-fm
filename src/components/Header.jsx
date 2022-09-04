function Header() {
  return (
    <section className="flex flex-col">
      <header className="flex flex-row items-center justify-between">
        <h1 className="dark:text-white">devfinder</h1>
        <div className="flex flex-row space-x-3 cursor-pointer group">
          <h4 className="font-bold text-gray uppercase tracking-[2.5px] dark:text-white">
            Dark
          </h4>
          <img src="src/assets/icon-moon.svg" alt="" />
        </div>
      </header>
    </section>
  );
}
export default Header;

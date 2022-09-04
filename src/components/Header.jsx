function Header() {
  return (
    <section className="flex flex-col">
      <header className="flex flex-row items-center justify-between space-x-44">
        <h1>devfinder</h1>
        <div className="flex flex-row space-x-3 cursor-pointer group">
          <h4 className="font-bold text-gray uppercase">Dark</h4>
          <img src="src/assets/icon-moon.svg" alt="" />
        </div>
      </header>
    </section>
  );
}
export default Header;

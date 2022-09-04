import Header from "./components/Header";
import Search from "./components/Search";
import Card from "./components/Card";

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-lightGrayishBlue text-monospace dark:bg-darkDarkBlue">
      <section className="max-w-4xl mx-20">
        <Header />
        <Search />
        <Card />
      </section>
    </div>
  );
}

export default App;

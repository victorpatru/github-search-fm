function Search({ handleSubmit }) {
  return (
    <section className="relative mt-6">
      <svg
        height="24"
        width="25"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-4 left-3.5"
      >
        <path
          d="M10.609 0c5.85 0 10.608 4.746 10.608 10.58 0 2.609-.952 5-2.527 6.847l5.112 5.087a.87.87 0 01-1.227 1.233l-5.118-5.093a10.58 10.58 0 01-6.848 2.505C4.759 21.16 0 16.413 0 10.58 0 4.747 4.76 0 10.609 0zm0 1.74c-4.891 0-8.87 3.965-8.87 8.84 0 4.874 3.979 8.84 8.87 8.84a8.855 8.855 0 006.213-2.537l.04-.047a.881.881 0 01.058-.053 8.786 8.786 0 002.558-6.203c0-4.875-3.979-8.84-8.87-8.84z"
          fill="#0079ff"
        />
      </svg>
      <form className="group" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search Github username..."
          className="bg-white rounded-xl focus:outline-none pl-12 tablet:pl-16 py-4 font-monospace shadow-lg w-full dark:bg-darkLighterDarkBlue dark:caret-white dark:text-white"
        />
        <p
          className="hidden absolute text-[#F74646] font-bold text-13 tablet:text-[15px] top-4 right-24 tablet:right-32"
          id="error"
        >
          No result
        </p>
        <button className="absolute bg-blue px-5 py-3 text-white rounded-lg right-2 top-1.5 text-13 font-bold tablet:px-8 hover:bg-[#60ABFF] ">
          Search
        </button>
      </form>
    </section>
  );
}
export default Search;

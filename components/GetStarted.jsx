const GetStarted = () => {
  return (
    <section className="paddings innerWidth" id="get-started">
      <div className="flexColCenter gap-6 py-10 px-6 md:px-0 bg-indigo-600 rounded-md border-4 border-indigo-700 text-center w-full">
        <h1 className="text-white text-xl md:text-4xl font-semibold">
          Get started with Homyz
        </h1>
        <p className="text-gray-300 ">
          Subscribe and find super attractive price quotes from us.
          <br />
          Find your residence soon
        </p>

        <button className="btn border-2 border-gray-50 bg-white/20 font-normal">
          Get started
        </button>
      </div>
    </section>
  );
};

export default GetStarted;

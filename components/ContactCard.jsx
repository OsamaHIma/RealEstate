const ContactCard = ({ icon, title, num, btnText }) => {
  return (
    <div className="rounded-md  p-3 m-2 shadow w-full md:w-56 min-h-32 dark:bg-black/10">
      <div className="flexStart my-2">
        <div className="p-2 rounded bg-slate-100 text-dark-blue dark:bg-slate-900">{icon}</div>
        <div className="text px-4">
          <p className="text-black font-semibold dark:text-light-blue">{title}</p>
          <span className="text-light-gray text-sm">{num}</span>
        </div>
      </div>
      <button className="w-[97%] bg-slate-100 dark:bg-slate-900 text-dark-blue rounded-md mx-auto py-2 px-4 font-semibold md:font-bold hover:scale-110 transition-all ease-in">
        {btnText}
      </button>
    </div>
  );
};

export default ContactCard;

export const Contact = () => {
  return (
    <section id="contact" className="mt-[12rem] mb-6 ">
      <div className="container mx-auto text-center">
        <h1
          data-aos="fade-up-left"
          className="hove text-3xl text-white font-bold w-2/3 sm:w-1/4 mx-auto p-3 rounded-full cursor-pointer bg-[#0F172A] border-2 border-b-[#32D3FF]"
        >
          Contact Me
        </h1>
      </div>

      <div className="bg-[#222222] w-full sm:w-[70%] border-gradient mx-auto rounded-3xl mt-16 h-[350px] sm:h-[350px] p-6">
        <form
          action={`mailto:mohamedwael6143@gmail.com?subject=Contact&body=Name: %20&Email: %20&Message: %20`}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Name"
            className="bg-[#333333] p-2 rounded-md w-full"
            name="Name"
          />
          <input
          
            type="email"
            placeholder="Email"
            className="bg-[#333333] p-2 rounded-md w-full"
            name="Email"
          />
          <textarea
            placeholder="Message"
            className="bg-[#333333] p-2 rounded-md w-full h-[100px]"
            name="Message"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-2xl hover:bg-slate-700 border-none cursor-pointer"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

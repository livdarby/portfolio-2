function Contact() {
  return (
    <>
      <section className="bg-[#f9d7df] min-h-screen py-8">
        <h2 className="font-body uppercase tracking-wider text-[#333] font-semibold mb-4 text-center text-xs">
          Liv Darby | Junior Developer
        </h2>
        <div className="mb-4">
          <h1 className="font-title text-[#357ab7] text-7xl sm:text-8xl md:text-9xl lg:text-largest tracking-wide text-center">
            Get in touch
          </h1>
        </div>
        <div>
          <p className="font-body w-[75%] mx-auto">
            Interested in working together, have a question or just looking to
            say hi? Please do get in touch!
          </p>
          <div className="underline my-12 font-body font-medium text-center flex flex-col gap-3">
            <a
              href="https://www.linkedin.com/in/olivia--darby/"
              target="_blank"
              className="cursor-pointer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/livdarby"
              target="_blank"
              className="cursor-pointer"
            >
              GitHub
            </a>
            <a
              href="mailto:oliviadarby@live.co.uk?subject=Portfolio%20questions"
              target="_blank"
              className="cursor-pointer"
            >
              Email
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;

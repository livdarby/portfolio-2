import { SyntheticEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const { VITE_SERVICE_ID, VITE_TEMPLATE_ID, VITE_PUBLIC_KEY } = import.meta
    .env;
  const form: any = useRef();
  const [buttonClicked, setButtonClicked] = useState<true | false>(false);
  const [formData, setFormData] = useState<any>({
    name: "",
    email: "",
    message: "",
  });
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState<
    true | false
  >(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();
    VITE_SERVICE_ID &&
      VITE_TEMPLATE_ID &&
      form.current &&
      emailjs
        .sendForm(VITE_SERVICE_ID, VITE_TEMPLATE_ID, form.current, {
          publicKey: VITE_PUBLIC_KEY,
        })
        .then(
          () => {
            setButtonClicked(false);
            setErrorMessage(
              "Your email has been successfully sent. I'll get back to you as soon as possible!"
            );
          },
          (error) => {
            setErrorMessage("There has been an error, please try again.");
            setButtonClicked(false);
            console.log(error.text)
          }
        );
    setButtonClicked(true);
    setSubmitButtonDisabled(true);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  function handleChange(e: any) {
    setErrorMessage("");
    const formDataCopy = structuredClone(formData);
    // find the e.target.name from the formDataCopy
    formDataCopy[e.target.name] = e.target.value;
    setFormData(formDataCopy);
    formDataCopy.name && formDataCopy.email && formDataCopy.message
      ? setSubmitButtonDisabled(false)
      : setSubmitButtonDisabled(true);
  }

  return (
    <>
      <section className="bg-[#f9d7df] min-h-screen py-8">
        <h2 className="font-body uppercase tracking-wider text-[#333] font-semibold mb-4 text-center text-xs">
          Liv Darby | Junior Developer
        </h2>
        <div className="mb-4">
          <h1 className="font-title text-[#357ab7] text-7xl sm:text-8xl md:text-9xl tracking-wide text-center">
            Get in touch
          </h1>
        </div>
        <div>
          <p className="font-body w-[75%] mx-auto text-center mb-5">
            Interested in working together, have a question or just looking to
            say hi? Please do get in touch!
          </p>
        </div>
        <div className="md:flex md:justify-center">
          <div className="md:w-[65%] lg:w-[600px]">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="font-body bg-[#fcecf1] flex flex-col items-center gap-4 w-[90%] mx-auto rounded py-5 md:h-[400px] md:justify-center"
            >
              <div className="w-max flex gap-5 justify-center">
                <label className="w-[90px] flex justify-end items-center">
                  Name :
                </label>
                <input
                  className="text-sm w-[250px] md:w-[330px]"
                  onChange={handleChange}
                  value={formData.name}
                  type="text"
                  name="name"
                />
              </div>
              <div className="w-max flex gap-5 justify-center">
                <label className="w-[90px] flex justify-end items-center">
                  Email :
                </label>
                <input
                  className="text-sm w-[250px] md:w-[330px]"
                  onChange={handleChange}
                  value={formData.email}
                  type="email"
                  name="email"
                />
              </div>
              <div className="w-max flex gap-5 justify-center">
                <label className="w-[90px] flex justify-end items-center">
                  Message :
                </label>
                <textarea
                  className="text-sm w-[250px] md:w-[330px]"
                  onChange={handleChange}
                  value={formData.message}
                  name="message"
                />
              </div>
              <input
                type="submit"
                value="Send"
                disabled={submitButtonDisabled}
                className={
                  submitButtonDisabled
                    ? `text-white cursor-not-allowed`
                    : `text-black cursor-pointer`
                }
              />
              {buttonClicked && <span className="loader"></span>}
              {errorMessage && (
                <p className="text-center font-body text-sm px-3">
                  {errorMessage}
                </p>
              )}
            </form>
          </div>
          <div className="md:w-[30%] md:flex md:flex-col md:justify-center">
            <p className="text-center font-body mt-5">
              Alternatively, you can reach me on
            </p>
            <div className="underline my-5 font-body font-medium text-center flex flex-col gap-3">
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
        </div>
      </section>
    </>
  );
}

export default Contact;

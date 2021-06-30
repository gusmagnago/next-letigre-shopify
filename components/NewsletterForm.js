import { useState } from "react";
import { decode } from "html-entities";

const NewsletterForm = ({ status, message, onValidated }) => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState(null);

  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
  const handleFormSubmit = () => {
    setError(null);

    if (!email) {
      setError("Please enter a valid email 😇");
      return null;
    }
    const isFormValidated = onValidated({ EMAIL: email });

    return email && email.indexOf("@") > -1 && isFormValidated;
  };

  /**
   * Handle Input Key Event.
   *
   * @param event
   */
  const handleInputKeyEvent = (event) => {
    setError(null);

    if (event.keyCode === 13) {
      event.preventDefault();

      handleFormSubmit();
    }
  };

  /**
   * Extract message from string.
   *
   * @param {String} message
   * @return {null|*}
   */
  const getMessage = (message) => {
    if (!message) {
      return null;
    }
    const result = message?.split("-") ?? null;
    if ("0" !== result?.[0]?.trim()) {
      return decode(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? decode(formattedMessage) : null;
  };

  return (
    <div className="justify-items-center h-60 border-danger flex flex-col items-center justify-around p-6 m-8 border-2 shadow-md">
      <h1 className="font-primary text-lg font-semibold leading-relaxed tracking-widest text-center text-black">
        SIGNUP TO BE PART OF US
      </h1>
      <p className="">... and get those benefits! 🥰</p>
      <input
        onChange={(event) => setEmail(event?.target?.value ?? "")}
        type="email"
        placeholder="Your email"
        className="border-danger w-1/2 p-2 m-2 text-center border-2"
        onKeyUp={(event) => handleInputKeyEvent(event)}
      />
      <button
        className="focus:outline-none bg-palette-lighter h-11 font-primary hover:bg-palette-black hover:text-white w-full pt-2 pb-2 text-lg font-semibold leading-relaxed tracking-widest text-center text-black"
        onClick={handleFormSubmit}
      >
        CONFIRM
      </button>

      {status === "sending" && <div>Sending...</div>}
      {status === "error" || error ? (
        <div
          className="text-palette-dark"
          dangerouslySetInnerHTML={{ __html: error || getMessage(message) }}
        />
      ) : null}
      {status === "success" && status !== "error" && !error && (
        <div dangerouslySetInnerHTML={{ __html: decode(message) }} />
      )}
    </div>
  );
};
export default NewsletterForm;

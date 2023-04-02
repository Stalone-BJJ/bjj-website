import { useState } from "react";

interface ContactFormData {
  firstname: string;
  surname: string;
  phoneNumber: string;
  interestedClass: string;
  email: string;
  additionalInformation: string;
}

export const ContactForm = () => {
  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [interestedClass, setInterestedClass] = useState("");
  const [email, setEmail] = useState("");
  const [additionalInformation, setAdditionalInformation] = useState("");

  const handleFormSubmission = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const formData: ContactFormData = {
      firstname: firstname,
      surname: surname,
      phoneNumber: phoneNumber,
      interestedClass: interestedClass,
      email: email,
      additionalInformation: additionalInformation,
    };

    console.log(formData);

    setSurname("");
    setFirstname("");
    setPhoneNumber("");
    setInterestedClass("");
    setEmail("");
    setAdditionalInformation("");
  };

  return (
    <form onSubmit={(event) => handleFormSubmission(event)}>
      <div className="mb-4">
        <label
          htmlFor="class"
          className="mb-2 block text-sm font-medium text-gray-900 text-black"
        >
          Class
        </label>
        <select
          onChange={(e) => setInterestedClass(e.target.value)}
          id="class"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          required
          defaultValue={interestedClass}
          name="interestedClass"
        >
          <option disabled value={interestedClass}>
            -- Select Option --
          </option>
          <option value="All Level Class">All Levels Class</option>
          <option value="Womans Only Class">Womens Only Class</option>
          <option value="Kids Class">Kids Class</option>
          <option value="Fundamental Class">Fundamental Class</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-gray-900 text-black"
        >
          Name
        </label>
        <input
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          type="text"
          id="name"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="John Doe"
          required
          name="firstName"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="phone"
          className="mb-2 block text-sm font-medium text-gray-900 text-black"
        >
          Phone number
        </label>
        <input
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          type="tel"
          id="phone"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="07123456789"
          required
          name="phoneNumber"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-900 text-black"
        >
          Email address
        </label>
        <input
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="email"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="john.doe@email.com"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="Additional Info"
          className="mb-2 block text-sm font-medium text-gray-900 text-black"
        >
          Additional Information / Questions
        </label>
        <textarea
          name="additionalInfo"
          value={additionalInformation}
          onChange={(e) => setAdditionalInformation(e.target.value)}
          id="addintional-info"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Feel free to provide more information or ask any questions here."
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
      >
        Submit
      </button>
    </form>
  );
};

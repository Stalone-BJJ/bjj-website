import { useForm } from "react-hook-form";
import { useRef } from "react";
import HCAPTCHA from "@hcaptcha/react-hcaptcha";

interface FormValues {
  name: string;
  number: string;
  class: string;
  email: string;
  info: string;
}

export const ContactForm = () => {
  const captchaRef = useRef<HCAPTCHA | null>(null);
  const { register, handleSubmit, watch } = useForm<FormValues>({
    defaultValues: { class: "All Levels Class" },
  });

  const handleFormSubmission = (formData: FormValues) => {
    // eslint-disable-next-line no-console
    console.log(formData);
    // eslint-disable-next-line no-console

    return formData;
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmission)}>
      <div className="mb-4">
        <label
          className="mb-2 block text-sm font-medium text-gray-900 text-black"
          htmlFor="class"
        >
          Class
        </label>
        <select
          {...register("class", { required: true })}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        >
          <option disabled value={watch("class")}>
            -- Select Option --
          </option>
          <option value="All Levels Class">All Levels</option>
          <option value="Fundamentals Class">Fundamentals</option>
          <option value="Kids Class">Kids</option>
          <option value="Womens Only Class">Womens Only</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          className="mb-2 block text-sm font-medium text-gray-900 text-black"
          htmlFor="name"
        >
          Name
        </label>
        <input
          {...register("name", { required: true })}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          id="name"
          placeholder="John Doe"
          type="text"
        />
      </div>
      <div className="mb-4">
        <label
          className="mb-2 block text-sm font-medium text-gray-900 text-black"
          htmlFor="phone"
        >
          Phone number
        </label>
        <input
          {...register("number", { required: true })}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          id="phone"
          placeholder="07123456789"
          type="tel"
        />
      </div>
      <div className="mb-4">
        <label
          className="mb-2 block text-sm font-medium text-gray-900 text-black"
          htmlFor="email"
        >
          Email address
        </label>
        <input
          {...register("email", { required: true })}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          id="email"
          placeholder="john.doe@email.com"
          type="email"
        />
      </div>
      <div className="mb-4">
        <label
          className="mb-2 block text-sm font-medium text-gray-900 text-black"
          htmlFor="info"
        >
          Additional Information / Questions
        </label>
        <textarea
          {...register("info")}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          id="additional-info"
          placeholder="Feel free to provide more information or ask any questions here."
        />
      </div>
      <HCAPTCHA sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY as string} />
      <button
        className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

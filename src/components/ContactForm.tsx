import { useForm } from "react-hook-form";

interface FormValues {
  name: string;
  phoneNumber: string;
  interestedClass: string;
  email: string;
  additionalInfo: string;
}

export const ContactForm = () => {
  const { register, handleSubmit, watch } = useForm<FormValues>();

  const handleFormSubmission = (formData: FormValues) => {
    // eslint-disable-next-line no-console
    console.log(formData);

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
          {...register("interestedClass", { required: true })}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        >
          <option disabled value={watch("interestedClass")}>
            -- Select Option --
          </option>
          <option value="All Level Class">All Levels Class</option>
          <option value="Womens Only Class">Womens Only Class</option>
          <option value="Kids Class">Kids Class</option>
          <option value="Fundamental Class">Fundamental Class</option>
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
          {...register("phoneNumber", { required: true })}
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
          htmlFor="additionalInfo"
        >
          Additional Information / Questions
        </label>
        <textarea
          {...register("additionalInfo", { required: true })}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          id="additional-info"
          placeholder="Feel free to provide more information or ask any questions here."
        />
      </div>
      <button
        className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

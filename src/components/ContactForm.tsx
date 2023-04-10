import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import HCAPTCHA from "@hcaptcha/react-hcaptcha";

interface FormValues {
  name: string;
  number: string;
  class: string;
  email: string;
  info: string;
  captcha: string;
}

interface HCaptchaResponse extends Response {
  success: boolean;
}

export const ContactForm = () => {
  const [hCaptchaToken, setHCaptchaToken] = useState("");
  const hCaptchaRef = useRef<HCAPTCHA | null>(null);
  const {
    register,
    handleSubmit,
    setError,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ defaultValues: { class: "" } });

  const handleFormSubmission = async (formData: FormValues) => {
    try {
      const response = await fetch("/api/validate-token", {
        body: JSON.stringify({ captchaToken: hCaptchaToken }),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });

      const hCaptchaData =
        (await response.json()) as unknown as HCaptchaResponse;

      if (hCaptchaData.success === false || !watch("captcha")) {
        setError("captcha", { message: "Please complete the captcha" });

        return;
      }

      await fetch("/api/send-email", {
        body: JSON.stringify({ ...formData }),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });

      reset();
      hCaptchaRef.current?.resetCaptcha();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
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
        {errors.class && (
          <p className="mt-2 text-red-600">Please select a class</p>
        )}
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
        {errors.name && (
          <p className="mt-2 text-red-600">Please enter your name</p>
        )}
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
        {errors.number && (
          <p className="mt-2 text-red-600">Please enter a contact number</p>
        )}
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
        {errors.email && (
          <p className="mt-2 text-red-600">
            Please enter your contact email address
          </p>
        )}
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
          className="block max-h-16 w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          id="additional-info"
          placeholder="Feel free to provide more information or ask any questions here."
          style={{ resize: "none" }}
        />
      </div>
      <div {...register("captcha")}>
        <HCAPTCHA
          id="h-captcha"
          onVerify={(token) => {
            setHCaptchaToken(token);
            setValue("captcha", token);
          }}
          ref={hCaptchaRef}
          sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY as string}
        />
        {errors.captcha && !hCaptchaToken && (
          <p className="mt-2 text-red-600">{errors.captcha.message}</p>
        )}
      </div>
      <button
        className="mt-4 w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import HCAPTCHA from "@hcaptcha/react-hcaptcha";
import { BlackBelt } from "./BlackBelt";

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
    <form
      className="w-full text-white"
      onSubmit={handleSubmit(handleFormSubmission)}
    >
      <div className="flex w-full flex-col items-center">
        <div className="mb-4 w-[360px]">
          <h3 className="mb-2 text-center text-3xl font-bold italic text-white">
            BOOK YOUR FREE CLASS
          </h3>
          <BlackBelt />
        </div>
      </div>
      <div className="mb-4">
        <label
          className="mb-2 block text-2xl lg:text-sm lg:font-medium"
          htmlFor="class"
        >
          Class
        </label>
        <select
          {...register("class", { required: true })}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-lg text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 lg:text-sm"
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
          <p className="mt-1 text-lg font-bold text-red-600 lg:text-sm lg:font-medium">
            Please select a class
          </p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="mb-2 block text-2xl lg:text-sm lg:font-medium"
          htmlFor="name"
        >
          Name
        </label>
        <input
          {...register("name", { required: true })}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-lg text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 lg:text-sm"
          id="name"
          placeholder="John Doe"
          type="text"
        />
        {errors.name && (
          <p className="mt-1 text-lg font-bold text-red-600 lg:text-sm lg:font-medium">
            Please enter your name
          </p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="mb-2 block text-2xl lg:text-sm lg:font-medium"
          htmlFor="phone"
        >
          Phone number
        </label>
        <input
          {...register("number", { required: true })}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-lg text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 lg:text-sm"
          id="phone"
          placeholder="07123456789"
          type="tel"
        />
        {errors.number && (
          <p className="mt-1 text-lg font-bold text-red-600 lg:text-sm lg:font-medium">
            Please enter a contact number
          </p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="mb-2 block text-2xl lg:text-sm lg:font-medium"
          htmlFor="email"
        >
          Email address
        </label>
        <input
          {...register("email", { required: true })}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-lg text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 lg:text-sm"
          id="email"
          placeholder="john.doe@email.com"
          type="email"
        />
        {errors.email && (
          <p className="mt-1 text-lg font-bold text-red-600 lg:text-sm lg:font-medium">
            Please enter your contact email address
          </p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="mb-2 block text-2xl lg:text-sm lg:font-medium"
          htmlFor="info"
        >
          Additional Information / Questions
        </label>
        <textarea
          {...register("info")}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-lg text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 lg:text-sm"
          id="additional-info"
          placeholder="Feel free to provide more information or ask any questions here."
          style={{ resize: "none" }}
        />
      </div>
      <div {...register("captcha")} className="flex w-full justify-center">
        <HCAPTCHA
          id="h-captcha"
          onVerify={(token) => {
            setHCaptchaToken(token);
            setValue("captcha", token);
          }}
          ref={hCaptchaRef}
          sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY as string}
          size="normal"
        />
        {errors.captcha && !hCaptchaToken && (
          <p className="mt-1 text-lg font-bold text-red-600 lg:text-sm lg:font-medium">
            {errors.captcha.message}
          </p>
        )}
      </div>
      <button
        className="mt-4 w-full rounded-lg bg-blue-800 px-5 py-2.5 text-center text-2xl font-medium text-white hover:bg-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-blue-800 lg:text-sm"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

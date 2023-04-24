import Link from "next/link";
import { BlackBelt } from "~/components/BlackBelt";
import { Footer } from "~/components/Footer";
import { NavBar } from "~/components/Navbar";

const PrivacyPolicy = () => {
  return (
    <>
      <NavBar />
      <div className="text-center">
        <div className="flex w-full justify-center">
          <div className="m-4 w-[380px]">
            <h2 className="mb-2 mt-4 text-5xl font-bold italic lg:mt-0">
              PRIVACY POLICY
            </h2>
            <BlackBelt />
          </div>
        </div>
        <h3 className="text-xl">Last updated 18th April 2023</h3>
      </div>
      <div className="flex w-full justify-center">
        <div className="mt-4 mb-8 max-w-[720px] px-8 lg:px-0">
          <h4 className="font-bold">Privacy Policy:</h4>
          <p>
            Thank you for visiting our website. As a UK business, we take your
            privacy very seriously, and we are committed to protecting your
            personal information in compliance with the EU&apos;s General Data
            Protection Regulation (GDPR). This privacy policy explains how we
            collect, use, and protect your personal information when you use our
            website&apos;s contact form.
          </p>
          <br />
          <h4 className="font-bold">Information Collection:</h4>
          <p>
            When you use our website&apos;s contact form, we may collect
            personal information such as your name, email address, and any other
            information that you provide to us. We will only collect information
            that is necessary to respond to your inquiry.
          </p>
          <br />
          <h4 className="font-bold">Information Use:</h4>
          <p>
            We will only use the personal information that we collect through
            our contact form to respond to your inquiry. We will not use your
            information for any other purpose unless you give us permission to
            do so.
          </p>
          <br />
          <h4 className="font-bold">Information Sharing:</h4>
          <p>
            We do not share your personal information with third parties unless
            it is necessary to respond to your inquiry or as required by law. We
            may use third-party service providers to assist us in responding to
            your inquiry, and these service providers will only process your
            personal information in accordance with our instructions and GDPR
            requirements.
          </p>
          <br />
          <h4 className="font-bold">Security:</h4>
          <p>
            We take reasonable measures to protect your personal information
            from unauthorised access, disclosure, or destruction. We implement
            appropriate technical and organisational measures to ensure a level
            of security appropriate to the risk of processing your personal
            information.
          </p>
          <br />
          <h4 className="font-bold">Data Retention:</h4>
          <p>
            We will retain your personal information for as long as necessary to
            fulfill the purposes outlined in this privacy policy, unless a
            longer retention period is required or permitted by law. We will
            also take steps to ensure that your personal information is accurate
            and up-to-date.
          </p>
          <br />
          <h4 className="font-bold">Children&apos;s Privacy:</h4>
          <p>
            Our website&apos;s contact form is not intended for use by children
            under the age of 16. We do not knowingly collect personal
            information from children under the age of 16. If we become aware
            that we have inadvertently collected personal information from a
            child under the age of 16, we will take steps to delete the
            information as soon as possible.
          </p>
          <br />
          <h4 className="font-bold">Your Rights:</h4>
          <p>
            Under GDPR, you have the right to access, rectify, or erase your
            personal information. You also have the right to restrict or object
            to the processing of your personal information, and the right to
            data portability. If you would like to exercise any of these rights,
            please contact us using the information provided below.
          </p>
          <br />
          <h4 className="font-bold">Changes to this Policy:</h4>
          <p>
            We may update this privacy policy from time to time to reflect
            changes to our information practices or GDPR requirements. We
            encourage you to periodically review this page for the latest
            information on our privacy practices.
          </p>
          <br />
          <h4 className="font-bold">Contact Us:</h4>
          <p>
            If you have any questions or concerns about this privacy policy, or
            if you would like to exercise your rights under GDPR, please contact
            us directly at{" "}
            <Link
              className="underline decoration-red-600 decoration-2 hover:text-gray-400"
              href="mailto:contact@stalonebjj.co.uk?subject=GDPR%20Enquiry"
            >
              contact@stalonebjj.co.uk
            </Link>{" "}
            with the email subject GDPR Enquiry.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;

import { BlackBelt } from "~/components/BlackBelt";
import { Footer } from "~/components/Footer";
import { NavBar } from "~/components/Navbar";

const TermsAndConditions = () => {
  return (
    <>
      <NavBar />
      <div className="text-center">
        <div className="flex w-full justify-center">
          <div className="m-4 w-[540px]">
            <h2 className="mb-2 text-5xl font-bold">Terms and Conditions</h2>
            <BlackBelt />
          </div>
        </div>
        <h3 className="text-xl">Last updated 18th April 2023</h3>
      </div>
      <div className="flex w-full justify-center">
        <div className="mt-4 mb-8 max-w-[720px] px-8 lg:px-0">
          <p>
            These Website Standard Terms and Conditions written on this webpage
            shall manage your use of our website, Stalone Brazilian Jiu Jitsu
            Academy accessible at stalonebjj.co.uk.
          </p>
          <br />
          <p>
            These Terms will be applied fully and affect to your use of this
            Website. By using this Website, you agreed to accept all terms and
            conditions written in here. You must not use this Website if you
            disagree with any of these Website Standard Terms and Conditions.
          </p>
          <br />
          <h4 className="font-bold">Intellectual Property Rights</h4>
          <br />
          <p>
            Other than the content you own, under these Terms, Stalone Brazilian
            Jiu Jitsu Academy and/or its licensors own all the intellectual
            property rights and materials contained in this Website.
          </p>
          <br />
          <p>
            You are granted a limited license only for purposes of viewing the
            material contained on this Website.
          </p>
          <br />
          <h4 className="font-bold">Restrictions</h4>
          <br />
          <p>You are specifically restricted from all of the following:</p>
          <br />
          <ul className="list-disc px-8">
            <li>publishing any Website material in any other media;</li>
            <li>
              selling, sublicensing and/or otherwise commercialising any Website
              material;
            </li>
            <li>publicly performing and/or showing any Website material;</li>
            <li>
              using this Website in any way that is or may be damaging to this
              Website;
            </li>
            <li>
              using this Website in any way that impacts user access to this
              Website;
            </li>
            <li>
              using this Website contrary to applicable laws and regulations, or
              in any way may cause harm to the Website, or to any person or
              business entity;
            </li>
            <li>
              engaging in any data mining, data harvesting, data extracting or
              any other similar activity in relation to this Website;
            </li>
            <li>
              using this Website to engage in any advertising or marketing.
            </li>
          </ul>
          <br />
          <p>
            Certain areas of this Website are restricted from being access by
            you and Stalone Brazilian Jiu Jitsu Academy may further restrict
            access by you to any areas of this Website, at any time, in its sole
            and absolute discretion. Any user ID and password you may have for
            this Website are confidential and you must maintain confidentiality
            as well.
          </p>
          <br />
          <h4 className="font-bold">Your Content</h4>
          <br />
          <p>
            In these Website Standard Terms and Conditions, &quot;Your
            Content&quot; shall mean any audio, video text, images or other
            material you choose to display on this Website. By displaying Your
            Content, you grant Stalone Brazilian Jiu Jitsu Academy a
            non-exclusive, worldwide irrevocable, sub licensable license to use,
            reproduce, adapt, publish, translate and distribute it in any and
            all media.
          </p>
          <br />
          <p>
            Your Content must be your own and must not be invading any
            third-party rights. Stalone Brazilian Jiu Jitsu Academy reserves the
            right to remove any of Your Content from this Website at any time
            without notice.
          </p>
          <br />
          <h4 className="font-bold">No Warranties</h4>
          <br />
          <p>
            This Website is provided &quot;as is,&quot; with all faults, and
            Stalone Brazilian Jiu Jitsu Academy express no representations or
            warranties, of any kind related to this Website or the materials
            contained on this Website. Also, nothing contained on this Website
            shall be interpreted as advising you.
          </p>
          <br />
          <h4 className="font-bold">Limitation of Liability</h4>
          <br />
          <p>
            In no event shall Stalone Brazilian Jiu Jitsu Academy, nor any of
            its officers, directors and employees, shall be held liable for
            anything arising out of or in any way connected with your use of
            this Website whether such liability is under contract. Stalone
            Brazilian Jiu Jitsu Academy, including its officers, directors and
            employees shall not be held liable for any indirect, consequential
            or special liability arising out of or in any way related to your
            use of this Website.
          </p>
          <br />
          <h4 className="font-bold">Indemnification</h4>
          <br />
          <p>
            You hereby indemnify to the fullest extent Stalone Brazilian Jiu
            Jitsu Academy from and against any and/or all liabilities, costs,
            demands, causes of action, damages and expenses arising in any way
            related to your breach of any of the provisions of these Terms.
          </p>
          <br />
          <h4 className="font-bold">Severability</h4>
          <br />
          <p>
            If any provision of these Terms is found to be invalid under any
            applicable law, such provisions shall be deleted without affecting
            the remaining provisions herein.
          </p>
          <br />
          <h4 className="font-bold">Variation of Terms</h4>
          <br />
          <p>
            Stalone Brazilian Jiu Jitsu Academy is permitted to revise these
            Terms at any time as it sees fit, and by using this Website you are
            expected to review these Terms on a regular basis.
          </p>
          <br />
          <h4 className="font-bold">Assignment</h4>
          <br />
          <p>
            The Stalone Brazilian Jiu Jitsu Academy is allowed to assign,
            transfer, and subcontract its rights and/or obligations under these
            Terms without any notification. However, you are not allowed to
            assign, transfer, or subcontract any of your rights and/or
            obligations under these Terms.
          </p>
          <br />
          <h4 className="font-bold">Entire Agreement</h4>
          <br />
          <p>
            These Terms constitute the entire agreement between Stalone
            Brazilian Jiu Jitsu Academy and you in relation to your use of this
            Website, and supersede all prior agreements and understandings.
          </p>
          <br />
          <h4 className="font-bold">Governing Law &amp; Jurisdiction</h4>
          <br />
          <p>
            These Terms will be governed by and interpreted in accordance with
            the UK&apos;s laws, and you submit to the non-exclusive jurisdiction
            of the courts located in the United Kingdom for the resolution of
            any disputes.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;

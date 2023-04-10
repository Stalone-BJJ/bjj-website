import sendgrid from "@sendgrid/mail";
import { type NextApiRequest, type NextApiResponse } from "next";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

interface FormSubmission extends NextApiRequest {
  body: {
    name: string;
    email: string;
    number: string;
    class: string;
    info: string;
  };
}

const sendEmail = async (
  { body: { name, number, email, class: selectedClass, info } }: FormSubmission,
  res: NextApiResponse
) => {
  try {
    await sendgrid.send({
      from: "iainthesupreme@gmail.com",
      html: `
        <h1>Professor Stalone</h1>
        <p>${name} would like to join for the ${selectedClass} trial at your next suitable availability.</p>
        <p>Here is their form information:</p>
        <p>
          Name: ${name}
          <br />
          Email: ${email}
          <br />
          Phone: ${number}
          <br />
          Class: ${selectedClass}
          <br />
          Message: ${info}
        </p>
        <p>You can reply to this email directly to contact them.</p>
      `,
      replyTo: email,
      subject: "Class Trial Request",
      to: "iainthesupreme@gmail.com",
    });

    res.status(200).send({ message: "Email sent", success: true });
  } catch (error) {
    res.status(500).send({ error });
  }
};

export default sendEmail;

import sendgrid from "@sendgrid/mail";
import { type NextApiRequest, type NextApiResponse } from "next";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const [response] = await sendgrid.send({
      from: "iainthesupreme@gmail.com",
      html: `
        <h1>Test email</h1>
        <p>Test email body</p>
        ${req.body as string}
      `,
      subject: "Test email",
      to: "iainthesupreme@gmail.com",
    });

    console.log(response);

    res.status(200).send({ message: "Email sent", success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
};

export default sendEmail;

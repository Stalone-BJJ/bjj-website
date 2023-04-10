/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { type NextApiRequest, type NextApiResponse } from "next/types";
import fetch from "node-fetch";

type HCaptchaResponse = {
  success: boolean;
  challenge_ts: string;
  hostname: string;
  credit: boolean;
};

// This file was quickly spun up to handle the hCaptcha validation
// on the contact form. It's not a part of the trpc API, but it
// could be if we wanted to. It will need refactoring.

const hCaptchaHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const captchaToken = (req.body.captchaToken as string) ?? "";
  const secretKey = (process.env.HCAPTCHA_SECRET_KEY as string) ?? "";

  try {
    const response = await fetch(`https://hcaptcha.com/siteverify`, {
      body: `response=${captchaToken}&secret=${secretKey}`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
      },
      method: "POST",
    });

    const data = (await response.json()) as HCaptchaResponse;

    if (data.success) {
      res.status(200).json({ success: true });
    } else {
      res.status(400).json({ success: false });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

export default hCaptchaHandler;

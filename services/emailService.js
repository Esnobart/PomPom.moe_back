import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';

dotenv.config();

sgMail.setApiKey(process.env.MAIL_API);

const HtmlBody = (token) => `
    <div style="background: black; padding: 16px 0 16px 0;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
            <tr>
                <td align="center">
                    <h1 style="font-family: Arial, sans-serif; color: white; margin: 0 0 10px 0;">
                        Please, verify your email for activate your account
                    </h1>
                    <p style="font-family: Arial, sans-serif; color: white; margin: 0 0 10px 0;">
                        Click on the button for verify
                    </p>
                    <a 
                        href="https://pompom-moe-back.onrender.com/users/verify/${token}" 
                        style="
                            display: inline-block;
                            padding: 10px 20px;
                            color: white;
                            text-decoration: none;
                            font-size: 16px;
                            border: 2px white solid;
                            border-radius: 5px;
                            font-family: Arial, sans-serif;
                        ">
                        Verify
                    </a>
                </td>
            </tr>
        </table>
    </div>
`

async function sendLetter(email, token) {
    const emailConfig = {
        to: email,
        from: 'pompom.verific@gmail.com',
        subject: 'Verify your email',
        html: HtmlBody(token),
    };

    await sgMail.send(emailConfig);
    return true;
};

export { sendLetter }
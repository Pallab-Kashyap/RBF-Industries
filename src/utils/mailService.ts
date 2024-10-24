import { Resend } from 'resend';


export const sendMail = async () => {
const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_KEY);
console.log(process.env.NEXT_PUBLIC_RESEND_KEY);
const res = await resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'pallabkshyp@gmail.com',
  subject: 'Hello World',
  html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
});
console.log(res);
}
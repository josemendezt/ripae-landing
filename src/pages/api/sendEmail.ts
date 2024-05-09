import type { APIRoute } from 'astro';
import { Resend } from 'resend';

// export const POST: APIRoute = async ({ params, request}) => {
//      const resend = new Resend(import.meta.env.RESEND_API_KEY);
//     const body = await request.json()
//     const mailOptions = {
//         from: 'info@info.ripae.ca', // Sender address
//         to: [/*'info@ripae.ca','josemmendezt@gmail.com', 'gustavo.mejiachacon@queensu.ca'*/ 'josemmendezt@gmail.com'],                                         
//         subject: 'Message from ripae.ca',
//         text: `You got a new message from ${body.from_name}:
//                 Phone number: ${body.phone}
//                 Email: ${body.email}
//                 ${body.message}
//             </div>`,                          
//         html: `<div>
//                 <p>You got a new message from <strong>${body.from_name}</strong>:</p>
//                 <p>Phone number: ${body.phone}</p>
//                 <p>Email: ${body.email}</p> <br />
//                 <p>${body.message}</p>
//             </div>`                           
//     };

//     // // Send the email
//     const info = await resend.emails.send(mailOptions);
//     if (info.data) {
//         return new Response(JSON.stringify({
//             message: info.data
//         }),
//         {
//             status: 200,
//             statusText: 'OK'
//         })
//     }
//     return new Response(JSON.stringify({
//         message: info.error
//     }),
//     {
//         status: 500,
//         statusText: 'Error sending the mail'
//     })
// }

    


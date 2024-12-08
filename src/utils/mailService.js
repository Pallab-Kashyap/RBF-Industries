
const sendMail = async (data) => {
  try {
    const res = await fetch('https://email-service-zeta.vercel.app', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body : JSON.stringify(data)
   })
   .then(res => res.json())

   return res;
  } catch {
    return {status: false}
  }

}

export default sendMail

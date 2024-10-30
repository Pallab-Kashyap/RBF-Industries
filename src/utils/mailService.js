
const sendMail = async (data) => {
  try {
    const res = await fetch('http://localhost:3001', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body : JSON.stringify(data)
   })
   .then(res => res.json())

   return res;
  } catch (error) {
    return {status: false}
  }

}

export default sendMail

import { useState, useEffect } from 'react';
import React from 'react'

function admin() {
  const [inputs, setInputs] = useState('')
  const [data, setData] = useState(null)
  const submit = (e) => {
    fetch(`https://khrayhan.me/api/contact?password=${inputs}`)
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(err => console.error(err));
    e ? e.preventDefault() : null;
  }
  const handleChanges = (event) => {
    setInputs(event.target.value)
  }
  const enter = (e) => {
    // document.addEventListener("keypress", function(e) {
    // console.log(e.key);
    if (e.key == "Enter") {
      submit();
    }
    // });
  }

  return (
    <div className='flex items-center justify-center m-10'>
      {data ?
        <div>
          {data.name=='False'?<p className='font-bold mb-8 border-2 p-4 rounded-lg border-black'>Wrong Password</p>:data.reverse().map((e)=>{
           return <div className=' mb-8 border-2 p-4 rounded-lg border-black' key={e._id}><p><span className=' font-bold'>Email:</span> {e.email} <br/> <span className=' font-bold'>Message:</span> {e.message} <br/><span className=' font-bold'>Username:</span> {e.username} <br/><span className=' font-bold'>Phone:</span> {e.phone} <br/></p></div>
          })}
        </div>
        :
        <div className='flex space-x-2 ' onKeyPress={enter}>
          <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="password" name="username"
            value={inputs}
            autoComplete="new-password"
            onChange={handleChanges}
            placeholder="Password" required />
          <button className='bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded' onClick={submit} >Submit</button>
        </div>}
    </div>
  )
}

export default admin
export async function getStaticProps() {
  fetch(`https://khrayhan.me/api/contact`)
    .then(response => response.json())
    .then(datax => {
    })
  
    return {
      props: {  },
    }
}
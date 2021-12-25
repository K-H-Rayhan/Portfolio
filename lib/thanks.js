import Layout from '../components/layout/Layout'
export default function thanks() {
    const inputDesign = " text-lg font-semibold focus:ring-1 focus:ring-green-400 outline-none rounded-md h-12 border-2 border-gray-300 focus:border-green-400 p-2 md:mb-0 mb-3"
    return (
        <Layout title="Rayhan | Contact">
            <div className="h-screen w-full grid grid-rows-5 md:grid-cols-2 mt-16 md:mt-0 items-center justify-center justify-items-center ">
                <div className="md:text-6xl text-4xl font-extrabold flex-wrap text-green-400 mx-5 md:row-start-3">
                    Thank you<hr className="mt-3 w-16 h-2 bg-green-400 rounded-full" />
                </div>
            </div>
        </Layout>
    )
}

import { useEffect, useState } from 'react';
import React from 'react'

function admin() {
  const [inputs, setInputs] = useState('')
  const [check, setCheck] = useState("False");
  const submit = (e) => {
    fetch(`http://localhost:3000/api/admin?password=${inputs}`)
      .then(response => response.json())
      .then(datax => {
        setCheck(datax.name);
        console.log(datax);
      })
      .catch(err => console.error(err));
    e.preventDefault();
  }
  const handleChanges = (event) => {
    setInputs(event.target.value)
  }
  if (check == "False") {
    return (
      <div>
        <input type="password" name="username"
          value={inputs}
          onChange={handleChanges}
          placeholder="Name" required />
        <button onClick={submit}>Hhahaa</button>
        {console.log(check)}
      </div>
    )
  }else{  return (
    <div>
      Nice boy
    </div>
  )}

}

export default admin
export function getStaticProps() {
  fetch(`http://localhost:3000/api/admin`)
    .then(response => response.json())
    .then(datax => {
      console.log(datax);
      setCheck(datax.name)
    })
    .catch(err => console.error(err));
  return {
    props: {
      data: null
    }
  }
}
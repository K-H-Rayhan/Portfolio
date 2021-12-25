import { useState, useRef, useEffect } from 'react';
import React from 'react'

function admin() {
  const enterclicked = useRef();
  const enterclicked2 = useRef();
  const [inputs, setInputs] = useState('')
  const [check, setCheck] = useState(false);
  const submit = (e) => {
    fetch(`http://localhost:3000/api/admin?password=${inputs}`)
      .then(response => response.json())
      .then(data => {
        data.name == "True" ? setCheck(data.name) : null;
      })
      .catch(err => console.error(err));
    e.preventDefault();
  }
  const handleChanges = (event) => {
    setInputs(event.target.value)
  }
  useEffect(()=>{
    document.getElementById("hoga").addEventListener("keypress", function() {
      document.getElementById("hoga").innerHTML = "Hello World";
      console.log(keypress);
    });
  })
  return (
    <div  id="hoga">
      {check ?
        <div>
          Nice
        </div>
        :
        <div>
          <input  type="password" name="username"
            value={inputs}
            onChange={handleChanges}
            placeholder="Name" required />
          <button onClick={submit} ref={enterclicked}>Hhahaa</button>
        </div>}
    </div>
  )
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
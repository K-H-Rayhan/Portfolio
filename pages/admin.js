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
          {data.name=='False'?<p className='font-bold mb-8 border-2 p-4 rounded-lg border-black'>Wrong Password</p>:<div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Role
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((person) => (
                  <tr key={person.email}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{person.name}</div>
                          <div className="text-sm text-gray-500">{person.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{person.title}</div>
                      <div className="text-sm text-gray-500">{person.department}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.role}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Edit
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>}
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
export async function getStaticProps(context) {
  const res = fetch('https://khrayhan.me/api/contact');
  return {
    props: {}, // will be passed to the page component as props
  }
}
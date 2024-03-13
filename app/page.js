"use client"
import { Input } from 'postcss'
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [description, setdescription] = useState("")
  const [maintask, setmaintask] = useState([])
  const submithandler = (e) => {
    e.preventDefault()
    console.log(title)
    console.log(description)
    setmaintask([...maintask, { title, description }])
    console.log(maintask)
    settitle("")
    setdescription("")
  }
  const deleteHandler = (i) => {
let copytask = [...maintask]
copytask.splice(i, 1)
setmaintask(copytask)
}
  let randerTask = <h2>No task available</h2>
  if (maintask.length > 0) {
    randerTask = maintask.map((t, i) => {
      return <li key={i} className='flex items-center justify-between  mb-5'>
        <div className='flex items-center justify-between w-2/3'>
          <h5 className='text-2xl font-semibold'>
            {t.title}
          </h5>
          <h5 className='text-lg font-medium'>
            {t.description}
          </h5>
        </div>
        <button 
        onClick = { () =>{deleteHandler(i)}}
        className='bg-red-800 text-white px-4 py-2 rounded font-bold'>Delete</button>
      </li>
    })
  }
  return (
    <>
      <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>KREJAL's TO DO LIST</h1>
      <form onSubmit={submithandler}>
        <input type="text"
          className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2'
          placeholder='Enter title here'
          value={title}
          onChange={(e) => {
            settitle(e.target.value)
          }}
        ></input>

        <input type="text"
          className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2'
          placeholder='Enter description here'
          value={description}
          onChange={(e) => {
            setdescription(e.target.value)
          }}></input>
        <button className='bg-black text-white px-4 py-2 text-2xl font-bold rounded m-8'>Add task</button>
      </form>
      <hr />
      <div className='p-5 bg-slate-300'>
        <ul>
          {randerTask}
        </ul>
      </div>
    </>
  )
}

export default page
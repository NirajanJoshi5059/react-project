import React from 'react'
import { useSelector } from 'react-redux'

const HomePage = () => {
  const {infos} = useSelector((store) => store.infos);
  const datas= [{id: 1, name:'Hello'}, {id:2, name:'Hey'}];
  const dat= datas.map((d) => d.id ==1 ? {name:'lio'} : d);
  console.log(dat);
  return (
    <div className='grid grid-cols-4 gap-5 p-4'>
      {infos.map((info) => {
        return <div key={info.id} className='shadow-lg'>
          <img src={info.preview} alt=''/>
          <div>
            <h1>{info.username}</h1>
            <p>{info.email}</p>
            <p>Gender: {info.gender}</p>
            <p>Country: {info.country}</p>
            <p>{info.msg.substring(0,50)}</p>
            <div className='flex justify-end px-2 py-1'>
            <button><i className="fa-solid fa-pen-to-square fa-lg"></i></button>
            </div>
            
          </div>
        </div>
      }) }
      
    </div>
  )
}

export default HomePage

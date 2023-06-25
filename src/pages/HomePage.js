import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router';

const HomePage = () => {
  const { infos } = useSelector((store) => store.infos);
  const nav = useNavigate();
  // const datas= [{id: 1, name:'Hello'}, {id:2, name:'Hey'}];
  // const dat= datas.map((d) => d.id ==1 ? {name:'lio'} : d);
  // console.log(dat);
  return (
    <div className='grid grid-cols-4 gap-5 p-4'>
      {infos.map((info) => {
        return <div key={info.id} className='shadow-lg'>
          <img src={info.preview} alt='Loading...' />
          <div>
            <h1>{info.username}</h1>
            <p>{info.email}</p>
            <p>Gender: {info.gender}</p>
            <p>Country: {info.country}</p>
            <p>{info.msg.substring(0, 50)}</p>
            <h3>My Hobbies:</h3>
            <hr />
            <div className='flex space-x-2'>
              {info.hobby.map((ho, i) => {
              return <div key={i}>
                <p>{ho}</p>
              </div>
            })}</div>


            <div className='flex justify-end px-2 py-1 space-x-4'>
              <button><i className="fa-solid fa-trash fa-lg"></i></button>
              <button onClick={() => nav(`/update/${info.id}`)}><i className="fa-solid fa-pen-to-square fa-lg"></i></button>
            </div>

          </div>
        </div>
      })}

    </div>
  )
}

export default HomePage

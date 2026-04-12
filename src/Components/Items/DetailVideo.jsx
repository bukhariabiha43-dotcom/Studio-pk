import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';

const DetailVideo = () => {
  const [suggestedVideo, setSuggested] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchSuggested = async () => {
      const res = await fetch("https://picsum.photos/v2/list?page=9&limit=4")
      const data = await res.json();
      setSuggested(data);
    }
    fetchSuggested();

  }, [id]);

  return (
      <div className='p-6 flex flex-col lg:flex-row gap-6 text-gray-800 '>
      {/*lef side video*/}
      <div className='flex-1'>
        <img src={`http://picsum.photos/id/${id}/600/350`} className=' rounded-xl w-full' />
        <h2 className='mt-3 text-lg font-semibold'>Video Title{id}</h2>
      </div>
 {/*Right side*/}
      <div className='w-full lg:w-1/3'>
        <p className='p-2 text-gray-700 text-lg font-bold'>Suggested Video</p>

          {/*items is here left side*/}
        <div className='space-y-3'>
          {suggestedVideo.map((items) => (
            <div key={items.id} onClick={()=> navigate(`/video/${items.id}`)} className='flex gap-2 cursor-pointer '>
              <img src={`https://picsum.photos/id/${items.id}/200/150`} className='w-40 h-26 object-cover rounded hover:scale-105 transform duration-100' />
              <p className='text-gray-800 text-sm font-semibold'>{items.author}</p>
           </div>
         ))}          

        </div>
      </div>

    </div>
  )
}

export default DetailVideo
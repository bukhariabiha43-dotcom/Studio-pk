import React from 'react'

const VideoFiltr = ({ data, search, navigate }) => {

  const filterVideo = data.filter((item) =>
    `${item.title} ${item.artist}`.toLowerCase().includes((search || "").toLowerCase())
  );

  return (
    <div className='p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {filterVideo.map((item) => (
        <div
          key={item.id}
          onClick={() => navigate && navigate(`/video/${item.id}`)}
          className='p-3 rounded cursor-pointer'
        >
          <img
            src={`https://img.youtube.com/vi/${item.id}/mqdefault.jpg`}
            alt={item.title}
            className='w-full h-40 object-cover rounded-xl hover:scale-105 transition'
          />
          <p className='mt-2 text-md font-semibold'>{item.title}</p>
          <p className='text-sm p-1 rounded text-gray-500'>{item.artist}</p>
        </div>
      ))}
    </div>
  )
}

export default VideoFiltr;
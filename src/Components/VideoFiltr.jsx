import React from 'react'

const VideoFiltr = ({ data, search, navigate }) => {

  const filterVideo = data.filter((item) =>
    item.author.toLowerCase().includes((search || "").toLowerCase())
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
            src={`https://picsum.photos/id/${item.id}/300/200`}
            alt={item.author}
            className='w-full h-40 object-cover rounded-xl hover:scale-105 transition'
          />
          <p className='mt-2 text-md font-semibold'>{item.author}</p>
          <p className='text-sm p-1 rounded text-gray-500'>
            Video description
          </p>
        </div>
      ))}
    </div>
  )
}

export default VideoFiltr;
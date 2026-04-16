import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useMemo } from 'react';
import { getAllVideos, getSuggestedVideos, getVideoById } from '../../data/videosApi';

const DetailVideo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const activeVideo = useMemo(() => getVideoById(id), [id]);
  const suggestedVideo = useMemo(() => getSuggestedVideos(activeVideo), [activeVideo]);
  const fallbackVideo = useMemo(() => getAllVideos()[0], []);
  const videoToShow = activeVideo || fallbackVideo;

  return (
      <div className='p-6 flex flex-col lg:flex-row gap-6 text-gray-800 '>
      {/*lef side video*/}
      <div className='flex-1'>
        <iframe
          className='rounded-xl w-full aspect-video'
          src={`https://www.youtube.com/embed/${videoToShow?.id}`}
          title={videoToShow?.title || 'Video Player'}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
        <h2 className='mt-3 text-lg font-semibold'>{videoToShow?.title}</h2>
        <p className='text-sm text-gray-500'>{videoToShow?.artist}</p>
      </div>
 {/*Right side*/}
      <div className='w-full lg:w-1/3'>
        <p className='p-2 text-gray-700 text-lg font-bold'>Suggested Video</p>

          {/*items is here left side*/}
        <div className='space-y-3'>
          {suggestedVideo.map((items) => (
            <div key={items.id} onClick={()=> navigate(`/video/${items.id}`)} className='flex gap-2 cursor-pointer '>
              <img src={`https://img.youtube.com/vi/${items.id}/mqdefault.jpg`} className='w-40 h-26 object-cover rounded hover:scale-105 transform duration-100' />
              <div>
                <p className='text-gray-800 text-sm font-semibold'>{items.title}</p>
                <p className='text-xs text-gray-500'>{items.artist}</p>
              </div>
           </div>
         ))}          

        </div>
      </div>

    </div>
  )
}

export default DetailVideo
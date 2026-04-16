import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import VideoFiltr from '../VideoFiltr'
import { SearchContext } from '../SearchContext'
import { getVideosByCategory } from '../../data/videosApi'

const Page3 = () => {

  const { search } = useContext(SearchContext);
  const navigate = useNavigate();
  const panjabiVideos = getVideosByCategory('punjabi');

  return (
    <VideoFiltr
      data={panjabiVideos}
      search={search}
      navigate={navigate}
    />
  );
}

export default Page3;
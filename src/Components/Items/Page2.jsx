import React, { useMemo } from 'react'
import { useNavigate } from 'react-router-dom';
import VideoFiltr from '../VideoFiltr';
import { useContext } from 'react';
import { SearchContext } from '../SearchContext';
import { getVideosByCategory } from '../../data/videosApi';

const Page2 = () => {
  const { search } = useContext(SearchContext);
  const navigate = useNavigate();
  const indianVideos = useMemo(() => getVideosByCategory('indian'), []);

  return (
    <VideoFiltr
      data={indianVideos}
      search={search}
      navigate={navigate}
    />
  )
}

export default Page2;
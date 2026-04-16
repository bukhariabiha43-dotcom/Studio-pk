import React, { useMemo } from 'react'
import { useNavigate } from 'react-router-dom';
import VideoFiltr from '../VideoFiltr';
import { useContext } from 'react';
import { SearchContext } from '../SearchContext';
import { getVideosByCategory } from '../../data/videosApi';

const Page1 = () => {
  const { search } = useContext(SearchContext);
  const navigate = useNavigate();
  const sufiVideos = useMemo(() => getVideosByCategory('sufi'), []);

  return (
    <VideoFiltr
      data={sufiVideos}
      search={search}
      navigate={navigate}
    />
  );
}

export default Page1;
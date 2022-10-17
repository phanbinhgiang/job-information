import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { showStats } from '../../features/allJobs/allJobsSlice';
import { StatsContainer, ChartContainer } from '../../components';

const Stats = () => {
  const { monthlyApplications } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showStats());
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartContainer />}
    </>
  );
};

export default Stats;

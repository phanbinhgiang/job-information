import customFetch from './../../utils/axios';
import { getAllJobs } from './allJobsSlice';
import { hideLoading } from './allJobsSlice';
import authHeader from './../../utils/authHeader';

export const getAllJobsThunk = async (url, thunkAPI) => {
  try {
    const resp = await customFetch.get(url, authHeader(thunkAPI));
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('There was an error');
  }
};

export const deleteJobThunk = async (jobId, thunkAPI) => {
  try {
    const resp = await customFetch.delete(
      `jobs/${jobId}`,
      authHeader(thunkAPI),
    );
    thunkAPI.dispatch(getAllJobs());
    return resp.data;
  } catch (error) {
    thunkAPI.dispatch(hideLoading());
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

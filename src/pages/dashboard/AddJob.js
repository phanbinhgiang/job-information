import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { FormRow } from './../../components';
import { toast } from 'react-toastify';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { FormRowSelect } from './../../components';
import { handleChange, clearValues } from '../../features/job/jobSlice';
import { createJob } from '../../features/job/jobSlice';

const AddJob = () => {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobTypeOptions,
    jobType,
    statusOptions,
    status,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.user);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!position || !company || !jobLocation || !status || !jobType) {
      toast.error('Please fill out all fields');
    }
    dispatch(createJob({ position, company, jobLocation, jobType, status }));
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };

  useEffect(() => {
    dispatch(handleChange({ name: 'jobLocation', value: user.location }));
  }, []);

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? 'Edit Job' : 'Add Job'}</h3>
        {/* position */}
        <div className="form-center">
          <FormRow
            type="text"
            name="position"
            value={position}
            handleChange={handleJobInput}
          />
          {/* company */}
          <FormRow
            type="text"
            name="company"
            value={company}
            handleChange={handleJobInput}
          />
          {/* jobLocation */}
          <FormRow
            type="text"
            name="jobLocation"
            labelText="job location"
            value={jobLocation}
            handleChange={handleJobInput}
          />
          {/* status */}
          <FormRowSelect
            options={statusOptions}
            value={status}
            name="status"
            type="status"
            handleJobInput={handleJobInput}
          />
          {/* jobType */}
          <FormRowSelect
            options={jobTypeOptions}
            value={jobType}
            name="jobType"
            type="job type"
            handleJobInput={handleJobInput}
          />
          <div className="btn-container">
            <button
              type="button"
              className="btn btn-block clear-btn"
              onClick={() => dispatch(clearValues())}
            >
              clear
            </button>
            <button
              type="submit"
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;

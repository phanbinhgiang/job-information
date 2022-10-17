import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Wrapper from './../assets/wrappers/SearchContainer';
import { FormRow, FormRowSelect } from './../components';
import { handleChange, clearFilters } from '../features/allJobs/allJobsSlice';

const SearchContainer = () => {
  const { isLoading, search, searchStatus, searchType, sort, sortOptions } =
    useSelector((store) => store.allJobs);
  const { jobTypeOptions, statusOptions } = useSelector((store) => store.job);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(handleChange({ name: e.target.name, value: e.target.value }));
  };
  const handleClearFilter = () => {
    dispatch(clearFilters());
  };
  return (
    <Wrapper>
      <form action="" className="form">
        <h4>search form</h4>
        <div className="form-center">
          {/* Search position */}
          <FormRow
            type="text"
            name="search"
            value={search}
            handleChange={handleSearch}
          />
          {/* Search by status */}
          <FormRowSelect
            options={['all', ...statusOptions]}
            value={searchStatus}
            name="searchStatus"
            type="status"
            handleJobInput={handleSearch}
          />
          {/* Search by type */}
          <FormRowSelect
            options={['all', ...jobTypeOptions]}
            value={searchType}
            name="searchType"
            type="type"
            handleJobInput={handleSearch}
          />
          {/* Search by type */}
          <FormRowSelect
            options={sortOptions}
            value={sort}
            name="sort"
            type="sort"
            handleJobInput={handleSearch}
          />

          <div
            className="btn btn-block btn-danger"
            disable={isLoading.toString()}
            onClick={handleClearFilter}
          >
            clear filters
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchContainer;

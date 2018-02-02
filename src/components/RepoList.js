import PropTypes from 'prop-types';
import React from 'react';
import RepoCard from './RepoCard';
import './RepoList.css';

const RepoList = ({user, repos, sortField, sortDirection, error}) => {
  if (!repos || repos.length === 0) {
    return (
      <div id='no-repos'>
        <b>No repositories for that user!</b>
      </div>
    );
  }

  return (
    <div id='repo-list' style={{height: window.innerHeight - 30}}>
      {
        repos.map((repo, index) => (
          <RepoCard key={repo.id} {...repo}/>
        ))
      }
    </div>
  );
}

RepoList.propTypes = {
  user: PropTypes.string.isRequired,
  repos: PropTypes.array.isRequired,
  sortField: PropTypes.string.isRequired
};

export default RepoList;


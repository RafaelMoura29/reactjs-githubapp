'use strict'

import React, { PropTypes } from 'react'
import Pagination from '../pagination'
import './repos.css'

const Repos = ({ className, title, repos, handlePagination }) => (
  <div className={`repos-list ${className}`}>
    <h2>{title}</h2>
    <ul>
      {repos.repos.map((repo, index) => (
        <li key={index}>
          <a href={repo.link}>{repo.name}</a>
        </li>
      ))}
    </ul>
    <Pagination total={10} activePage={3} onClick={handlePagination}/>
  </div>
)

Repos.defaultProps = {
  className: '',
  repos: {}
}

Repos.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  repos: PropTypes.object,
  handlePagination: PropTypes.func.isRequired
}

export default Repos

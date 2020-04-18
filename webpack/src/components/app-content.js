'use strict'

import React, { PropTypes } from 'react'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

const AppContent = ({ 
  userInfo, 
  repos, 
  starred, 
  handleSearch, 
  getRepos, 
  getStarred, 
  isFetching
}) => {
  return (
    <div className="app">
      <Search isDisabled={isFetching} handleSearch={handleSearch} />
      {isFetching && <div>Carregando...</div>}
      {!!userInfo && <UserInfo userInfo={userInfo} />}
      {!!userInfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

      {!!repos.length && <Repos
        className="repos"
        title="Repositórios:"
        repos={repos}
      />
      }

      {!!starred.length && <Repos
        className="repos"
        title="Starred:"
        repos={starred}
      />
      }
    </div>
  )
}

AppContent.propTypes = {
  userInfo: React.PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired,
  handleSearch: PropTypes.func.isRequired, 
  getRepos:PropTypes.func.isRequired , 
  getStarred:PropTypes.func.isRequired , 
  isFetching:PropTypes.bool.isRequired
}

export default AppContent
'use strict'

import React from 'react'
import Search from './components/search'
import UserInfo from './components/user-info'
import Actions from './components/actions'
import Repos from './components/repos'

const App = () => {
  return (
    <div className="app">
      <Search/>
      <UserInfo/>
      <Actions/>
      <Repos 
        className="repos" 
        title="Repositórios:"
        repos={[
          {name:"nome repositorio", link:"#"},
          {name:"nome repositorio", link:"#"},
          {name:"nome repositorio", link:"#"},
        ]}
        />

<Repos 
        className="repos" 
        title="Starred:"
        repos={[
          {name:"nome repositorio starred", link:"#"},
          {name:"nome repositorio starred", link:"#"},
          {name:"nome repositorio", link:"#"},
        ]}
        />
    </div>
  )
}
export default App

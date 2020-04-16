'use strict'

import React from 'react'

const UserInfo = () => {
    return (
        <div className="user-info">
            <img src="https://avatars1.githubusercontent.com/u/45321891?v=4" />
            <h1 className='username'>
                <a href="https://github.com/rafaelmoura29">
                    Rafael Moura
          </a>
            </h1>
            <ul className='repos-info'>
                <li>- Repositórios: 122</li>
                <li>- Seguidores: 122</li>
                <li>- Seguindo: 122</li>
            </ul>
        </div>
    )
}

export default UserInfo

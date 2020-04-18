'use strict'

import React from 'react'

const Search = ({ isDisabled, handleSearch }) => {
    return (
        <div className="search">
            <input
                type="search"
                placeholder="Digite o nome do usuário do GitHub"
                onKeyUp={handleSearch}
                disabled={isDisabled}
            />
        </div>
    )
}

Search.propTypes = {
    handleSearch: React.PropTypes.func.isRequired,
    isDisabled: React.PropTypes.bool.isRequired
}

export default Search
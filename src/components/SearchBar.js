import React from 'react';
import { Input } from 'semantic-ui-react'

class SearchBar extends React.Component {
    searchRef = React.createRef();

    handleSearch = () => {
        this.props.updateSearch(this.searchRef.current.inputRef.current.value);
    }

    render() {
        return (
            <Input className='searchbar' icon='search' placeholder='Pesquisar...' ref={this.searchRef} onChange={this.handleSearch} />
        )
    }
}

export default SearchBar;
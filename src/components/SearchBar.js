import React from 'react';

class SearchBar extends React.Component {
    searchRef = React.createRef();

    handleSearch = () => {
        this.props.updateSearch(this.searchRef.current.value);
    }

    render() {
        return (
            <input type='text' placeholder='Pesquisar...' ref={this.searchRef} onChange={this.handleSearch} />
        )
    }
}

export default SearchBar;
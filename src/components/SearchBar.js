import React from 'react';

class SearchBar extends React.Component {
    searchRef = React.createRef();

    handleSearch = () => {
        this.props.updateSearch(this.searchRef.current.value);
    }

    render() {
        return (
            <div className='ui icon input searchbar'>
                <input type='text' placeholder='Pesquisar...' ref={this.searchRef} onChange={this.handleSearch} />
                <i aria-hidden="true" className="search icon"></i>
            </div>
        )
    }
}

export default SearchBar;
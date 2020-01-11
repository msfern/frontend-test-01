import React from 'react';
import SearchBar from './SearchBar';

class Header extends React.Component {
    render() {
        return (
            <nav className='top-navbar'>
                <img className='logo' src='images/delfos_Intelligent_maintenance.png' alt='Logo Delfos' />
                <SearchBar updateSearch={this.props.updateSearch} />
            </nav>
        )
    }
}

export default Header;
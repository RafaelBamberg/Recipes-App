import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';
import SearchBar from './SearchBar';
import './Header.css';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearchBar: false,
    };

    this.handleSearchBar = this.handleSearchBar.bind(this);
  }

  handleSearchBar() {
    this.setState((prevState) => {
      console.log(prevState);
      return {
        showSearchBar: !prevState.showSearchBar,
      };
    });
  }

  render() {
    const { titlePage, fetchApi } = this.props;
    const { showSearchBar } = this.state;
    return (
      <div>
        <header className="header-home-page">
          <Link to="/perfil">
            <img
              className="profile-icon"
              src={ profileIcon }
              alt="profileIcon"
              data-testid="profile-top-btn"
            />
          </Link>
          <h2 data-testid="page-title">
            { titlePage }
          </h2>
          <button
            className="button"
            type="button"
            onClick={ this.handleSearchBar }
          >
            <img
              src={ searchIcon }
              alt="searchIcon"
              data-testid="search-top-btn"
            />
          </button>
        </header>
        { showSearchBar ? <SearchBar fetchApi={ fetchApi } /> : '' }
      </div>
    );
  }
}

Header.propTypes = {
  titlePage: PropTypes.string.isRequired,
  fetchApi: PropTypes.func.isRequired,
};

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import HeaderExplore from '../components/HeaderExplore';
import '../styles/App.css'

class Explore extends Component {
  render() {
    return (
      <div>
        <HeaderExplore titlePage="Explorar" />
        <Link className="header-explore-something" to="/explorar/comidas" data-testid="explore-food">
          Explorar Comidas
        </Link>
        |-|
        <Link className="header-explore-something" to="/explorar/bebidas" data-testid="explore-drinks">
          Explorar Bebidas
        </Link>
        <Footer className="explore-footer" />
      </div>
    );
  }
}

export default Explore;

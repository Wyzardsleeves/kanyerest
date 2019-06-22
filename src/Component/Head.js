import React from 'react';
import logo from '../assets/images/logo.png';

const Head = () => {
  return(
    <nav className="grey lighten-3 grey-text text-darken-3">
      <section className="container">
        <div className="head-half">
          <img src={logo} className="left" alt="logo" />
        </div>
        <div className="head-half">
          <a target="_blank" without rel="noopener noreferrer" href="https://github.com/Wyzardsleeves/kanyerest"><i className="fab fa-github right"></i></a>
        </div>
      </section>
    </nav>
  )
}

export default Head;

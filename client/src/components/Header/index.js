import React, { useState } from 'react';
import Nav from '../Nav';


function Header () {

  const [pages] = useState([
    { name: 'About Me', id: 'aboutme' },
    { name: 'Podcast', id: 'podcast' },
    { name: 'Discussion', id: 'discussion' },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  // function handleNavClick(e) {
  //   e.preventDefault();
  //   window.location.replace = '/';
  // }
  
  return (
    <header>
      <div id="header" className="hero-image">
      <h2 className="headerName">
        <a href="/" class="intro">
          Fortress of Fandom
        </a>
      </h2>
      <Nav
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      ></Nav>
      </div>
    </header>
  );
}

export default Header;
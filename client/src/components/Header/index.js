import React, { useState } from 'react';
import Nav from '../Nav';

function Header () {

  const [pages] = useState([
    { name: 'About Me', id: 'aboutme' },
    { name: 'Podcast', id: 'podcast' },
    { name: 'Discussion', id: 'discussion' }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);
  
  return (
    <header>
      <div id="header">
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
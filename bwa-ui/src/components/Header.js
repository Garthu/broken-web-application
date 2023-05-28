import React from 'react'

const Header = () => {
  const handleLinkClick = (event) => {
    event.preventDefault();

    const targetId = event.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    targetElement.scrollIntoView({ behavior: 'smooth' });
  }


  return (
    <nav>
      <ul>
        <li><a href="#home-section" onClick={handleLinkClick}>Home</a></li>
        <li><a href="#start-section" onClick={handleLinkClick}>Vulnerabilidades</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  )
}

export default Header;
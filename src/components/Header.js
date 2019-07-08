import React from 'react'
import './styles/Header.css'

function Header() {
    return (
        <header className="main-header dark-mode-elements">
            <div className="header-text">
                <h3>Where in the world?</h3>
            </div>
            <div className="mode">
                <h4>Dark Mode</h4>
            </div>
        </header>
    )
}

export default Header;
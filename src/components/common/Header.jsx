'use client'

import { useState } from 'react'
import styles from './Header.module.css'
import Navigation from './Navigation'

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(false)

    const toggleNav = () => setIsNavOpen(!isNavOpen)
    const toggleSearch = () => setIsSearchOpen(!isSearchOpen)

    return (
        <header className={styles.header}>
            <div className={styles.brand}>CHARGING FORWARD</div>
            <div className={styles.actions}>
                <button onClick={toggleSearch}>Search</button>
                <button onClick={toggleNav}>Menu</button>
            </div>
            {isSearchOpen && <div className={styles.search}>Search Box Placeholder</div>}
            {isNavOpen && <Navigation />}
        </header>
    )
}
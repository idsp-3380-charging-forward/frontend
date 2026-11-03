'use client'

import Link from 'next/link'
import { useState } from 'react'
import styles from './Header.module.css'
import Navigation from './Navigation'

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(false)

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen)
        setIsSearchOpen(false)
    }

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen)
        setIsNavOpen(false)
    }

    return (
        <div className={styles.headerContainer}>
            <header className={styles.header}>
                <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className={styles.brand}>
                        CHARGING<br />
                        <span className={styles.indent}>FORWARD</span>
                    </div>
                </Link>
                <div className={styles.actions}>
                    <button className={styles.iconButton} onClick={toggleSearch}>🔍</button>
                    <button className={styles.iconButton} onClick={toggleNav}>☰</button>
                </div>
            </header>

            {isSearchOpen && (
                <div className={styles.searchContainer}>
                    <label>search:</label>
                    <input type="text" className={styles.searchInput} />
                </div>
            )}

            {isNavOpen && <Navigation />}
        </div>
    )
}
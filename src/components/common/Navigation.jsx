import styles from './Navigation.module.css'

export default function Navigation() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>ZEVs 101</li>
                <li>Charging Basics</li>
                <li>Community Perks</li>
                <li>Myths & Rumors</li>
                <li>Cost Calculator</li>
                <li>Learn</li>
                <li>Events</li>
            </ul>
        </nav>
    )
}
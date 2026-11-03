import Link from 'next/link';
import styles from './Navigation.module.css';

export default function Navigation() {
    return (
        <nav className={styles.navOverlay}>
            <ul className={styles.navList}>
                <li><Link href="/zevs-101">ZEVs 101</Link></li>
                <li><Link href="/charging-basics">Charging Basics</Link></li>
                <li><Link href="/community-perks">Community Perks</Link></li>
                <li><Link href="/myths-rumors">Myths & Rumors</Link></li>
                <li><Link href="/cost-calculator">Cost Calculator</Link></li>
                <li><Link href="/learn">Learn</Link></li>
                <li><Link href="/events">Events</Link></li>
            </ul>
        </nav>
    );
}
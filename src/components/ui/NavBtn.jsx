"use client";

import { useState } from "react";

export default function NavBtn() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className='button-container'>
            <button onClick={() => setMenuOpen(!menuOpen)}>
                menu
            </button>
            {menuOpen && MenuOpen()}
        </div>
    );
}

function MenuOpen() {
    return (
        <ul>
            <li>page01</li>
            <li>page02</li>
            <li>page03</li>
        </ul>
    );
}

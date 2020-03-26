import React from "react"
// We used the Link component intead of the <a> tag for optimaziation.
import { Link } from "gatsby"
import headerStyles from "./header.module.scss"

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <h1>
        <Link to="/" className={headerStyles.title}>Igor Tavarez</Link>
      </h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link to="/" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Home</Link>
          </li>
          <li>
            <Link to="/blog" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Blog</Link>
          </li>
          <li>
            <Link to="/contact" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} >Contact</Link>
          </li>
          <li>
            <Link to="/about" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

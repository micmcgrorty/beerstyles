import Link from 'next/link';

import classes from './layout.module.css';

const Layout = (props) => {
  return (
    <>
      <header className={classes.header}>
        <Link href="/">Home</Link>
        <nav>
          <ul>
            <li>
              <Link href="/colour">Colour</Link>
            </li>
            <li>
              <Link href="/bitterness">Bitterness</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{props.children}</main>
    </>
  );
};

export default Layout;

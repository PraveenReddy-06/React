import { memo } from 'react';

const Nav = () => {
  return (
    <header className="fixed top-4 left-0 right-0 z-50">
      <div className="container px-5">
        <nav className="navbar">
          <h1 className="text-white font-semibold">Praveen</h1>

          <ul className="nav-links">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Login</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default memo(Nav);
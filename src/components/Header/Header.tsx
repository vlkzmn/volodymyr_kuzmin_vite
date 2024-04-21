import './Header.scss';
import linksList from '../../api/header_links.json';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <nav className="header__nav">
          <div className="header__logo">
            <a
              href="https://vlkzmn.github.io/volodymyr_kuzmin/"
              className="header__logo-link"
            >
              <img
                src="img/logo.svg"
                className="header__logo-image"
                alt="Volodymyr Kuzmin | Logo"
              />
            </a>
          </div>

          <div className="header__links">
            <ul className="header__list">
              {linksList.map((link) => (
                <li className="header__list-item" key={link}>
                  <a href={`#${link}`} className="header__list-link">
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="https://drive.google.com/file/d/1-PL-21FilqoBvfCvyRrVGUzEdZmUGBUv/view?usp=sharing"
              className="header__button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </nav>

        <div className="header__content">
          <p className="header__hi">Hi, my name is</p>

          <h1 className="header__title">Volodymyr Kuzmin</h1>

          <p className="header__legend">I build things for the web</p>

          <p className="header__text">
            I am a Full Stack Developer specializing in the creation (and
            occasionally design) of web applications. I approach my work with
            enthusiasm and pleasure. Currently, I am actively seeking employment
            and open to considering participation in various projects or
            startups.
          </p>
        </div>
      </div>
    </header>
  );
};

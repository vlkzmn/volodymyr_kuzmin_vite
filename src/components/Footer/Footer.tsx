import './Footer.scss';
import { socialSvgComponents, socialSvgData } from '../SVG/socialSVG';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <ul className="footer__social">
          {socialSvgData.map((item) => {
            const Component = socialSvgComponents[item.name];

            return (
              <li className="footer__social-link" key={item.name}>
                <a
                  href={item.link}
                  rel="noreferrer"
                  className="footer__social-link"
                  target="_blank"
                >
                  <div className="footer__social-icon">
                    <Component />
                  </div>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="footer__degign">
          Based on
          <a
            href="https://brittanychiang.com/"
            className="footer__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Brittany Chiang
          </a>
          design
        </div>
      </div>
    </footer>
  );
};

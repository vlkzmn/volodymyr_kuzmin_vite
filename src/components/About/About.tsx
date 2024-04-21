import './About.scss';

export const About = () => {
  return (
    <section className="page__about about" id="About">
      <div className="about__container">
        <div className="about__wrapper">
          <h2 className="about__title">About Me</h2>

          <div className="about__content">
            <div className="about__text">
              <p className="about__paragraph">
                My aspiration in web development is to create user-friendly
                interfaces that reflect my passion and dedication to the craft.
                Each project serves as a source of inspiration, driving me to
                constantly refine my skills and seek opportunities for
                improvement. I see in every line of code a chance to create
                something outstanding and purposeful.
              </p>

              <p className="about__paragraph">
                My interest in programming began back in school when I started
                learning Turbo Pascal. However, I drifted away from this field
                for a while, but soon rediscovered my passion for it. As I
                progressed, I delved into the realm of e-commerce, immersing
                myself in Magento development and achieving success in this
                area. Over time, I decided to expand my knowledge and skills by
                diving into modern web development technologies. Currently, I
                possess a variety of tools and am committed to further
                professional growth.
              </p>
            </div>

            <img
              src="img/foto.webp"
              alt="Volodymyr Kuzmin foto"
              className="about__foto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

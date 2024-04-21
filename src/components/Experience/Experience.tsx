import './Experience.scss';

export const Experience = () => {
  return (
    <section className="page__experience experience" id="Experience">
      <div className="experience__container">
        <h2 className="experience__title">Where I’ve Worked</h2>

        <div className="experience__wrapper">
          <div className="experience__place">
            <div className="experience__sidebar">
              <h3 className="experience__position">Fullstack Developer</h3>

              <p className="experience__dates">Apr 2023 – Present</p>
            </div>

            <ul className="experience__list">
              <li className="experience__list-item">
                Crafting responsive web pages adhering to Figma grid layout
                designs with precision, utilizing a blend of HTML, CSS, SASS,
                and JavaScript.
              </li>

              <li className="experience__list-item">
                Constructing React applications employing Typescript, JSX,
                hooks, routers, and functional components to deliver dynamic and
                efficient user experiences.
              </li>

              <li className="experience__list-item">
                Facilitating thorough code reviews, diligently investigating,
                reproducing, and rectifying bugs to uphold the integrity and
                performance of software systems.
              </li>

              <li className="experience__list-item">
                Developing servers, handling its requests, implementing advanced
                authentication techniques, and managing data storage and
                retrieval from databases using Node.js, Express, SQL, REST API,
                Web sockets technologies.
              </li>

              <li className="experience__list-item">
                Collaborating within cross-functional teams encompassing QA,
                designers, and backend developers, employing the Scrum
                methodology and leveraging tools like Jira for efficient project
                management.
              </li>

              <p className="experience__technologies">
                Technologies: HTML, CSS, SASS, JavaScript, Typescript, React,
                Redux, Node.js, Express, SQL, REST API, Web sockets, Jira etc.
              </p>
            </ul>
          </div>

          <div className="experience__place">
            <div className="experience__sidebar">
              <h3 className="experience__position">
                Magento Developer and Online Store Manager
              </h3>

              <p className="experience__dates">Jun 2012 – Feb 2022</p>
            </div>

            <ul className="experience__list">
              <li className="experience__list-item">
                Experienced in deploying the Magento package across various
                versions, including Magento 1.6, 1.9, and 2.4.
              </li>

              <li className="experience__list-item">
                Development and customization of the front-end part of projects.
              </li>

              <li className="experience__list-item">
                Creation and enhancement of modules in the back-end part.
              </li>

              <li className="experience__list-item">
                Transferring websites to hosting, connecting domains, and
                integrating SSL certificates.
              </li>

              <li className="experience__list-item">
                Managing product inventory and filling stores with goods.
              </li>

              <li className="experience__list-item">
                Skilled in SEO optimization, including compiling semantic cores,
                implementing meta tags, and dding Open Graph tags and
                schema-structured data.
              </li>

              <li className="experience__list-item">
                Experienced in copywriting and coordinating freelancers for
                content creation tasks.
              </li>

              <li className="experience__list-item">
                Competent in setting up and managing contextual advertising
                campaigns.
              </li>

              <p className="experience__text">
                To optimize the process of adding products, I developed parsers
                in PHP to collect products from other stores and catalogs, which
                collected text data, generated meta tags based on the semantic
                core, uploaded and optimized images, and generated CSV files for
                bulk import into the Magento database, which significantly
                accelerated the process of filling stores.
              </p>

              <p className="experience__technologies">
                Technologies: Magento 1/2, HTML, CSS, PHP, JavaScript, MySQL
                etc.
              </p>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="section-title text-center center">
        <div className="overlay">
          <h2>Gallery</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="categories">
            <ul className="cat">
              <li>
                <ol className="type">
                  <li>
                    <Link href="#" data-filter="*" className="active">
                      All
                    </Link>
                  </li>
                  <li>
                    <Link href="#" data-filter=".breakfast">
                      Breakfast
                    </Link>
                  </li>
                  <li>
                    <Link href="#" data-filter=".lunch">
                      Lunch
                    </Link>
                  </li>
                  <li>
                    <Link href="#" data-filter=".dinner">
                      Dinner
                    </Link>
                  </li>
                </ol>
              </li>
            </ul>
            <div className="clearfix"></div>
          </div>
        </div>
        <div className="row">
          <div className="portfolio-items">
            <div className="col-sm-6 col-md-4 col-lg-4 breakfast">
              <div className="portfolio-item">
                <div className="hover-bg">
                  <Link
                    href="img/portfolio/01-large.jpg"
                    title="Dish Name"
                    data-lightbox-gallery="gallery1"
                  >
                    <div className="hover-text">
                      <h4>Dish Name</h4>
                    </div>
                    <img
                      src="img/portfolio/01-small.jpg"
                      className="img-responsive"
                      alt="Project Title"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4 dinner">
              <div className="portfolio-item">
                <div className="hover-bg">
                  <Link
                    href="img/portfolio/02-large.jpg"
                    title="Dish Name"
                    data-lightbox-gallery="gallery1"
                  >
                    <div className="hover-text">
                      <h4>Dish Name</h4>
                    </div>
                    <img
                      src="img/portfolio/02-small.jpg"
                      className="img-responsive"
                      alt="Project Title"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4 breakfast">
              <div className="portfolio-item">
                <div className="hover-bg">
                  <Link
                    href="img/portfolio/03-large.jpg"
                    title="Dish Name"
                    data-lightbox-gallery="gallery1"
                  >
                    <div className="hover-text">
                      <h4>Dish Name</h4>
                    </div>
                    <img
                      src="img/portfolio/03-small.jpg"
                      className="img-responsive"
                      alt="Project Title"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4 breakfast">
              <div className="portfolio-item">
                <div className="hover-bg">
                  <Link
                    href="img/portfolio/04-large.jpg"
                    title="Dish Name"
                    data-lightbox-gallery="gallery1"
                  >
                    <div className="hover-text">
                      <h4>Dish Name</h4>
                    </div>
                    <img
                      src="img/portfolio/04-small.jpg"
                      className="img-responsive"
                      alt="Project Title"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4 dinner">
              <div className="portfolio-item">
                <div className="hover-bg">
                  <Link
                    href="img/portfolio/05-large.jpg"
                    title="Dish Name"
                    data-lightbox-gallery="gallery1"
                  >
                    <div className="hover-text">
                      <h4>Dish Name</h4>
                    </div>
                    <img
                      src="img/portfolio/05-small.jpg"
                      className="img-responsive"
                      alt="Project Title"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4 lunch">
              <div className="portfolio-item">
                <div className="hover-bg">
                  <Link
                    href="img/portfolio/06-large.jpg"
                    title="Dish Name"
                    data-lightbox-gallery="gallery1"
                  >
                    <div className="hover-text">
                      <h4>Dish Name</h4>
                    </div>
                    <img
                      src="img/portfolio/06-small.jpg"
                      className="img-responsive"
                      alt="Project Title"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4 lunch">
              <div className="portfolio-item">
                <div className="hover-bg">
                  <Link
                    href="img/portfolio/07-large.jpg"
                    title="Dish Name"
                    data-lightbox-gallery="gallery1"
                  >
                    <div className="hover-text">
                      <h4>Dish Name</h4>
                    </div>
                    <img
                      src="img/portfolio/07-small.jpg"
                      className="img-responsive"
                      alt="Project Title"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4 breakfast">
              <div className="portfolio-item">
                <div className="hover-bg">
                  <Link
                    href="img/portfolio/08-large.jpg"
                    title="Dish Name"
                    data-lightbox-gallery="gallery1"
                  >
                    <div className="hover-text">
                      <h4>Dish Name</h4>
                    </div>
                    <img
                      src="img/portfolio/08-small.jpg"
                      className="img-responsive"
                      alt="Project Title"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4 dinner">
              <div className="portfolio-item">
                <div className="hover-bg">
                  <Link
                    href="img/portfolio/09-large.jpg"
                    title="Dish Name"
                    data-lightbox-gallery="gallery1"
                  >
                    <div className="hover-text">
                      <h4>Dish Name</h4>
                    </div>
                    <img
                      src="img/portfolio/09-small.jpg"
                      className="img-responsive"
                      alt="Project Title"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4 lunch">
              <div className="portfolio-item">
                <div className="hover-bg">
                  <Link
                    href="img/portfolio/10-large.jpg"
                    title="Dish Name"
                    data-lightbox-gallery="gallery1"
                  >
                    <div className="hover-text">
                      <h4>Dish Name</h4>
                    </div>
                    <img
                      src="img/portfolio/10-small.jpg"
                      className="img-responsive"
                      alt="Project Title"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4 lunch">
              <div className="portfolio-item">
                <div className="hover-bg">
                  <Link
                    href="img/portfolio/11-large.jpg"
                    title="Dish Name"
                    data-lightbox-gallery="gallery1"
                  >
                    <div className="hover-text">
                      <h4>Dish Name</h4>
                    </div>
                    <img
                      src="img/portfolio/11-small.jpg"
                      className="img-responsive"
                      alt="Project Title"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4 breakfast">
              <div className="portfolio-item">
                <div className="hover-bg">
                  <Link
                    href="img/portfolio/12-large.jpg"
                    title="Dish Name"
                    data-lightbox-gallery="gallery1"
                  >
                    <div className="hover-text">
                      <h4>Dish Name</h4>
                    </div>
                    <img
                      src="img/portfolio/12-small.jpg"
                      className="img-responsive"
                      alt="Project Title"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="section-title text-center center">
        <div className="overlay">
          <h2>Gallery</h2>
          <hr />
          <p>
            Take a glimpse into the beauty and sophistication of Planete Hotel.
            From our luxurious rooms to our stunning amenities, our gallery
            showcases the exceptional experience that awaits you.
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
                    <a data-filter="*" className="active">
                      All
                    </a>
                  </li>
                  <li>
                    <a href="/#" data-filter=".breakfast">
                      Outside
                    </a>
                  </li>
                  <li>
                    <a href="/#" data-filter=".lunch">
                      Our Rooms
                    </a>
                  </li>
                  <li>
                    <a href="/#" data-filter=".dinner">
                      Night Club
                    </a>
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
                  <a
                    href={"#"}
                    title="Planete Hotel"
                    data-lightbox-gallery="gallery1"
                  >
                    <div className="hover-text">
                      <h4>Planete Hotel</h4>
                    </div>
                    <img
                      src={"/img/outside (12).JPG"}
                      className="img-responsive"
                      alt="Project Title"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4 dinner">
              <div className="portfolio-item">
                <div className="hover-bg">
                  <a
                    href="#"
                    title="Dish Name"
                    data-lightbox-gallery="gallery1"
                  >
                    <div className="hover-text">
                      <h4>Planete Hotel</h4>
                    </div>
                    <img
                      src={"/img/club (7).JPG"}
                      className="img-responsive"
                      alt="Project Title"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4 breakfast">
              <div className="portfolio-item">
                <div className="hover-bg">
                  <a
                    href="#"
                    title="Dish Name"
                    data-lightbox-gallery="gallery1"
                  >
                    <div className="hover-text">
                      <h4>Planete Hotel</h4>
                    </div>
                    <img
                      src={"/img/outside (4).JPG"}
                      className="img-responsive"
                      alt="Project Title"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-4 dinner">
              <div className="portfolio-item">
                <div className="hover-bg">
                  <a
                    href="#"
                    title="Dish Name"
                    data-lightbox-gallery="gallery1"
                  >
                    <div className="hover-text">
                      <h4>Planete Hotel</h4>
                    </div>
                    <img
                      src={"/img/club (4).JPG"}
                      className="img-responsive"
                      alt="Project Title"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4 lunch">
              <div className="portfolio-item">
                <div className="hover-bg">
                  <a
                    href="#"
                    title="Dish Name"
                    data-lightbox-gallery="gallery1"
                  >
                    <div className="hover-text">
                      <h4>Planete Hotel</h4>
                    </div>
                    <img
                      src={"/img/room (2).JPG"}
                      className="img-responsive"
                      alt="Project Title"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4 lunch">
              <div className="portfolio-item">
                <div className="hover-bg">
                  <a
                    href="#"
                    title="Dish Name"
                    data-lightbox-gallery="gallery1"
                  >
                    <div className="hover-text">
                      <h4>Planete Hotel</h4>
                    </div>
                    <img
                      src={"/img/room (6).JPG"}
                      className="img-responsive"
                      alt="Project Title"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4 lunch">
              <div className="portfolio-item">
                <div className="hover-bg">
                  <a
                    href="#"
                    title="Dish Name"
                    data-lightbox-gallery="gallery1"
                  >
                    <div className="hover-text">
                      <h4>Planete Hotel</h4>
                    </div>
                    <img
                      src={"/img/room (8).JPG"}
                      className="img-responsive"
                      alt="Project Title"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4 breakfast">
              <div className="portfolio-item">
                <div className="hover-bg">
                  <a
                    href="#"
                    title="Dish Name"
                    data-lightbox-gallery="gallery1"
                  >
                    <div className="hover-text">
                      <h4>Planete Hotel</h4>
                    </div>
                    <img
                      src={"/img/outside (1).JPG"}
                      className="img-responsive"
                      alt="Project Title"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4 dinner">
              <div className="portfolio-item">
                <div className="hover-bg">
                  <a
                    href="#"
                    title="Dish Name"
                    data-lightbox-gallery="gallery1"
                  >
                    <div className="hover-text">
                      <h4>Planete Hotel</h4>
                    </div>
                    <img
                      src={"/img/club (10).JPG"}
                      className="img-responsive"
                      alt="Project Title"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4 lunch">
              <div className="portfolio-item">
                <div className="hover-bg">
                  <a
                    href="img/portfolio/10-large.jpg"
                    title="Dish Name"
                    data-lightbox-gallery="gallery1"
                  >
                    <div className="hover-text">
                      <h4>Planete Hotel</h4>
                    </div>
                    <img
                      src={"/img/club (1).JPG"}
                      className="img-responsive"
                      alt="Project Title"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4 lunch">
              <div className="portfolio-item">
                <div className="hover-bg">
                  <a
                    href="#"
                    title="Dish Name"
                    data-lightbox-gallery="gallery1"
                  >
                    <div className="hover-text">
                      <h4>Planete Hotel</h4>
                    </div>
                    <img
                      src={"/img/room (2).JPG"}
                      className="img-responsive"
                      alt="Project Title"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4 breakfast">
              <div className="portfolio-item">
                <div className="hover-bg">
                  <a
                    href="#"
                    title="Dish Name"
                    data-lightbox-gallery="gallery1"
                  >
                    <div className="hover-text">
                      <h4>Planete Hotel</h4>
                    </div>
                    <img
                      src={"/img/room (1).JPG"}
                      className="img-responsive"
                      alt="Project Title"
                    />
                  </a>
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

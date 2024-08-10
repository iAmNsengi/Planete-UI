const About = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className="about-img">
              <img
                src={"/img/outside(7).JPG"}
                className="img-responsive"
                alt=""
              />
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Our Hotel</h2>
              <hr />
              <p>
                At Planete Hotel, we believe in creating an experience that goes
                beyond just a place to stay. Nestled in the heart of the city,
                our hotel offers a perfect blend of luxury, comfort, and
                impeccable service. Whether you&apos;re visiting for business or
                leisure, our elegant rooms, world-class amenities, and warm
                hospitality promise to make your stay truly unforgettable.
              </p>
              <h3></h3>
              <p>
                From our exquisite dining options to our relaxing spa and
                fitness facilities, every detail at Planete Hotel is designed
                with your comfort in mind. Our dedicated staff is here to ensure
                that your every need is met, making you feel at home from the
                moment you arrive. Discover the best of the city while enjoying
                the serene ambiance of our hotel. At Planete Hotel, your
                satisfaction is our priority, and we look forward to welcoming
                you to a world of sophistication and relaxation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

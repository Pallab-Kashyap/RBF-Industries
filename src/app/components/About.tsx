import React from "react";

function About() {
  return (
    <div className=" relative">
      <div className="about-us-heading py-5 sm:py-14 bg-[#B5D823] px-4 sm:px-12">
        <h1 className="text-3xl sm:text-5xl font-medium  text-center sm:text-left">About Us</h1>
      </div>

      <div className="sm:flex py-8 px-8 sm:px-12">

      <div className="about-image sm:absolute top-10 right-10 flex justify-center">
          <img
            src="/assets/about_section_img.png"
            alt="About Us"
            className="rounded-xl h-[50vh] sm:h-[80vh]"
          />
        </div>

        <div className="about-text sm:w-[80ch] py-4 sm:py-8">
          <p className="text-md sm:text-lg text-justify">
            Founded in 2023 by <strong>Dhanraj Tiwari, Ravi Bio Fuel Industries</strong>{" "}
            has swiftly established itself as a leading player in the biomass
            briquette manufacturing and trading sector. With a mission to
            promote sustainable energy solutions, the company specializes in the
            production of high-quality{" "}
            <strong>Briquettes, an Eco-friendly</strong> alternative to
            conventional fossil fuels.
          </p>
          <br className="hidden sm:block"/>
          <p className="hidden sm:block">
            Ravi Bio Fuel Industries, we are committed to harnessing renewable
            energy to reduce <strong>environmental impact</strong> and
            contribute to a greener future. Our Biomass Briquettes are crafted
            from agricultural waste, offering an efficient and cost- effective
            fuel option for industries and households alike.
            <br />
            <br />
            <strong>Dhanraj Tiwari’s</strong> vision laid the foundation for
            this enterprise, aiming to provide an environmentally conscious
            solution to <strong>India’s growing energy demands</strong>. With a
            focus on innovation, quality, and customer satisfaction, we are not
            only helping to <strong>reduce carbon emissions</strong> but also
            supporting local farmers by converting their waste into valuable
            energy resources.
          </p>
        </div>

      </div>
    </div>
  );
}

export default About;

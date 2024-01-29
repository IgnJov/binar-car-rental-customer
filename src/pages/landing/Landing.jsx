import React, { useRef } from "react";
import "./Landing.css";
import Header from "../../components/header/Header.jsx";
import Hero from "../../sections/hero/Hero.jsx";
import OurServices from "../../sections/our-services/OurServices.jsx";
import WhyUs from "../../sections/why-us/WhyUs.jsx";
import Testimonial from "../../sections/testimonial/Testimonial.jsx";
import CTABanner from "../../sections/cta-banner/CTABanner.jsx";
import FAQ from "../../sections/faq/FAQ.jsx";
import Footer from "../../components/footer/Footer.jsx";

function Landing() {
    return (
        <div>
            <Header />
            <Hero />
            <OurServices />
            <WhyUs />
            <Testimonial />
            <CTABanner />
            <FAQ />
            <Footer />
        </div>
    );
}

export default Landing;

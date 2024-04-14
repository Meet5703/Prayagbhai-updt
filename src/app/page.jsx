"use client";
import React, { useEffect, useState } from "react";
import CarouselAds from "@/components/crousel";
import Herosection from "@/components/Herosection";
import Card from "@/components/card";
import Card2 from "@/components/card2";
import CourseCard from "@/components/courseCard";
import Testimonial from "@/components/testimonialCrousel";
import Aos from "aos";
import ContactForm from "@/components/contactForm";
import VerticalTabs from "@/components/verticalTabs";
import HeroSkeleton from "@/components/skeletons/heroskele";
import CarouselSkeleton from "@/components/skeletons/crouselskele";
import CardSkeleton from "@/components/skeletons/cardskele";
import NavbarByMe from "@/components/navbar";
import NavbarSkeleton from "@/components/skeletons/navbarskele";
import Card2Skeleton from "@/components/skeletons/card2skele";
import CourseCardSkeleton from "@/components/skeletons/coursecardSkele";
import VerticalTabsSkeleton from "@/components/skeletons/verticaltabskele";
import TestimonialSkeleton from "@/components/skeletons/testimonialsSkele";
import ContactSkeleton from "@/components/skeletons/contactskele";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Aos.init();

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      {loading ? (
        <div>
          <NavbarSkeleton />
          <HeroSkeleton />
          <CarouselSkeleton />
          <CardSkeleton />
        </div> // Render loading indicator while loading is true
      ) : (
        <>
          <div className="overflow-x-hidden">
            <div className="fixed w-full  z-50">
              <NavbarByMe />
            </div>
            <div className="mt-28 md:mt-0">
              <Herosection />
              <CarouselAds />
              <Card />
              <Card2 />
              <CourseCard />
              <VerticalTabs />
              <Testimonial />
              <ContactForm />
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default Home;

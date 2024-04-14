"use client";
import JournyCard from "@/components/journyCard";
import Curriculum from "@/components/Curriculum";
import DataScience from "@/components/DataScience";
import Card2 from "@/components/card2";
import CompniesCard from "@/components/compniesCard";
import HighlightedFeatures from "@/components/featureCard";
import React, { useEffect, useState } from "react";
import img1 from "../../assets/2023-05-12_13-33-12_6kqr4btbgz9RVR35WhmQMA.jpg";
import Cirtificate from "@/components/cirtificateCard";
import PriceCard from "@/components/PriceCard";
import FAQ from "@/components/Faq";
import Testimonial from "@/components/testimonialCrousel";
import Card from "@/components/card";
import Placement from "@/components/placement";
import NavbarByMe from "@/components/navbar";
import NavbarSkeleton from "@/components/skeletons/navbarskele";
import Aos from "aos";
import DataScienceSkeleton from "@/components/skeletons/DataScienceSkele";
import CompaniesCardSkeleton from "@/components/skeletons/compniesSkeleCard";
import PlacementSkeleton from "@/components/skeletons/placementskele";
import JourneyCardSkeleton from "@/components/skeletons/journyskele";
const page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Aos.init();

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <>
          <NavbarSkeleton />
          <DataScienceSkeleton />
          <CompaniesCardSkeleton />
          <PlacementSkeleton />
          <Card2 />
          <JourneyCardSkeleton />
        </>
      ) : (
        <div className="overflow-x-hidden">
          <div className="fixed  w-full z-50">
            <NavbarByMe />
          </div>
          <div className="mt-28">
            <DataScience />
            <CompniesCard />
            <Placement />
            <Card2 />
            <JournyCard />
            <Curriculum />
            <Cirtificate />
            <Testimonial />
            <FAQ />
          </div>
        </div>
      )}
    </>
  );
};

export default page;

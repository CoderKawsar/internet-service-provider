"use client";

import CarouselSection from "@/components/ui/CarouselSection";
import FeedbackSection from "@/components/ui/FeedbackSection";
import MainContent from "@/components/ui/MainContent";
import Packages from "@/components/ui/Packages";
import { useGetAllPackagesQuery } from "@/redux/api/packageApi";

function Home() {
  const { data: packages, isLoading } = useGetAllPackagesQuery({
    limit: 3,
  });

  return (
    <main>
      <CarouselSection />
      <MainContent>
        <Packages loading={isLoading} packages={packages?.packages} />
        <FeedbackSection />
      </MainContent>
    </main>
  );
}

export default Home;

"use client";

import Packages from "@/components/ui/Packages";
import { useGetAllPackagesQuery } from "@/redux/api/packageApi";

function PackagesPage() {
  const { data, isLoading } = useGetAllPackagesQuery({});
  return (
    <div className="mt-24 mb-16">
      <Packages loading={isLoading} packages={data?.packages} />
    </div>
  );
}

export default PackagesPage;

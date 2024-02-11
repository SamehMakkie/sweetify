import React from "react";
import PageViews from "@/components/Statistics/PageViews/PageViews";
import WebsiteVisitors from "@/components/Graphs/WebsiteVisitorsBarGraph/WebsiteVisitorsBarGraph";

const Stats = () => {
  return (
    <div className="w-full flex flex-col gap-5">
      <div className="w-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-3">
        <div className="col-span-3 md:col-span-2 lg:col-span-1 w-full h-fit">
          <PageViews
            title="Page Views"
            value={89050}
            enableArrow={true}
            isIncreasing={true}
            description="21% more than last month"
          />
        </div>
        <div className="col-span-3 md:col-span-2 lg:col-span-1 w-full h-fit">
          <PageViews title="Number of Recipes" value={54} />
        </div>
        <div className="col-span-3 md:col-span-2 lg:col-span-1 w-full h-fit">
          <PageViews title="Number of Users" value={10305} />
        </div>
      </div>
      <div className="w-full grid grid-cols-3">
        <div className="col-span-3 md:col-span-3 lg:col-span-2 w-full h-fit">
          <WebsiteVisitors />
        </div>
      </div>
    </div>
  );
};

export default Stats;

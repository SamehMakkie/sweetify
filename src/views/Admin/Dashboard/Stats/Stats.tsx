"use client";
import React, { useEffect, useState } from "react";
import PageViews from "@/components/Statistics/PageViews/PageViews";
import WebsiteVisitors from "@/components/Graphs/WebsiteVisitorsBarGraph/WebsiteVisitorsBarGraph";
import { useAuth } from "@/context/AuthContext";
import getDashboardStats from "@/services/getDashboardStats";

interface StatsProps {
  pageViews: number;
  percentageIncrease: number;
  numOfRecipes: number;
  numOfUsers: number;
  websiteVisitors: number[];
}

const Stats = () => {
  const { idToken } = useAuth();
  const [stats, setStats] = useState<StatsProps | null>(null);

  const pageViewCardDescription = (percentageIncrease: number) => {
    if (percentageIncrease > 0) {
      return `${percentageIncrease}% more than last month`;
    } else if (percentageIncrease < 0) {
      return `${percentageIncrease}% less than last month`;
    }
    return "No change from last month";
  };

  useEffect(() => {
    const getData = async () => {
      const data = await getDashboardStats({ idToken });
      setStats(data);
    };
    getData();
  }, [idToken]);

  return (
    <>
      {stats ? (
        <div className="w-full flex flex-col gap-5">
          <div className="w-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-3">
            <div className="col-span-3 md:col-span-2 lg:col-span-1 w-full h-fit">
              <PageViews
                title="Page Views"
                value={stats.pageViews}
                enableArrow={stats.percentageIncrease != 0}
                isIncreasing={stats.percentageIncrease > 0}
                description={pageViewCardDescription(stats.percentageIncrease)}
              />
            </div>
            <div className="col-span-3 md:col-span-2 lg:col-span-1 w-full h-fit">
              <PageViews title="Number of Recipes" value={stats.numOfRecipes} />
            </div>
            <div className="col-span-3 md:col-span-2 lg:col-span-1 w-full h-fit">
              <PageViews title="Number of Users" value={stats.numOfUsers} />
            </div>
          </div>
          <div className="w-full grid grid-cols-3">
            <div className="col-span-3 md:col-span-3 lg:col-span-2 w-full h-fit">
              <WebsiteVisitors websiteVisitors={stats.websiteVisitors} />
            </div>
          </div>
        </div>
      ) : (
        <div className="w-screen h-screen flex justify-center items-center">
          <span className="loading loading-infinity loading-lg text-primary"></span>
        </div>
      )}
    </>
  );
};

export default Stats;

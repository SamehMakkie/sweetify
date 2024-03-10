"use client";
import React from "react";
import Chart from "react-apexcharts";

interface IProps {
  websiteVisitors: number[];
}

const WebsiteVisitorsBarGraph: React.FC<IProps> = ({websiteVisitors}) => {
  const series = [
    {
      name: "Website Visitors",
      data: websiteVisitors,
    },
  ];

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },

    dataLabels: {
      enabled: false,
    },
    colors: ["#a17b39"],
    plotOptions: {
      bar: {
        columnWidth: "40%",
        borderRadius: 10,
      },
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#fff",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      categories: [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#fff",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#dddddd",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: "dark",
    },
  };

  return (
    <div className="w-full p-5 rounded-2xl bg-dark-secondary drop-shadow-2xl">
      <h2 className="text-xl text-body-text text-center">Website visitors</h2>
      <Chart options={options} series={series} type="bar" width="100%" />
    </div>
  );
};

export default WebsiteVisitorsBarGraph;

import React from "react";
import { useTheme } from "@mui/material/styles";
import dynamic from "next/dynamic";
import BaseCard from "../shared/DashboardCard";
import { Box } from "@mui/material";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const SalesOverview = () => {
  const theme = useTheme();



  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;


  const optionssalesoverview: any = {
    grid: {
      show: true,
      borderColor: "transparent",
      strokeDashArray: 2,
      padding: {
        left: 0,
        right: 0,
        bottom: 0,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "42%",
        endingShape: "rounded",
        borderRadius: 5,
      },
    },

    colors: [primary, secondary],
    fill: {
      type: "solid",
      opacity: 1,
    },
    chart: {
      offsetX: -15,
      toolbar: {
        show: false,
      },
      foreColor: "#adb0bb",
      fontFamily: "inherit",
      sparkline: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    legend: {
      show: false,
    },
    xaxis: {
      type: "category",
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      show: true,
    },
    stroke: {
      show: true,
      width: 5,
      lineCap: "butt",
      colors: ["transparent"],
    },
    tooltip: {
      theme: "dark",
    },
  };
  const seriessalesoverview: any = [
    {
      name: "Ample Admin",
      data: [355, 390, 300, 350, 390, 180, 355, 390, 300, 350, 390, 180],
    },
    {
      name: "Pixel Admin",
      data: [280, 250, 325, 215, 250, 310, 280, 250, 325, 215, 250, 310],
    },
  ];
  return (
    <BaseCard title="Sales Overview">
      <Box className='rounded-bars'>
        <Chart
          options={optionssalesoverview}
          series={seriessalesoverview}
          type="bar"
          height="295px"
        />
      </Box>
    </BaseCard>
  );
};

export default SalesOverview;

import * as React from "react";
import AreaChart from "@cloudscape-design/components/area-chart";
import Box from "@cloudscape-design/components/box";
import Button from "@cloudscape-design/components/button";

const BeneficiariesChart = () => {
  return (
    <AreaChart
      series={[
        {
          title: "Cash in Hands",
          type: "area",
          data: [
            { x: new Date(2023, 0, 1), y: 114489 },
            { x: new Date(2023, 1, 1), y: 136935 },
            { x: new Date(2023, 2, 1), y: 141026 },
            { x: new Date(2023, 3, 1), y: 123288 },
            { x: new Date(2023, 4, 1), y: 121956 },
            { x: new Date(2023, 5, 1), y: 119868 },
            { x: new Date(2023, 6, 1), y: 132326 },
            { x: new Date(2023, 7, 1), y: 126879 },
            { x: new Date(2023, 8, 1), y: 138543 },
            { x: new Date(2023, 9, 1), y: 144309 },
            { x: new Date(2023, 10, 1), y: 121118 },
            { x: new Date(2023, 11, 1), y: 113430 },
          ],
          valueFormatter: function numberFormatter(e) {
            return Math.abs(e) >= 1e9
              ? (e / 1e9).toFixed(1).replace(/\.0$/, "") + "G"
              : Math.abs(e) >= 1e6
              ? (e / 1e6).toFixed(1).replace(/\.0$/, "") + "M"
              : Math.abs(e) >= 1e3
              ? (e / 1e3).toFixed(1).replace(/\.0$/, "") + "K"
              : e.toFixed(2);
          }
        },
        {
          title: "Account Balance",
          type: "area",
          data: [
            { x: new Date(2023, 0, 1), y: 10413 },
            { x: new Date(2023, 1, 1), y: 26582 },
            { x: new Date(2023, 2, 1), y: 45593 },
            { x: new Date(2023, 3, 1), y: 65918 },
            { x: new Date(2023, 4, 1), y: 76223 },
            { x: new Date(2023, 5, 1), y: 62385 },
            { x: new Date(2023, 6, 1), y: 83330 },
            { x: new Date(2023, 7, 1), y: 127209 },
            { x: new Date(2023, 8, 1), y: 104802 },
            { x: new Date(2023, 9, 1), y: 145899 },
            { x: new Date(2023, 10, 1), y: 121375 },
            { x: new Date(2023, 11, 1), y: 112968 },
          ],
          valueFormatter: function numberFormatter(e) {
            return Math.abs(e) >= 1e9
              ? (e / 1e9).toFixed(1).replace(/\.0$/, "") + "G"
              : Math.abs(e) >= 1e6
              ? (e / 1e6).toFixed(1).replace(/\.0$/, "") + "M"
              : Math.abs(e) >= 1e3
              ? (e / 1e3).toFixed(1).replace(/\.0$/, "") + "K"
              : e.toFixed(2);
          }
        }
      ]}
      xDomain={[
        new Date(2023, 0, 1),
        new Date(2023, 11, 31)
      ]}
      yDomain={[0, 500000]}
      i18nStrings={{
        xTickFormatter: e =>
          e
            .toLocaleDateString("en-US", {
              month: "short",
              year: "numeric"
            })
            .split(",")
            .join("\n"),
        yTickFormatter: function numberFormatter(e) {
          return Math.abs(e) >= 1e9
            ? (e / 1e9).toFixed(1).replace(/\.0$/, "") + "G"
            : Math.abs(e) >= 1e6
            ? (e / 1e6).toFixed(1).replace(/\.0$/, "") + "M"
            : Math.abs(e) >= 1e3
            ? (e / 1e3).toFixed(1).replace(/\.0$/, "") + "K"
            : e.toFixed(2);
        }
      }}
      hideFilter
      ariaLabel="Stacked area chart"
      height={200}
      // hideFilter
      xScaleType="time"
      xTitle="Months "
      yTitle="Raised Money:"
      empty={
        <Box textAlign="center" color="inherit">
          <b>No data available</b>
          <Box variant="p" color="inherit">
            There is no data available
          </Box>
        </Box>
      }
      noMatch={
        <Box textAlign="center" color="inherit">
          <b>No matching data</b>
          <Box variant="p" color="inherit">
            There is no matching data to display
          </Box>
          <Button>Clear filter</Button>
        </Box>
      }
    />
  );
}
export default BeneficiariesChart;

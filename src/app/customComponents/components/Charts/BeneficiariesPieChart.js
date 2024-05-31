import * as React from "react";
import PieChart from "@cloudscape-design/components/pie-chart";
import Box from "@cloudscape-design/components/box";
import Button from "@cloudscape-design/components/button";
const BeneficiariesPieChart = () => {
  return (
    <PieChart 
    data={[
        { title: "Daily Wage Earners", value: 160 },
        { title: "Economical Devlopment", value: 160 },
        { title: "Economical Challengers", value: 160 },
        { title: "ESP", value: 160 },
        { title: "Handicaped", value: 40 },
        { title: "House wIFE", value: 40 },
        { title: "HSP", value: 40 },


    ]}


  // hideLegend
  hideFilter
hideLegend
  innerMetricValue="100%"
  size="small"
  variant="donut"
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
  )
}

export default BeneficiariesPieChart
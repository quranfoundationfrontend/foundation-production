import * as React from "react";
import PieChart from "@cloudscape-design/components/pie-chart";
import Box from "@cloudscape-design/components/box";
import Button from "@cloudscape-design/components/button";

const RaisedTypesCharts = () => {
    return (
        <PieChart 
        data={[
            { title: "One Time Donors", value: 10 },
            { title: "Repeat Donors", value: 6 },
 
        ]}


      // hideLegend
      // hideFilter
// hideLegend
hideFilter
      innerMetricValue="100%"
      size={275}
      
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
  );
}
export default RaisedTypesCharts
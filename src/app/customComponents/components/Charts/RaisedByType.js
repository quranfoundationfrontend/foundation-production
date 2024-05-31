import * as React from "react";
import PieChart from "@cloudscape-design/components/pie-chart";
import Box from "@cloudscape-design/components/box";
import Button from "@cloudscape-design/components/button";

const RaisedByType = () => {
    return (
        <PieChart 
        data={[
            { title: "Individual", value: 10 },
            { title: "Organizations", value: 1 },
  
        ]}


      // hideLegend
      // hideFilter
hideLegend
hideFilter


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
  );
}
export default RaisedByType
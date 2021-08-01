
import {Line } from "react-chartjs-2";
import { getWorkoutData } from "@auth/auth";
import useSWR from "swr";

const Pullgraph = () => {
  const { data } = useSWR("getgraphdata", getWorkoutData, {
    refreshInterval: 1000,
  });
  
  let pullWt = []
  let pulldate = []
  
  data?.pullData.map((el)=>{
    pullWt.push(el.weight)
    pulldate.push(el.date)
  })
  

  return (
    <div>
      {data ? (
        <Line
          data={{
            labels:["0", ...pulldate],
            datasets: [
              {
                label: "Progressive overload Pull",
                data: [0, ...pullWt,800],
                
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.3,
                borderWidth: 1,
                borderWidth: 1,
              },
            ],
          }}
          height={300}
          width={400}
          options={{
            maintainAspectRatio: false,
          }}
        />
      ) : (
        <></>
      )}
    </div>
  );
};
export default Pullgraph;


import {Line } from "react-chartjs-2";
import { getWorkoutData } from "@auth/auth";
import useSWR from "swr";

const Leggraph = () => {
  const { data } = useSWR("getgraphdata", getWorkoutData, {
    refreshInterval: 1000,
  });
  
  let legWt = []
  let legdate = []
  
  data?.legData.map((el)=>{
    legWt.push(el.weight)
    legdate.push(el.date)
  })
  

  return (
    <div>
      {data ? (
        <Line
          data={{
            labels:["0", ...legdate],
            datasets: [
              {
                label: "Progressive overload Leg",
                data: [0, ...legWt,1000],
                
                
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
export default Leggraph;

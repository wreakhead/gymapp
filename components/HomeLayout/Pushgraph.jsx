
import { Bar,Line } from "react-chartjs-2";
import { getWorkoutData } from "@auth/auth";
import useSWR from "swr";

const Pushgraph = () => {
  const { data } = useSWR("getgraphdata", getWorkoutData, {
    refreshInterval: 1000,
  });
  console.log(data);
  let pushWt = []
  let pushdate = []
  
  data?.pushData.map((el)=>{
    pushWt.push(el.weight)
    pushdate.push(el.date)
  })
  console.log(pushdate)

  return (
    <div>
      {data ? (
        <Line
          data={{
            labels:[ ...pushdate],
            datasets: [
              {
                label: "Progressive overload Push",
                data: [ ...pushWt,800],
                
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.3,
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
export default Pushgraph;

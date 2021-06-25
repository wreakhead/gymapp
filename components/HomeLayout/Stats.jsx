
import { Bar } from "react-chartjs-2";
import { getWorkoutData } from "@auth/auth";
import useSWR from "swr";

const Stats = () => {
  const { data } = useSWR("getworkoutdata", getWorkoutData, {
    refreshInterval: 100,
  });
  console.log(data);
  let push = 0;
  let pull = 0;
  let leg = 0;

  data?.workout.map((workout) => {
    if (workout.type == "push") {
      if (push < workout.weight) {
        push = workout.weight;
      }
    }
    if (workout.type == "pull") {
      if (pull < workout.weight) {
        pull = workout.weight;
      }
    }
    if (workout.type == "leg") {
      if (leg < workout.weight) {
        leg = workout.weight;
      }
    }
  });

  return (
    <div>
      {data ? (
        <Bar
          data={{
            labels: ["push", "pull", "leg"],
            datasets: [
              {
                label: "# Heaviest lift",
                data: [push,pull,leg],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                ],
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
export default Stats;

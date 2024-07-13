import axios from "axios";
import React, { useEffect, useState } from "react";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend,CategoryScale,LinearScale,BarElement, PointElement, LineElement } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend,CategoryScale,LinearScale,BarElement,PointElement,LineElement);
export const DisplayChart = (props) => {
  useEffect(() => {
    getProductData();
  }, []);
  const [products, setproducts] = useState([]);
  const getProductData = async () => {
    const res = await axios.get("https://node5.onrender.com/product/getall");
    setproducts(res.data.data);
    // console.log(res.data.data)
  };

  const data = {
    labels: products?.map((prod) => prod.name),
    datasets: [
      {
        label: "product sales",
        data: products?.filter((prod) => prod.price<5000000).map((prod) => prod.price),
        borderColor: ["rgba(255, 206, 86, 0.2)"],
        backgroundColor: [
          "rgba(255, 206, 86, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        pointBackgroundColor: "rgba(255, 206, 86, 0.2)",
        borderWidth: 2,
      },
    ],
  };

  return <div style={{height:"400px",width:"400px"}}>
    {
        props.chartType === "bar" && <Bar data={data} />
    }
    {
        props.chartType === "line" && <Line data={data} />
    }
    {
        props.chartType === "pie" && <Pie data={data} />
    }
    {
        props.chartType === "doughnut" &&<Doughnut data={data} />
    }
  </div>;
};

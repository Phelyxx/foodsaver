import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell, PolarAngleAxis, RadialBarChart, RadialBar } from "recharts";

const data = [{'month': 1, 'Vegetables': 35.1, 'Bakery': 14.7, 'Meats': 12.6, 'Grains': 6.3, 'Dairy': 11.7}, {'month': 2, 'Vegetables': 32.7, 'Bakery': 15.3, 'Meats': 10.2, 'Grains': 5.0, 'Dairy': 8.9}, {'month': 3, 'Vegetables': 32.5, 'Bakery': 11.7, 'Meats': 9.6, 'Grains': 4.7, 'Dairy': 7.8}, {'month': 4, 'Vegetables': 27.1, 'Bakery': 10.7, 'Meats': 7.9, 'Grains': 4.7, 'Dairy': 8.1}, {'month': 5, 'Vegetables': 21.3, 'Bakery': 10.0, 'Meats': 6.6, 'Grains': 4.0, 'Dairy': 6.2}, {'month': 6, 'Vegetables': 20.2, 'Bakery': 9.9, 'Meats': 6.2, 'Grains': 3.0, 'Dairy': 5.4}, {'month': 7, 'Vegetables': 18.2, 'Bakery': 8.4, 'Meats': 5.8, 'Grains': 2.8, 'Dairy': 5.5}, {'month': 8, 'Vegetables': 13.8, 'Bakery': 8.7, 'Meats': 4.2, 'Grains': 2.7, 'Dairy': 5.1}, {'month': 9, 'Vegetables': 10.5, 'Bakery': 7.4, 'Meats': 3.5, 'Grains': 2.3, 'Dairy': 4.0}, {'month': 10, 'Vegetables': 7.6, 'Bakery': 5.5, 'Meats': 3.1, 'Grains': 2.0, 'Dairy': 3.5}, {'month': 11, 'Vegetables': 7.0, 'Bakery': 4.0, 'Meats': 2.7, 'Grains': 1.6, 'Dairy': 3.0}, {'month': 12, 'Vegetables': 4.2, 'Bakery': 2.6, 'Meats': 2.7, 'Grains': 1.6, 'Dairy': 1.7}] 

const barData = [
  { name: "Vegetables", value: 88 },
  { name: "Bakery", value: 82 },
  { name: "Meats", value: 79 },
  { name: "Grains", value: 75 },
  { name: "Dairy", value: 86 },
];

const colorMapping = {
  "Vegetables": "#8884d8",
  "Bakery": "#82ca9d",
  "Meats": "#ffc658",
  "Grains": "#ff7300",
  "Dairy": "#ff0000",
};

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF0000"];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <h5 className="label">{`${payload[0].payload.name}: ${payload[0].value}%`}</h5>
      </div>
    );
  }

  return null;
};

const sortedBarData = barData.sort((a, b) => a.value - b.value);

const barDataWithColors = sortedBarData.map((item) => ({
  ...item,
  fill: colorMapping[item.name],
}));

const monthMapping = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December',
};

const CustomLineChartTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip" style={{
        backgroundColor: '#f5f5f5',
        border: '1px solid #ccc',
        padding: '10px',
        borderRadius: '5px'
      }}>
        <div className="label" style={{ marginBottom:"2px" }}>{`Month: ${monthMapping[label]}`}</div>
        {payload.map((item, index) => (
          <div key={index} style={{ color: item.color, margin: '2px' }}>
            {`${item.name}: ${item.value} kg`}
          </div>
        ))}
      </div>
    );
  }

  return null;
};


const Dashboard = () => {
  const moneySaved = 3360;
  const moneyGoal = 5000;

  return (
    <Container className="mt-2 mb-5">
      <Row className="mt-2 mb-5">
        <Col md={6}>
          <h3>Tendency of spoilage</h3>
          <LineChart width={500} height={300} data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip content={<CustomLineChartTooltip />} />
            <Legend />
            <Line type="monotone" dataKey="Vegetables" stroke="#8884d8" />
            <Line type="monotone" dataKey="Bakery" stroke="#82ca9d" />
            <Line type="monotone" dataKey="Meats" stroke="#ffc658" />
            <Line type="monotone" dataKey="Grains" stroke="#ff7300" />
            <Line type="monotone" dataKey="Dairy" stroke="#ff0000" />
          </LineChart>
        </Col>
        <Col md={6}>
          <h3>Reduction in food waste</h3>
          <RadialBarChart
            width={500}
            height={300}
            cx={250}
            cy={150}
            innerRadius={70}
            outerRadius={150}
            barSize={40}
            data={barDataWithColors}
          >
            <Legend
              iconSize={10}
              layout="vertical"
              verticalAlign="middle"
              wrapperStyle={{
                top: "50%",
                left: 0,
                transform: "translate(0, -50%)",
                lineHeight: "24px",
              }}
            />
            <PolarAngleAxis
              type="number"
              domain={[0, 100]}
              angleAxisId={0}
              tick={false}
            />
          <RadialBar
            minAngle={15}
            label={{ 
              position: "insideStart", 
              fill: "#00",
              formatter: (value) => `${value}%`
            }}
            background
            clockWise
            dataKey="value"
          />

            <Tooltip content={<CustomTooltip />} />
            <text
              x={250}
              y={150}
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-center"
              style={{ fontWeight: 'bold', fontSize: '1.0em' }}
            >
              Average: 84%
            </text>
          </RadialBarChart>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h3>Money saved</h3>
          <ProgressBar
            now={moneySaved}
            max={moneyGoal}
            label={`$${moneySaved} / $5000`}
            variant="success"
            style={{ height: '50px', fontSize: '1.5em' }}
            className="mb-2"
          />        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;

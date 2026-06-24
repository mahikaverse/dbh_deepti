import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", inquiries: 40 },
  { month: "Feb", inquiries: 65 },
  { month: "Mar", inquiries: 95 },
  { month: "Apr", inquiries: 130 },
  { month: "May", inquiries: 170 },
  { month: "Jun", inquiries: 240 },
];

export default function DashboardChart() {
  return (
    <div className="h-[350px]">

      <ResponsiveContainer>

        <LineChart data={data}>

          <XAxis dataKey="month" />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="inquiries"
            stroke="#D6A354"
            strokeWidth={3}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}
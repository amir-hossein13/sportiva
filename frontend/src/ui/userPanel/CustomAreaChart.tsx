import {
  AreaChart,
  Area,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts';

const data = [
  { name: 'فروردین', value: 100 },
  { name: 'اردیبهشت', value: 200 },
  { name: 'خرداد', value: 150 },
  { name: 'تیر', value: 300 },
  { name: 'مرداد', value: 250 },
  { name: 'شهریور', value: 400 },
];

const CustomAreaChart = () => {
  return (
    <div className="rtl h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4ea1f5" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#4ea1f5" stopOpacity={0} />
            </linearGradient>
          </defs>

          {/* Optional: Remove grid and axis for clean look */}
          <XAxis dataKey="name" hide />
          <YAxis hide />
          <CartesianGrid vertical={false} horizontal={false} />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="value"
            stroke="#4ea1f5"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorBlue)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomAreaChart;

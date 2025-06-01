
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { cn } from '@/lib/utils';
import { ProgressDataPoint } from '@/types'; // Import the type

interface ProgressChartProps {
  data: ProgressDataPoint[]; // Use the imported type
  className?: string;
}

export default function ProgressChart({ data, className }: ProgressChartProps) {
  return (
    <div className={cn('cyber-card', className)}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-medium">Your Progress</h3>
          <p className="text-sm text-cyber-text-secondary">Last 7 days performance</p>
        </div>
      </div>
      
      <div className="h-60 mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: -20,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(139, 92, 246, 0.1)" />
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#94A3B8', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#94A3B8', fontSize: 12 }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1A1F2C', 
                borderColor: 'rgba(139, 92, 246, 0.3)',
                borderRadius: '8px',
                color: '#E2E8F0'
              }}
            />
            <Area 
              type="monotone" 
              dataKey="score" 
              stroke="#8B5CF6" 
              fillOpacity={1} 
              fill="url(#colorScore)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

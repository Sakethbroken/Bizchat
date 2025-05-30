import { LineChart } from '@mui/x-charts/LineChart';
import downbutton from '../assets/icons/downbutton.png';
import clock from '../assets/icons/clock.png';

export default function Graphs({ title }) {
  const xValues = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const yValues = [38, 37, 36, 35.5, 34, 34, 34, 33.5, 33];

  const xLabels = {
    0: 'Mar 2023',
    2: 'Sep 2023',
    4: 'Mar 2024',
    6: 'Sep 2024',
    8: 'Mar 2025',
  };

  return (
    <div className="bg-white p-3 sm:p-4 pb-6 w-full sm:w-[426px] mx-auto">
      <div className="flex flex-col">
        <h1 className="font-bold text-center mb-2 text-base sm:text-lg">{title}</h1>

        {/* Chart */}
        <div className="w-full flex justify-center">
          <LineChart
            xAxis={[
              {
                data: xValues,
                valueFormatter: (val) => xLabels[val] || '',
                scaleType: 'linear',
              },
            ]}
            series={[
              {
                data: yValues,
                area: true,
                color: '#1A365D',
                curve: 'monotoneX',
              },
            ]}
            width={350}
            height={200}
            className="sm:!w-[450px] sm:!h-[200px]"
            sx={{
              '.MuiLineElement-root': { strokeWidth: 2 },
              '.MuiMarkElement-root': {
                stroke: '#1A365D',
                strokeWidth: 2,
                fill: '#fff',
              },
              '.MuiAreaElement-root': {
                fill: '#CBD5E0',
                opacity: 0.5,
              },
            }}
          />
        </div>

        {/* Stats */}
        <div className="flex gap-8 sm:gap-20 justify-center mt-4 mb-8">
          {/* Growth */}
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <img src={downbutton} alt="" className="w-5 h-5 mr-1" />
              <h1 className="font-semibold text-sm sm:text-2xl">-8%</h1>
            </div>
            <h1 className="text-xs sm:text-sm text-gray-700 text-center">
              Total partners growth
            </h1>
          </div>

          {/* Tenure */}
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <img src={clock} alt="" className="w-5 h-5 mr-1" />
              <h1 className="font-semibold text-sm sm:text-2xl">3.2 years</h1>
            </div>
            <h1 className="text-xs sm:text-sm text-gray-700 text-center">
              Median tenure
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

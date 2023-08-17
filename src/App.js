import './App.css';
import { visualizations } from './components/preset'
import MyAppWithSplunkLineChart from './components/linechats';
import MyAppWithSplunkMap from './components/map';
import SplunkThemeProvider from '@splunk/themes/SplunkThemeProvider';
import { useState } from 'react';


function App() {
  // 変数定義
  // const data;
  // const query;

  // データフェッチ
  // fetch('URL', {
  //  method: 'POST',
  //  body: { query } 
  // }).then((res) => {
  //  if(!res){ error } 
  //  return res.json()
  // }).then((resdata) => {
  //  data = resdata 
  // })

  const [theme, setTheme] = useState("light");
  // const theme = 'light'
  
  // LineChartデータ
  const linedata = {
    primary: {
      requestParams: { offset: 0, count: 20 },
      data: {
        fields: [
          {
            name: '_time',
          },
          {
              name: 'count',
              type_special: 'count',
          },
          {
              name: 'percent',
              type_special: 'percent',
          },
        ],
        columns: [
          [
            '2018-05-02T18:10:46.000-07:00',
            '2018-05-02T18:11:47.000-07:00',
            '2018-05-02T18:12:48.000-07:00',
            '2018-05-02T18:13:49.000-07:00',
            '2018-05-02T18:15:50.000-07:00',
          ],
          ['600', '525', '295', '213', '122', '19'],
          ['87.966380', '50.381304', '60.023780', '121.183272', '70.250513', '90.194752'],
        ],
      },
      meta: { totalCount: 20 },
    },
  }

  const toLight = () => {
    setTheme('light')
  }

  const toDark = () => {
    setTheme('dark')
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-700 border-4 h-screen w-screen flex flex-col justify-between">
      <header className="bg-gray-500 text-white border-2 h-16">
        This is Header
      </header>
      {/* メイン */}
      <div className='bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white border-2 h-full w-full flex flex-col'>
        <div className='flex justify-between'>
          <p className='text-lg bold m-2'>This is Main</p>
          <div className='px-4'>
            <button className='rounded-lg border-2 bg-gray-400 text-gray-800 m-2 px-2 hover:bg-gray-300 active:bg-gray-200' onClick={toLight}>light</button>
            <button className='rounded-lg border-2 bg-gray-800 text-gray-300 m-2 px-2 hover:bg-gray-500 active:bg-gray-400' onClick={toDark}>dark</button>
          </div>
        </div>
        <SplunkThemeProvider family="prisma" density="compact" colorScheme={theme}>
          <MyAppWithSplunkLineChart
            dataSource={linedata}
          />
          <MyAppWithSplunkMap />
        </SplunkThemeProvider>
      </div>
      <footer className='bg-gray-500 text-white border-2 h-8 bottom-0'>
        This is footer
      </footer>
    </div>
  );
}

export default App;

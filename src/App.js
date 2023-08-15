import './App.css';
import { visualizations } from './components/preset'
import MyAppWithSplunkLineChart from './components/linechats';
import MyAppWithSplunkMap from './components/map';

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


  return (
    <div className="bg-gray-100 dark:bg-gray-700 border-4 h-screen w-screen flex flex-col justify-between">
      <header className="bg-gray-500 text-white border-2 h-16">
        This is Header
      </header>
      {/* メイン */}
      <div className='bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white border-2 h-full w-full flex flex-col'>
        This Is main
        <MyAppWithSplunkLineChart
          // props = {data}
        />
        <MyAppWithSplunkMap />
        <map />
      </div>
      <footer className='bg-gray-500 text-white border-2 h-8 bottom-0'>
        This is footer
      </footer>
    </div>
  );
}

export default App;

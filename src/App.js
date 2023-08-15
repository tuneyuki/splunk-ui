import './App.css';

function App() {
  return (
    <div className="bg-gray-800 border-4 h-screen w-screen flex flex-col justify-between">
      <header className="bg-gray-500 text-white border-2 h-16">
        This is Header
      </header>
      {/* メイン */}
      <div className='bg-gray-700 text-white border-2 h-full w-full flex'>
        This Is main
      </div>
      <footer className='bg-gray-500 text-white border-2 h-8 bottom-0'>
        This is footer
      </footer>
    </div>
  );
}

export default App;

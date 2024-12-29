import './App.css'
import AppRoutes from './routes/AppRoutes';
import Sidebar from './components/Sidebar';

function App() {

  return (
    <div className="flex h-screen bg-dark-chocolate p-4 gap-4 max-426:gap-2 max-426:p-2">
      <Sidebar />
      <div className="flex-grow max-700:overflow-y-scroll max-700:overflow-x-hidden">
        <AppRoutes />
      </div>
    </div>
  )
}

export default App

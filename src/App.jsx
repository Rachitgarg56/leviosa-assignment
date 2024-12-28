import './App.css'
import AppRoutes from './routes/AppRoutes';
import Sidebar from './components/Sidebar';

function App() {

  return (
    <div className="flex h-screen bg-dark-chocolate p-4 gap-4">
      <Sidebar />
      <div className="flex-grow">
        <AppRoutes />
      </div>
    </div>
  )
}

export default App

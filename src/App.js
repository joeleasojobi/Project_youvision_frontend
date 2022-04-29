import logo from './logo.svg';
import './App.css';
import StudentView from './Components/StudentView';
import DoctorView from './Components/DoctorView';

function App() {
  return (
    <div className="App">
      <DoctorView/>
      <StudentView/>
    </div>
  );
}

export default App;

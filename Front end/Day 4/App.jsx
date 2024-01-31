// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserHome from "./pages/UserHome";
import Service from "./pages/Service";
import About from './pages/About';
import Contact from './pages/Contact';
import User_Login from './pages/User_Login';
import User_Register from './pages/User_Register';
import UserDashboard from "./pages/UserDashboard";
import Profile from './pages/Profile';
import DeleteBooking from './pages/DeleteBooking';
import BookService from './pages/BookService';
import EditBooking from './pages/EditBooking';
import BookingHistory from './pages/BookingHistory';
import MainPage from "./pages/Main";


import AdminLogin from './pages/Admin_Login';
import AdminHome from "./pages/AdminHome";
import AddService from './pages/AddService';
import EditService from './pages/EditService';
import DeleteService from './pages/DeleteService';
import ViewBooking from './pages/ViewBooking';
import ChangeStatus from './pages/ChangeStatus';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path="/Admin_Login" element={<AdminLogin/>}/>
        <Route path="/AdminHome" element={<AdminHome/>}/>
        <Route path="/AddService" element={<AddService/>}/>
        <Route path="/EditService" element={<EditService/>}/>
        <Route path="/DeleteService" element={<DeleteService/>}/>
        <Route path="/ViewBooking" element={<ViewBooking/>}/>
        <Route path="/ChangeStatus" element={<ChangeStatus/>}/>

        <Route path="/Main" element={<MainPage/>}/>

        <Route path="/UserHome" element={<UserHome/>}/>
        <Route path='/Service' element={<Service />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/User_Login' element={<User_Login />} />
        <Route path='/User_Register' element={<User_Register />} />
        <Route path='/UserDashboard' element={<UserDashboard/>}/>
        <Route path='/BookService' element={<BookService/>}/>
        <Route path='/EditBooking' element={<EditBooking/>}/>
        <Route path='/DeleteBooking' element={<DeleteBooking/>}/>
        <Route path='/BookingHistory' element={<BookingHistory/>}/>
        <Route path='/Profile' element={<Profile/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;


import { Route, Routes } from "react-router"
import About from './pages/About'
import RootLayOut from "./components/RootLayOut"
import HomePage from "./pages/HomePage"
import NotFound from "./components/NotFound"
import PersonDetail from "./pages/PersonDetail"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={< RootLayOut />} >
          <Route index element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="detail/:id" element={<PersonDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer position="top-right" autoClose='1000' />
    </>
  )
}
export default App

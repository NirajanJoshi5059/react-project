import { Route, Routes } from "react-router"
import RootLayOut from "./components/RootLayOut"
import HomePage from "./pages/HomePage"
import NotFound from "./components/NotFound"
import PersonDetail from "./pages/PersonDetail"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InfoFrom from "./components/InfoFrom"
import UpdateForm from "./components/UpdateForm"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={< RootLayOut />} >
          <Route index element={<HomePage />} />
          <Route path="infoform" element={<InfoFrom />} />
          <Route path="update/:id" element={<UpdateForm />} />
          <Route path="detail/:id" element={<PersonDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer position="top-right" autoClose='1000' />
    </>
  )
}
export default App

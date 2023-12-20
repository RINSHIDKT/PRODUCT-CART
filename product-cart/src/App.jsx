import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Adminlogin from './Components/Body/Admin/Adminlogin/Adminlogin'
import Admincreate from './Components/Body/Admin/Admincreate/Admincreate'
import Adminhome from './Components/Body/Admin/Adminhome/Adminhome'
import Adminforgotpass from './Components/Body/Admin/Adminforgotpass/Adminforgotpass'
import Adminforgotemail from './Components/Body/Admin/Adminforgotemail/Adminforgotemail'
import Admincategory from './Components/Body/Admin/Admincategory/Admincategory'



function App() {

  return (
    <>
    <BrowserRouter>
          <Routes>
                <Route path="/adminlogin" Component={Adminlogin}/>
                <Route path="/admincreate" Component={Admincreate}/>
                <Route path="/adminhome" Component={Adminhome}/>
                <Route path="/adminforgotpass" Component={Adminforgotpass}/>
                <Route path="/adminforgotemail" Component={Adminforgotemail}/>
                <Route path="/admincategory" Component={Admincategory}/>
          </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

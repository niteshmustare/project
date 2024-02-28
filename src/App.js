import Navbar from "./components/Navbar";
import './App.css';
import Home from "./routes/Home";
import About from "./routes/About";
import Defence from "./routes/Defence";
import Finance from "./routes/Finance";
import Education from "./routes/Education";
import { Routes, Route, Router } from "react-router-dom";
import { GetAllUsers } from "./components/GetAllUsers";
import Login from "./routes/Login";
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import Card3 from "./components/Card 3";
import Card7 from "./components/Card7";
import Card4 from "./components/Card4";
import Card5 from "./components/Card5";
import Card6 from "./components/Card6";
import Card8 from "./components/Card8";
import Card9 from "./components/Card9";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import { EquipmentList, Equipments } from "./components/EquipmentsList";
import { RegistrationForm } from "./components/RegistrationForm";
import { Contact } from "./components/Contact";
import { ParliamentAffairs } from "./components/ParliamentAffairs";
import { EditEquipment } from "./components/EditEquipment";
import { SignUp } from "./components/SignUp";
import { Loggedin } from "./routes/Loggedin";
import { PrivateAdminRoute, PrivateEmpRoute, PrivateExaminerRoute, PrivateRoute, PrivateStudentRoute } from "./routes/privateRoute";
import { AdminLogin } from "./routes/Adminlogin";
import { WeaponDetails } from "./components/WeaponDetails";
import { Profile } from "./components/Profile";
import { AdminLoggedin } from "./routes/AdminLoggedin";
import { UpdateUser } from "./components/UpdateUser";
import { InsertEquipment } from "./components/InsertEquipment";
import {InsertManufacturer} from "./components/InsertManufacturer"
 import SignInForm from "./components/NewSignIn";
 import SignUpForm from "./components/NewSignUp";
 import NewApp from "./components/NewApp";
import ResetPassword from "./routes/ResetPassword";
import { GetAllQuiz } from "./components/quiz/GetAllQuiz";
import { GetAllQuestion } from "./components/quiz/GetAllQuestion";
import { GetQuestionsFromQuiz } from "./components/quiz/GetQuestionsFromQuiz";
import SubmitQuiz from "./components/quiz/SubmitQuiz";
import { AttemptQuiz } from "./components/quiz/AttemptQuiz";
import CreateQuiz from "./components/quiz/CreateQuiz";
import { AddQuestion } from "./components/quiz/AddQuestion";
import { EquipmentSortedList } from "./components/EquipmentSortedList";
import { UnauthorizedPage } from "./routes/UnauthorizedPage";


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/defence" element={<Defence/>}/>
      <Route path="/finance" element={<Finance/>}/>
      <Route path="/education" element={<Education/>}/>
      <Route path="/login" element={<Login/> }/>
      <Route path="/loggedin" element={<Loggedin><Login/></Loggedin> }/>
      <Route path="/admin-login" element={<AdminLogin/>}/>
      <Route path="/adminloggedin" element={<AdminLoggedin><AdminLogin/></AdminLoggedin>}/>
      
      <Route path="/card1" element={<Card1/>}/>
      <Route path="/card2" element={<Card2/>}/>
      <Route path="/card3" element={<Card3/>}/>
      <Route path="/card4" element={<PrivateExaminerRoute><Card4/></PrivateExaminerRoute>}/>
      <Route path="/card5" element={<Card5/>}/>
      <Route path="/card6" element={<Card6/>}/>
      <Route path="/card7" element={<Card7/>}/>
      <Route path="/card8" element={<PrivateExaminerRoute><Card8/></PrivateExaminerRoute>}/>
      <Route path="/card9" element={<Card9/>}/>

      <Route path="/aboutus" element={<AboutUs/>}/>
      <Route path="/ParliamentAffairs" element={<ParliamentAffairs/>} />
      <Route path="/Equipments" element={<PrivateEmpRoute><EquipmentList/></PrivateEmpRoute>}></Route>
      {/* <Route path="/registration-form" element={<RegistrationForm/>}></Route> */}
      <Route path="/contact-us" element={<Contact/>}></Route>
      <Route path="/https://mod.gov.in/annual-report-archive/" element={<Footer/>}/>
      <Route path="/https://finmin.nic.in/" element={<Footer/>}/>
      <Route path="/https://www.education.gov.in/" element={<Footer/>}/>
      <Route path="/https://data.gov.in/" element={<Footer/>}/>

      <Route path="/EditEquipment" element={<PrivateEmpRoute><EditEquipment/></PrivateEmpRoute>}></Route>
      <Route path="/equipmentSortedList" element={<PrivateEmpRoute><EquipmentSortedList/></PrivateEmpRoute>}/>
      <Route path="/WeaponDetails" element={<PrivateEmpRoute><WeaponDetails/></PrivateEmpRoute>}></Route>
      <Route path="/insertEquipment" element={<PrivateEmpRoute><InsertEquipment/></PrivateEmpRoute>}></Route>
      <Route path="/insertManufacturer" element={<PrivateAdminRoute><InsertManufacturer/></PrivateAdminRoute>}></Route>

      <Route path="/profile" element={<PrivateRoute><Profile/></PrivateRoute>}></Route>
      <Route path="/getAllUsers" element={<PrivateAdminRoute><GetAllUsers/></PrivateAdminRoute>}></Route>
      <Route path="/updateUser/:id" element={<PrivateRoute><UpdateUser/></PrivateRoute>}></Route>

      <Route path="/signInForm" element={<SignInForm/>}/>
      <Route path="/signUpForm" element={<SignUpForm/>}/>
      <Route path="/newApp" element={<NewApp/>}/>
      <Route path="/resetPassword" element={<ResetPassword/>}/>
      <Route path="/signUp" element={<SignUp/>}/>


      <Route path="/getAllQuiz" element={<PrivateStudentRoute><GetAllQuiz/></PrivateStudentRoute>}/>
      <Route path="/getAllQuestion" element={<GetAllQuestion/>}/>
      <Route path="/getQuestionsFromQuiz" element={<PrivateRoute><GetQuestionsFromQuiz/></PrivateRoute>}/>
      <Route path="/submitQuiz" element={<PrivateStudentRoute><SubmitQuiz/></PrivateStudentRoute>}/>
      <Route path="/attemptQuiz" element={<PrivateStudentRoute><AttemptQuiz/></PrivateStudentRoute>}/>
      <Route path="/createQuiz" element={<PrivateExaminerRoute><CreateQuiz/></PrivateExaminerRoute>}/>
      <Route path="/addQuestion" element={<PrivateExaminerRoute><AddQuestion/></PrivateExaminerRoute>}/>
      <Route path="/unauthorizedPage" element={<UnauthorizedPage/>} />
    </Routes>  
    </div>
  );
}

export default App;

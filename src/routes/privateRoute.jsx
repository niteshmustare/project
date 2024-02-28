import { Navigate } from "react-router-dom"
import { isAdminAuthenticated, isAuthenticated, isEMPAuthenticated, isExaminerAuthenticated, isStudentAuthenticated } from "../Service/Authentication" 


export function PrivateRoute(props) {  
    if (isAuthenticated()) {
        return props.children
    } else  {
       return <Navigate to="/loggedin"></Navigate>
    }
}
export function PrivateAdminRoute(props) {  
    if (isAdminAuthenticated() ) {
        return props.children
    } else if( ! (localStorage.getItem('token')) ) {
       return <Navigate to="/adminloggedin"></Navigate>
    } else{
        return <Navigate to="/unauthorizedPage"></Navigate>
    }
}

export function PrivateStudentRoute(props) {  
    if (isStudentAuthenticated() || isAdminAuthenticated() || isExaminerAuthenticated()) {
        return props.children
    } else if( ! (localStorage.getItem('token')) ) {
        return <Navigate to="/loggedin"></Navigate>
    } else{
        return <Navigate to="/unauthorizedPage"></Navigate>
    }
}

export function PrivateExaminerRoute(props) {  
    if (isExaminerAuthenticated() || isAdminAuthenticated()) {
        return props.children
    } else if( ! (localStorage.getItem('token')) ) {       
       return <Navigate to="/loggedin"></Navigate>
    } else {
        return <Navigate to="/unauthorizedPage"></Navigate>
    }
}

export function PrivateEmpRoute(props) {  
    if (isEMPAuthenticated() || isAdminAuthenticated()) {
        return props.children
    } else if( ! (localStorage.getItem('token')) ) {
       return <Navigate to="/loggedin"></Navigate>
    } else{
        return <Navigate to="/unauthorizedPage"></Navigate>
    }
}

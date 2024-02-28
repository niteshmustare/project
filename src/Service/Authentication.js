
const token = localStorage.getItem('token');
export function isAdminAuthenticated() {
      return ((localStorage.getItem("role") === 'ADMIN') && token )? true : false;    
  }
  
  export function isAuthenticated(){
      return localStorage.getItem("token")? true : false;
  }
  export function isEMPAuthenticated(){
    console.log("isEMPAuthenticatied");
      return ((localStorage.getItem("role") === 'EMP') && token )? true : false;
  }
  
  export function isStudentAuthenticated(){
      return ((localStorage.getItem("role") === 'USER' ) && token )? true : false;
  }
  
  export function isExaminerAuthenticated(){
      return ((localStorage.getItem("role") === 'EXAMINER') && token)? true : false;
  }

export function AdminLogout() { 

    if (localStorage.getItem("role") === "ADMIN") {
      localStorage.removeItem("token");
      localStorage.removeItem("role");
       
      return true ;
    }else 
    return false ;
  }

  export function UserLogout() { 
    if (localStorage.getItem("role") !== "ADMIN" ) {
        localStorage.removeItem("role")
      localStorage.removeItem("token");
      return true;
    }else 
    return false ;
  }

  export function AdminLoggedIn() { 
    return ((localStorage.getItem("token") !== null) &&  (localStorage.getItem("role") === 'ADMIN'));
  }

  // export function UserLoggedin() { 
  //   return localStorage.getItem("token") !== null ;
  // }
  export function UserLoggedin() { 
    return ((localStorage.getItem("token") !== null) && (localStorage.getItem("role") !== 'ADMIN'));
}



  
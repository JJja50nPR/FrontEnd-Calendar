import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../../hooks";
import { useEffect } from "react";

export const AuthRouter = () => {

  const { status, checkAuthToken } = useAuthStore();

  useEffect(() => {

    checkAuthToken();


  }, [status]);


  if( status === 'checking '){
    return(
      <h3>Cargando...</h3>
    )
  }


  return (
    <>
      <Outlet/>

      {
        ( status === 'authenthicated')
        ? <Navigate to={'/'}/>
        : null
      }
    </>
  )
}

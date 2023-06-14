import { Navigate, Outlet } from "react-router-dom"
import { useAuthStore } from "../../hooks";
import { useEffect } from "react";

export const CalendarRouter = () => {

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
        ( status === 'not-authenthicated')
        ? <Navigate to={'/auth/'}/>
        : null
      }
    </>
  )
}

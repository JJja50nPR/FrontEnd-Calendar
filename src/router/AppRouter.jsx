import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthRouter, AuthRoutes } from "../auth/";
import { CalendarRouter, CalendarRoutes } from "../calendar/";


export const AppRouter = () => {


    const router = createBrowserRouter([

       
       {
            path: "/auth/*",
            element: (
                <AuthRouter/>
            ),
            children: AuthRoutes,

        },

        {
            path: "/",
            element: (
                <CalendarRouter/>
            ),
            children: CalendarRoutes
        },

        {
           path: "/*",
           element: <Navigate to={"/"}/>
       },



    ]);



  return <RouterProvider router={ router  }/>
}

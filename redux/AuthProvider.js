"use client"

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
import { selectCurrentUser } from "./features/auth/authSlice";
import Loader from "../components/Loader";

const protectedRoutes = [
    "/dashboard/home",
  ]
export function AuthProvider({children}){

    const [user, setUser] = useState(null)
    const currentUser = useSelector(selectCurrentUser)
  
    const pathname = usePathname();
    const router = useRouter()
  
    console.log("currentUser", currentUser)


    useEffect(() => {
        if(!currentUser && protectedRoutes.includes(pathname)) router.push('/login')
    if(currentUser) setUser(currentUser)
    },[])


  if(!user && protectedRoutes.includes(pathname)) return <Loader />

    return <> {children} </>;
}
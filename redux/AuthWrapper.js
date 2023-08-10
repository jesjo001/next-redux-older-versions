"use client"

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "./features/auth/authSlice";
import Loading from "../Components/Loading"
const protectedRoutes = [
    "/dashboard/home",
    "/dashboard/users",
]

export function AuthWrapper({children}){
    const [user, setUser] = useState(null)
    const currentUser = useSelector(selectCurrentUser)
  
    const pathname = usePathname();
    const router = useRouter()
  
    console.log("currentUser", currentUser)


    useEffect(() => {
        if(!currentUser && protectedRoutes.includes(pathname)) router.push('/login')
    },[])

    useEffect(() => {
        if(currentUser) setUser(currentUser)
    },[currentUser])


    if(!user && protectedRoutes.includes(pathname)) return <Loading />
    
    return <>{children}</>
}
import React, { useEffect, useState } from 'react'
import { Navigate,useLocation} from 'react-router-dom'

export default function NotFound() {
const [lastPage, setLastPage] = useState()

    const location = useLocation();
    const path = location.pathname;
    if(path != "/not-found") {
    localStorage.setItem('lastPage', path);

    }
    useEffect(()=>{
        setLastPage(localStorage.getItem("lastPage"));
    })
  return (
    <>
    <h1>NotFound</h1>
    {lastPage}
    {/* <Navigate replace to="/not-found" /> */}
    <Navigate replace to="/not-found" />

  </>
  )
}

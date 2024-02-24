import React from "react";
import { Sidebar } from "flowbite-react";
import { HiUser, HiArrowSmRight, HiDocumentText } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import {  useDispatch,useSelector } from "react-redux";
import { signoutSuccess } from "../redux/user/userSlice";

export default function DashSidebar() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  const dispatch=useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  const handleSignOut= async()=>{
    try{
       const res = await fetch ('/api/user/signout',{
        method:'POST'
       });
       const data = await res.json();
       if(!res.ok){
        console.log(data.message)
       }else{
        dispatch(signoutSuccess());
       }
    }catch(error){
   console.log(error.message);
    }

  }

  return (
    <Sidebar className="w-full md:w-56">
      <Sidebar.Items>
        <Sidebar.ItemGroup className="flex flex-col gap-1">
          <Link to="/dashboard?tab=profile">
            <Sidebar.Item
              active={tab === "profile"}
              icon={HiUser}
              label={currentUser.isAdmin ? "Admin" : "User"}
              labelColor="dark"
              as ='div'
            >
             <span>Profile</span>
            </Sidebar.Item>
          </Link>
          {currentUser.isAdmin && (
            <Link to="/dashboard?tab=posts" >
            <Sidebar.Item
              active={tab === "posts"}
              icon={HiDocumentText}
              as ='div'
            >
              <span>posts</span>
            </Sidebar.Item>
          </Link>
          )}
         
          <Sidebar.Item onClick={handleSignOut} icon={HiArrowSmRight} className='cursor-pointer' as='div'>
           <span>Sign Out</span> 
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

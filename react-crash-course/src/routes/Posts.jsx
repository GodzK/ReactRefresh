import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Postlist from '../components/Postlist'
function Posts() {
  return ( 
    <> 
     <Outlet />
    <main>
     <Postlist/>
    </main>
    </>
    
    
    
    );
}

export default Posts;
export async function loader(){
  const response = await fetch('http://localhost:8080/posts');
  const resData = await response.json();
  return resData.posts;
}

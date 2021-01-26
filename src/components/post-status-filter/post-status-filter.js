import React from 'react';
import './post-status-filter.css';


 const PostFilter = ({onFilter})=>{
    const important = 'important'
    const all = 'all'

    return(
        <div>
             <button onClick ={()=>onFilter(important)}>важные записи</button>
            <button onClick = {()=>onFilter(all)}>все записи</button>
           
        </div>
    )
}
 
 export default PostFilter;


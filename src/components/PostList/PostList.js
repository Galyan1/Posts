import React from 'react';
import ListItem from '../ListItem/ListItem';
import './post-list.css'

const PostList = ({posts, onDelete}) =>{
    const elements = posts.map(item =>{
        return(
            <li key = {item.id} className='list-group-item'>
                <ListItem 
                label = {item.label} 
                onDelete = {()=> onDelete(item.id)}/>
            </li>
        )
    });

    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}


export default PostList;
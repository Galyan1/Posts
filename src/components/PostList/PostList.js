import React from 'react';
import ListItem from '../ListItem/ListItem';
import './post-list.css'

const PostList = ({posts, onDelete, onToggleLike, onToggleImportant}) =>{
    const elements = posts.map(item =>{
        return(
            <li key = {item.id} className='list-group-item'>
                <ListItem 
                label = {item.label} 
                like ={item.like}
                important = {item.important}
                onDelete = {()=> onDelete(item.id)} onToggleLike = {() => onToggleLike(item.id)} onToggleImportant ={() => onToggleImportant(item.id)} />
            </li>
        )
    });

    return(
        <ul className="app-list list-group" >
            {elements}
        </ul>
    )
}


export default PostList;
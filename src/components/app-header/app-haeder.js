import React from 'react';
import './app-header.css';

const AppHeader = ({allPosts, allLiked}) => {

return (
    <div className = 'app-header d-flex'>
        <h1>Devyatova Galina</h1>
        <h2>Всего {allPosts} запией, понравилось {allLiked} </h2>
    </div>
)
}

export default AppHeader;
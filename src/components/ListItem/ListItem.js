import React  from 'react';
import './post-list-item.css'

const ListItem = ({label, onDelete, onToggleLike, onToggleImportant, like, important})=> {
   
        let classNames = "btn-star btn-sm";
        let classNames1 = "fa fa-heart";

        if (important) {
            classNames += ' important';
        }
         if (like) {
             classNames1 += ' like';
         }

        return(
            <div className = "app-list-item d-flex justify-content-between">
            <span className="app-list-item-label" onClick = {onToggleLike}>
                {label}
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <button onClick = {onToggleImportant}
                type="button" 
                className= {classNames}>
                    <i className="fa fa-star"></i>
                </button>
                <button 
                type="button" 
                className="btn-trash btn-sm"
                onClick = {onDelete}>
                    <i className="fa fa-trash-o"></i>
                </button>
                <i className={classNames1}></i>
            </div>
        </div>
        )
    }

export default ListItem;
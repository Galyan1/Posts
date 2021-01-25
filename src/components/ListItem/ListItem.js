import React, { Component } from 'react';
import './post-list-item.css'

export default class ListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            important: false,
            like: false
        }
        this.onImportant = this.onImportant.bind(this);
        this.onLiked = this.onLiked.bind(this);
    }
    onImportant(){
        this.setState(({important}) => ({
            important: !important
        }))  
    }

    onLiked(){
        this.setState(({like}) => ({
            like: !like
        })) 
    }
    
    render(){
        const {label, onDelete} = this.props;
        const {important, like} = this.state;
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
            <span className="app-list-item-label" onClick = {this.onLiked}>
                {label}
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <button onClick = {this.onImportant}
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
}
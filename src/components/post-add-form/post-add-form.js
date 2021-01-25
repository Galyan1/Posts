import React, { Component } from 'react';
import './post-add-form.css';

export default class PostForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            text: ''
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueChange(e){
        this.setState({
            text: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState({text: ''});
    }

    render(){
        return (
            <form className = 'bottom-panel d-flex' onSubmit = {this.onSubmit} >
                <input
                    type = 'text'
                    placeholder = 'what do u think about?'
                    className = 'form-control new-post-label'
                    value = {this.state.text}
                    onChange = {this.onValueChange}
                />
                <button type = 'submit' className = 'btn btn-outline-secondary' >
                    add
                </button>
            </form>
        )
    }     
}
   

 
import React, {Component} from 'react';
import './search-panel.css'
export default class SearchPanel extends  Component{
    constructor(props){
        super(props)
        this.state = {
            term: ''
        }
        this.upDatePosts = this.upDatePosts.bind(this);
    }

    upDatePosts(e){
        const input = e.target.value;
        this.setState({
            term: input
        })
        this.props.upDateSearch(input);
    }

    render(){
        return (
            <input className = 'form-control search-input' 
            type = 'text' 
            placeholder = 'поиск по записям'
            onChange = {this.upDatePosts}
            />
        )
    } 
}

 

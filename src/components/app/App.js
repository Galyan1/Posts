import React, { Component } from 'react';
import './app.css';
import PostList from '../PostList/PostList'
import PostForm from '../post-add-form/post-add-form'
import SearchPanel from '../search-panel/search-panel'
import AppHeader from '../app-header/app-haeder'

export default class App extends Component {
  constructor(props){
      super(props);
      this.state ={
        data: [
          {label: 'Going to learn React', id: 1},
          {label: 'That is so good', id: 2},
          {label: 'I need a break...', id: 3}
      ],
      term: ''
      }  
      this.onDelete = this.onDelete.bind(this);
      this.onAdd = this.onAdd.bind(this);
      this.upDateSearch = this.upDateSearch.bind(this);
      this.maxId = 4;
  }

  onDelete(id){
    this.setState(({data})=>{
      const index = data.findIndex((elem)=>elem.id === id);
      const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
    return{
      data: newArr
    }
    })
  }

  onAdd(body){
    const newElem = {
      label: body,
      id: this.maxId++
    }
    this.setState(({data})=>{
      const newArr = [...data, newElem];
    return{
      data: newArr
    }
    })
  }

  visiblePosts(items, input){
      if (input.length === 0){
        return items
      }
     return items.filter((item) => {
        return item.label.toLowerCase().indexOf(input.toLowerCase()) > -1 //совпадения
      })
  }

  upDateSearch(body){
    this.setState({
      term: body
    })
  }

 

  render(){
    const {data, term} = this.state;
    const visiblePosts = this.visiblePosts(data, term);
    const allPosts = visiblePosts.length;

    return(
      <>
        <AppHeader allPosts = {allPosts}/>
        <SearchPanel upDateSearch = {this.upDateSearch}/>
        <PostList posts = {visiblePosts} onDelete = {this.onDelete}/>
        <PostForm onAdd = {this.onAdd}/>
      </>
    )
  } 
}





import React, { Component } from 'react';
import './app.css';
import PostList from '../PostList/PostList'
import PostForm from '../post-add-form/post-add-form'
import SearchPanel from '../search-panel/search-panel'
import AppHeader from '../app-header/app-haeder'
import PostFilter from '../post-status-filter/post-status-filter'

export default class App extends Component {
  constructor(props){
      super(props);
      this.state ={
        data: [
          {label: 'Going to learn React', like: false, importnat: false,  id: 1},
          {label: 'That is so good', like: false, importnat: false, id: 2},
          {label: 'I need a break...', like: false, importnat: false, id: 3}
      ],
      term: '',
      filter: 'all'
      }  
      this.onDelete = this.onDelete.bind(this);
      this.onAdd = this.onAdd.bind(this);
      this.upDateSearch = this.upDateSearch.bind(this);
      this.onToggleLike = this.onToggleLike.bind(this);
      this.onToggleImportant = this.onToggleImportant.bind(this);
      this.onFilter = this.onFilter.bind(this);
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

  filterPosts(items, filter){
    if (filter === 'important'){
      return items.filter(item=> item.important)
    }
    else{
      return items
    }
  }

  upDateSearch(body){
    this.setState({
      term: body
    })
  }

  onFilter(name){
    this.setState({
      filter: name
    })
  }

  onToggleLike(id){
    this.setState(({data})=>{
      const index = data.findIndex((elem)=>elem.id === id);
      const old = data[index];
      const newItem = {...old, like: !old.like};
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
    return{
      data: newArr
    }
    })
  }
  onToggleImportant(id){
    this.setState(({data})=>{
      const index = data.findIndex((elem)=>elem.id === id);
      const old = data[index];
      const newItem = {...old, important: !old.important};
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
    return{
      data: newArr
    }
    })
  }
 

  render(){
    const {data, term, filter} = this.state;
    const visiblePosts = this.filterPosts(this.visiblePosts(data, term), filter);
    const allPosts = visiblePosts.length;
    const allLiked = data.filter(item => item.like).length;

    return(
      <>
        <AppHeader allPosts = {allPosts} allLiked ={allLiked} />
        <SearchPanel upDateSearch = {this.upDateSearch}/>
        <PostFilter onFilter = {this.onFilter}/>
        <PostList posts = {visiblePosts} onDelete = {this.onDelete} onToggleLike = {this.onToggleLike} onToggleImportant ={this.onToggleImportant}/>
        <PostForm onAdd = {this.onAdd}/>
      </>
    )
  } 
}





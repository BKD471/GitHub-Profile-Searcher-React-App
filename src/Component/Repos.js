import React ,{useState,useEffect} from 'react';
import Axios from 'axios';
import {ListGroup,ListGroupItem} from 'reactstrap';

const Repos = ({repos_url}) => {
  
    const [repos,setRepos]= useState([]);

    const fetchRepos= async () => {

      const {data}= await Axios.get(repos_url);
        setRepos(data)
    }
    

    useEffect(()=> {
        fetchRepos()
    },[repos_url])


    return(
   <ListGroup>
  {
    repos.map(repo => (
      <ListGroupItem key={repo.id}>
     <div className="text-primary">Repo Name:{repo.name}</div>
     <div className="text-secondary">Language: {repo.language}</div>
     <div className="text-info">Repo Desc:{repo.description}</div>
     <div className="text-secondary">Link: {repo.html_url}</div>
   
       
        </ListGroupItem>
      ))
  }
   </ListGroup>

    )
}

export default Repos;
import React from 'react'
import Navbar from '../components/Navbar'
import movies from "../components/data"
import {Link} from "react-router-dom"
function Skills() {
    return (
        <>
        <Navbar></Navbar>
        <h1>Dovednosti</h1>
        <div>
            {movies.map((oneMovie) =>{
return <article key={oneMovie.id}>
    <h2>{oneMovie.title}</h2>
    <img src={oneMovie.image}></img><br/>
    <Link to={`/all-skills/${oneMovie.id}`}>Více informací</Link>
    
</article>
            

} )}
        </div>
        </>
      )
}

export default Skills

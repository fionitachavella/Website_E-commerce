import React from 'react'
import './NewCollections.css'
import Item from '../Item/Item'
// import new_collection from '../Assets/new_collections'
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const NewCollections = () =>{

    const [new_collection,setNew_collection] = useState([]);

    useEffect(()=>{
        fetch('http://54.172.100.247:3000/newcollections')
        .then((response)=>response.json())
        .then((data)=>setNew_collection(data));
    },[])  

    return (
        <div className='new-collections'>
            <h1>KOLEKSI TERBARU</h1>
            <hr/>
            <div className="collections">
                {new_collection.map((item,i)=>{
                   return <Item key={i} 
                   id={item.id} 
                   name={item.name} 
                   image={item.image} 
                   new_price={item.new_price} 
                   old_price={item.old_price}/>
                }
                
                )}
        </div>  
        </div>

    )
}

export default NewCollections

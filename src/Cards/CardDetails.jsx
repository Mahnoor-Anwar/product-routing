import { Box } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import {ProductData} from '../ProductData'
import './card.css'

const CardDetails = () => {
    const {id} = useParams()
    const filterData = ProductData.filter((e,i)=>{
        return e.id == id;
    })
    
  return (
    <>
    <h1 style={{textAlign:'center'}}>Product Detail</h1>
        {filterData.map((e,i)=> {
            return (

                <div style={{ display:'flex' , justifyContent:'center'}}>
                    <div style={{border:'2px solid grey' , borderRadius:'20px', height:'200x' , width:'300px', boxShadow:'4px 2px 4px grey' , padding:'10px'}}>
                        <div style={{ display:'flex' , justifyContent:'center'}}>
                    <img src={e.image} height={200} width={200} />
                        </div>
                     <h3 style={{textAlign:'center'}} >{e.title}</h3>
                     <p style={{textAlign:'center'}}>{e.description}</p>
                    </div>
                </div>
              
            )
        })}
    </>
  )
}

export default CardDetails

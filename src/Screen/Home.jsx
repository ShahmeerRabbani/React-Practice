import React from 'react'
import { ProductData } from '../Components/ProductData/ProductData'
import MultiActionAreaCard from '../Components/CardBox/CardBox'

const Home = () => {
  return (
    <div className='Home'>
      <h1>Products</h1>
      {
        ProductData.map((e, i) => {
            return(
                <div key={i} style={{display: 'inline-flex', gap: 30 , margin: '0 auto'}}>
                    <MultiActionAreaCard img = {e.image} desc={e.description} title={e.title} id={e.id}/>
                </div>
            )
        })
      }
    </div>
  )
}

export default Home

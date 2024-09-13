import React from 'react'
import { useParams } from 'react-router-dom'
import { ProductData } from '../Components/ProductData/ProductData'
import MultiActionAreaCard from '../Components/CardBox/CardBox'

const Products = () => {
    const {id} = useParams()

    const filterData = ProductData.filter((e, i) => {
        return e.id == id
    })
  return (
    <div>
      <h1>Products Details</h1>
      {
        filterData.map((e, i) => {
            return (
                <div key={i}>
                    <MultiActionAreaCard img={e.image} desc={e.description} title={e.title} />
                </div>
            )
        })
      }
    </div>
  )
}

export default Products

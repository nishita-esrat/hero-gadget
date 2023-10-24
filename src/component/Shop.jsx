
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import SingleShopItem from './SingleShopItem'

const Shop = () => {
  const products = useLoaderData()
  console.log(products)
  return (
    <div className='container py-12 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7 mb-10'>
      {
        products.map((item)=> <SingleShopItem key={item.id} product={item}/>)
      }
    </div>
  )
}

export default Shop

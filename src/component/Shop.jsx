
import React, { useContext } from 'react'
import { useLoaderData } from 'react-router-dom'
import SingleShopItem from './SingleShopItem'
import { ProductsContext } from '../App'

const Shop = () => {
  const products = useContext(ProductsContext)
  return (
    <div className='container py-12 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7 mb-10'>
      {
        products.map((item)=> <SingleShopItem key={item.id} product={item}/>)
      }
    </div>
  )
}

export default Shop

import React, { useState } from 'react'
import './MenuItem.css';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'

const MenuItem = () => {
const [category,setCategory] = useState('All');

  return (
    <div className='menu-item'>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
    </div>
  )
}


export default MenuItem
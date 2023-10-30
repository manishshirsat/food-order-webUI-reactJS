import React, { useState } from 'react'
import style from './style.css';
import Items from "./MenuApi";
import MenuCard from './MenuCard';

const Card = () => {
    const [menuData, setMenuData]= useState(Items);

    const filterItem = (category) => {
        const updateList= Items.filter((curElem) => {
            return curElem.category === category;
        });

        setMenuData(updateList);
    }
    
    return (
        <>
        <nav className='navbar'>
            <div className="btn-group">
                <button className='btn-group__item' onClick={()=>filterItem("breakfast")}>Breakfast</button>
                <button className='btn-group__item' onClick={()=>filterItem("lunch")}>Lunch</button>
                <button className='btn-group__item' onClick={()=>filterItem("dinner")}>Dinner</button>
                <button className='btn-group__item' onClick={()=>setMenuData(Items)}>All</button>
            </div>
        </nav>

        <MenuCard menuData={menuData} />
        </>
    )
}

export default Card;
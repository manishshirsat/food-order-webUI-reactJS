import React from 'react'
import './style.css';
import { Link } from 'react-router-dom';

const MenuCard = ({ menuData }) => {
 
    return (
    <>
    <section className='container-card'>
        <div className="row">
        {menuData.map((element) => {
        
        return (
        <>
        <div className="card">
            <img src={element.image} className="card-img" alt="food image" />
            <div className="card-body">
                <h5 className="card-title">{element.title}</h5>
                <p className="card-text">{element.desc}</p>
                <h5>Rs.{element.price}</h5>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Order</button>
            </div>
        </div>
        </>
        );
        })}
        </div>
    </section>
    </>
    )
}

export default MenuCard;

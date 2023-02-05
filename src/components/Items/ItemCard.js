import React from "react";
import { Search } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";

const ItemCard = ({id, name, precio, moneda, talles, thumbnail}) => {
    return(
        <div className="d-flex flex-column mx-4 px-4 text-center border border-3 border-light" key={id}>
            <span className="my-3 fw-bold">{name}</span>
            <img src={`${thumbnail}`} width={350} height={300}></img>
            <span className="my-3">{moneda}{precio}</span>
            <div>
                <NavLink to={`/item/${id}`} className="btn btn-outline-primary mb-4">Ver <Search/></NavLink>
            </div>
        </div>
    )
};

export default ItemCard;
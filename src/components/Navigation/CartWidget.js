import React from "react";
import { Cart } from "react-bootstrap-icons";

const CartWidget = () => {
    return(
        <div>
        <Cart className="fs-5"/>
        <label className="text-danger">0</label>
        </div>
    )
};

export default CartWidget;
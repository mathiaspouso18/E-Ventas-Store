import {React, useState} from "react";

const ItemCount = () => {
    
    const [cant, SetCant] = useState(0);

    const sumoUno = () => {
        SetCant(cant => cant + 1);
    };

    const restoUno = () => {
        if(cant > 0)
        SetCant(cant => cant - 1);
    };

    return (
        <div className="d-flex col-12 mt-4">
            <div>
                <div className="col-12">
                    <button type="button" className="btn btn-light mx-5" onClick={restoUno}>-</button>
                    <label>
                        {cant}
                    </label>
                    <button type="button" className="btn btn-light mx-5" onClick={sumoUno}>+</button>
                </div>
            </div>
            <div>
                <button type="button" className="btn btn-outline-primary">
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
};

export default ItemCount;
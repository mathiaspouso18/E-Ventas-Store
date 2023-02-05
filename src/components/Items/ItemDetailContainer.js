import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ropas } from "../Services/service";
import ItemCount from "./ItemCount";

const ItemDetailContainer = () => {
    const [ropa, setRopa] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        ropas.get(id).then((data) => setRopa(data));
    }, [id]);


    
    return (
        <div className="d-flex flex-column text-center">
            <div className="mx-auto mt-4 border border-3 border-light d-flex flex-column p-4">
                <img src={`${ropa.thumbnail}`} width={350} height={300} className="mx-auto"></img>
                <span className="my-2">{ropa.name}</span>
                <span className="my-2">{ropa.moneda}{ropa.precio}</span>
                <div className="d-flex flex-row mx-auto my-2">
                    <span>Talles:</span>
                    <ul>
                        {ropa.talles && ropa.talles.map((t) => {
                            return (
                                <li>{t}</li>
                            );
                        })}
                    </ul>
                </div>

                <ItemCount></ItemCount>
            </div>
        </div>
    )
};

export default ItemDetailContainer;
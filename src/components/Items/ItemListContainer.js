import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ropas } from "../Services/service";
import ItemCard from "./ItemCard";

const ItemListContainer = () => {
    const { id } = useParams();
    const [ropaList, setRopaList] = useState([]);

    useEffect(() => {
        ropas.getByCategory(id).then((data) => setRopaList(data));
    }, [id]);
    
    console.log(ropaList);

    return (
        <div>
            <div className="d-flex py-4">
                {ropaList && ropaList.map((r) => {
                    return (
                        <ItemCard {...r} />
                    );
            })}
            </div>
        </div>
    )
}

export default ItemListContainer;
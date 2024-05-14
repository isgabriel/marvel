import React from "react";
import { Rating } from "react-simple-star-rating";

interface iEstrelas {
    valorEstrelas: number;
}

const Estrelas: React.FC<iEstrelas> = ({ valorEstrelas }) => {
    return (
        <Rating
            initialValue={valorEstrelas}
            fillColor="#FF9C00"
            size={32}
            readonly
        />
    );
};

export default Estrelas;

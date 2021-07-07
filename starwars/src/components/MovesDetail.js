import React from "react";
import styled from "styled-components";

const CharacterWrapper = styled.div`
    margin: 25px;
    width: 30rem;
`;

const MovesDetail = props => {

    return (
        <React.Fragment>
            <p className="title">{props.name}</p>
            <img src={props.sprites.back_default} alt={`${props.name}`} />
            <h3>Moves</h3>
            {props.abilities.map( ability => {
                return (
                    <p>{ability.ability.name}</p>
                );
            })}
        </React.Fragment>
    );
};

export default MovesDetail;
import React from "react";
import styled from "styled-components";

const CharacterWrapper = styled.div`
    margin: 25px;
    width: 30rem;
`;

const CharacterDetail = props => {

    return (
        <React.Fragment>
            <p className="title">{props.name}</p>
            <img src={props.sprites.front_default} alt={`${props.name}`} />
            <p>Weight: {props.weight}</p>
            <p>Type: {props.types[0].type.name}</p>
        </React.Fragment>
    );
};

export default CharacterDetail;

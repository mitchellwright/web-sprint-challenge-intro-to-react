import React from "react";
import styled from "styled-components";

const CharacterWrapper = styled.div`
    margin: 25px;
    width: 30rem;
`;

const Character = props => {
    const { name, types, weight, sprites} = props.characterData;

    return (
        <CharacterWrapper className="nes-container with-title is-centered">
            <p className="title">{name}</p>
            <img src={sprites.front_default} alt={`image of ${name}`} />
            <p>Weight: {weight}</p>
            <p>Type: {types[0].type.name}</p>
        </CharacterWrapper>
    );
};

export default Character;

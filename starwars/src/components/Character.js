import React from "react";
import styled from "styled-components";
import CharacterDetail from "./CharacterDetail";

const CharacterWrapper = styled.div`
    margin: 25px;
    width: 30rem;
`;

const Character = props => {
    const { name, types, weight, sprites} = props.characterData;

    return (
        <CharacterWrapper className="nes-container with-title is-centered">
            <CharacterDetail
                name={name}
                types={types}
                weight={weight}
                sprites={sprites}
            />
        </CharacterWrapper>
    );
};

export default Character;

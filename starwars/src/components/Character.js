import React from "react";
import styled from "styled-components";
import ReactCardFlip from "react-card-flip";
import CharacterDetail from "./CharacterDetail";
import MovesDetail from "./MovesDetail";

const CharacterWrapper = styled.div`
    margin: 25px;
    width: 30rem;
`;

const Character = props => {
    const { name, types, weight, sprites, abilities } = props.characterData;

    const [isFlipped, setIsFlipped] = React.useState(false);

    const handleClick = e => {
        e.preventDefault();
        setIsFlipped(!isFlipped);
    };

    return (
        <ReactCardFlip isFlipped={isFlipped} >
            <CharacterWrapper className="nes-container with-title is-centered">
                <CharacterDetail
                    name={name}
                    types={types}
                    weight={weight}
                    sprites={sprites}
                />
                <button type="button" onClick={handleClick} class="nes-btn is-primary">See Moves</button>
            </CharacterWrapper>

            <CharacterWrapper className="nes-container with-title is-centered">
                <MovesDetail
                    name={name}
                    sprites={sprites}
                    abilities={abilities}
                />
                <button type="button" onClick={handleClick} class="nes-btn is-primary">Back to Details</button>
            </CharacterWrapper>
        </ReactCardFlip>
    );
};

export default Character;

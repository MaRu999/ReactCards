import card from "../game/card";
import * as React from "react";
import styled from "styled-components";
import {string} from "prop-types";

const CardDiv = styled.div`
color: ${(props: MyProps): string => (
    props.color )};
    font-size:40pt;
`;

interface MyProps {
    color: string;
}

CardDiv.propTypes = {
    color: string.isRequired
};

export const CardComponent = (props: MyCardProps): JSX.Element => {

    return(
        <CardDiv color={props.card.color}>
            {props.card.suite}
            {props.card.numberLiteral}
        </CardDiv>
    )
};

type MyCardProps = {
    card: card;
}

CardComponent.propTypes = {
    card: card
}
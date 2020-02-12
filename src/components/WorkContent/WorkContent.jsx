import React from "react";
import styled from "styled-components";
import { Transition } from "react-transition-group";

const WorkContent = ({ animate }) => {
    const overlayTransition = {
        entered: {
            height: "90vh",
            opacity: 1
        }
    };

    const WorkOverlay = styled.div`
        background: ${props => props.theme.blueColor};
        z-index: 999;
        position: absolute;
        top: 5vh;
        left: 5vh;
        right: 5vh;
        bottom: 5vh;
        width: auto;
        height: 0;
        -webkit-transition: ease 300ms, height 300ms;
        -moz-transition: ease 300ms, height 300ms;
        -o-transition: ease 300ms, height 300ms;
        -ms-transition: ease 300ms, height 300ms;
        transition: ease 300ms, height 300ms;
        opacity: 0;
    `;

    return (
        <Transition in={animate} timeout={500}>
            {state => (
                // state change: exited -> entering -> entered -> exiting -> exited
                <WorkOverlay style={{ ...overlayTransition[state] }} />
            )}
        </Transition>
    );
};

export default WorkContent;

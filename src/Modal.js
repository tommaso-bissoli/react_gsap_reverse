// REACT
import React, { useEffect } from "react";

// STYLED COMPONENTS
import styled from "styled-components/macro";
import { transparentize } from "polished";

// GSAP
import { gsap } from "gsap";

// Typing
import PropTypes from "prop-types";

// Components
import ModalClose from "./ModalClose";

// Vars
const zID = 0;

// Main component
const Modal = props => {
  const body = document.querySelector("body");
  const container = document.querySelector(".modal");
  const overlayer = document.querySelector(".modal-overlayer");
  const wrapper = document.querySelector(".modal-wrapper");

  const tl = gsap.timeline({
    defaults: {
      ease: "expo.out"
    },
    onReverseComplete: () => {
      unlock();
    }
  });

  tl.to(overlayer, {
    duration: 0.5,
    opacity: 1
  });
  tl.from(wrapper, {
    duration: 0.8,
    opacity: 0,
    yPercent: "-=30"
  });

  const lock = () => {
    body.style = `
      overflow: hidden;
      position: relative;
    `;
    container.style = `
      height: 100%;
    `;
  };
  const unlock = () => {
    body.style = `
      overflow: unset;
      position: unset;
    `;
    container.style = `
      height: 0;
    `;
  };
  const modal = status => {
    if (status === "open") {
      lock();
      tl.play();
      console.log("OPEN");
    }
    if (status === "close") {
      tl.reverse();
    }
  };

  useEffect(() => {
    modal("open");
  });

  return (
    <div className={`${props.className} modal`}>
      <div className="modal-overlayer" />
      <div className="modal-wrapper">
        <ModalClose
          className="modal-close"
          onClick={() => {
            modal("close");
          }}
        />
        <div className="modal-header">
          <h2>MODAL HEADERTest</h2>
        </div>
        <div className="modal-content">
          <div className="modal-content-wrapper">MODAL CONTENT</div>
        </div>
      </div>
    </div>
  );
};

// Styles component
const Styled = styled(Modal)`
  height: 0;
  left: 0;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;

  .modal {
    height: 100%;
    width: 100%;

    &-content {
      padding: 10px;

      &-wrapper {
        overflow-x: hidden;
        overflow-y: auto;
      }
    }

    &-overlayer {
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      height: 100%;
      width: 100%;
      background: ${transparentize(0.5, "black")};
      opacity: 0;
      z-index: ${zID};
    }

    &-wrapper {
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background: white;
      border-radius: 10px;
      max-height: 80%;
      opacity: 1;
      width: 80%;
      z-index: ${zID + 1};
    }
  }
`;

// Typing
Modal.propTypes = {
  className: PropTypes.string.isRequired,
  footer: PropTypes.any,
  content: PropTypes.any,
  header: PropTypes.string
};

// Exports
export default Styled;

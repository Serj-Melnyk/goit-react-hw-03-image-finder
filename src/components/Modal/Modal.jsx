import PropTypes from "prop-types"

import { Component } from "react";
import { Overlay, ModalStyle } from "./ModalStyled"
import { createPortal } from "react-dom";

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {

    componentDidMount() {
        // console.log('componentDidMoun');
        window.addEventListener('keydown', this.handleKeyDown)
    };

    componentWillUnmount() {
        // console.log('componentWillUnmount');
        window.removeEventListener('keydown', this.handleKeyDown)
    };


    handleKeyDown = evt => {
        if (evt.code === 'Escape') {

            // console.log('tab escape');

            this.props.onClose();
        }
    };


    handleTabOverlay = evt => {
        if (evt.currentTarget === evt.target) {
            
            // console.log('Overlay');
            this.props.onClose();
        }
    };

    render() {
        const {largeImage} = this.props

        return createPortal(<Overlay
            onClick={this.handleTabOverlay}

        >

            <ModalStyle className="modal">
                <img src={largeImage} alt="" />
            </ModalStyle>
                
             </Overlay>, modalRoot);
             
    }
};
  

Modal.propTypes = {
    largeImage: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
}

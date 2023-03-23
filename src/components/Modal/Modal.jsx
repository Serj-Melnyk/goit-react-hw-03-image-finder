import { Component } from "react";
import { Overlay, ModalStyle } from "./ModalStyled"
import { createPortal } from "react-dom";

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {

    componentDidMount() {
        console.log('componentDidMoun');
        window.addEventListener('keydown', this.handleKeyDown)
    };

    componentWillUnmount() {
        console.log('componentWillUnmount');
        window.removeEventListener('keydown', this.handleKeyDown)
    };


    handleKeyDown = evt => {
        if (evt.code === 'Escape') {

            console.log('tab escape');

            this.props.onClose();
        }
    };


    handleTabOverlay = evt => {
        if (evt.currentTarget === evt.target) {
            
            console.log('Overlay');
            this.props.onClose();
        }
    };

    render() {

        return createPortal(<Overlay className="overlay" onClick={this.handleTabOverlay}>

            <ModalStyle className="modal">
                {/* <img src={largeImageURL} alt="" /> */}
                {this.props.children}
            </ModalStyle>
                
             </Overlay>, modalRoot);
             
    }
};
  

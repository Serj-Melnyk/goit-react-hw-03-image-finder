import { Component } from "react";
import { Overlay, ModalStyle} from "./ModalStyled"

export class Modal extends Component {


    render() {
        //  const { image: { largeImageURL } } = this.props
  

        return (
            
            <Overlay className="overlay">

                 <ModalStyle className="modal">
                    {/* <img largeImg={largeImageURL} alt="" /> */}
                    {this.props.children}
                </ModalStyle>
                
             </Overlay>

        )
    }
}
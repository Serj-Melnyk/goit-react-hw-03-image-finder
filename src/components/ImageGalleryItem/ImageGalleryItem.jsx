import { Component } from "react";
import { ImageItem, Img } from "./ImageGalleryItemStyled";


export class ImageGalleryItem extends Component {


    state = {
        
    }

    render() {

        const { image: { webformatURL ,largeImageURL} } = this.props

        return  (

            <ImageItem>
                
                
                <Img
                   
                    // onClose={this.props.onClose}
                    src={webformatURL} alt="picture"
                    largeImageURL={largeImageURL}
                />
                
            </ImageItem>

        );

    } 
    
};
import { Component } from "react";
import { ImageItem, Img } from "./ImageGalleryItemStyled";


export class ImageGalleryItem extends Component {


    state = {
        
    }

    render() {

        const { image: { id, webformatURL } } = this.props

        return  (

            <ImageItem 
                key={id}>
                
                <Img src={webformatURL} alt="" />
                
            </ImageItem>

        );

    } 
    
};

import { Component } from "react";
import { ImageItem } from "./ImageGalleryItemStyled";

export class ImageGalleryItem extends Component {
    
    
    render() {
        const { image: { name, image, } } = this.props
        
        return (
        <ImageItem className="gallery-item">
                <img src={image}
                      alt={name} />
        </ImageItem>
    );}
    
};



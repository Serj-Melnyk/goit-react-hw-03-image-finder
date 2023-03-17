import { Component } from "react";
import { ImageList } from "./ImageGalleryStyled";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

export class ImageGallery extends Component {
    state = {
        // value: ''
    }

    componentDidUpdate(prevProps, prevState) { 
        if (prevProps.value !== this.props.value) {
            // this.setState(this.value)
            console.log(this.props.value);
        }
    } 


    render() {

        return (


            <ImageList className="gallery">

                <ImageGalleryItem />

            </ImageList>

        );
    }
};
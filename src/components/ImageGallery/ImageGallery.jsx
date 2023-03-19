import { Component } from "react";
import { ImageList } from "./ImageGalleryStyled";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { getImages } from "components/services/GetImages";

export class ImageGallery extends Component {
    state = {
        images: null
    }

    componentDidUpdate(prevProps, prevState) { 
        if (prevProps.value !== this.props.value || 
            prevProps.value == this.props.value) {
            
            getImages(this.props.value)
                .then((response) => response.json())
                .then((images) => { this.setState({ images }) })
           
        }
    } 


    render() {

        return (

             <ImageList className="gallery">

            
                {this.state.images && this.state.images.hits.map((image) => {

                    return (

                        
                        <ImageGalleryItem
                            
                            image={image}
                            // key={image.id}
                            // src={image.webformatURL}
                        /> 

                
                        
                    )
                })}


               </ImageList>
                  

        );
    }
};


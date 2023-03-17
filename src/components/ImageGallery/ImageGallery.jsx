import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { Component } from "react"
import { ImageList } from "./ImageGalleryStyled"

export class ImageGallery extends Component {
 

    render() {

        const { images } = this.props
        

        return (
            <ImageList className="gallery">
                {images.map((image) => {
                    return (
                        // <li key={img.id}>
                        <ImageGalleryItem
                            key={image.id}
                            image={image}
                    
                                         />
                        // </li>
                    )
                })}
            </ImageList>
        )
    }
}
import { Component } from "react";
import { ImageList } from "./ImageGalleryStyled";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { getImages } from "components/services/GetImages";
import { threeDots } from "components/Loader/Loader";
import { Button } from "components/Button/Button";





export class ImageGallery extends Component {

    state = {
        images: null,
        // loading: false,
        error: '',
        loadButton: false,
        status: 'idle'

    }


    componentDidUpdate(prevProps, prevState) { 

      if (prevProps.value !== this.props.value
            // || 
            // prevProps.value == this.props.value
        )
       
        {
          this.setState({ status: 'pending' })
         
          
            getImages(this.props.value)
                .then((response) => response.json())
                .then((images) => {
                    if (!images.status === 'ok') {
                    return Promise.reject(new Error(images.status))
                    }
                   
                    this.setState({ images, status: 'resolved' })
                    
                    if (images.hits.length !== 12) {
                    return this.setState({ loadButton: false })
                    }

                    return this.setState({ loadButton: true });
                    
                })
                

          .catch((error) => {
                //   console.log('error :>> ', error);
              this.setState({error, status: 'rejected'})
              })
            
     
         }       
          
    } 

    render() {
        if (this.state.status === 'pending') {
            return threeDots 
        }


        if (this.state.status === 'resolved') {

          return    <ImageList className="gallery">
 
                {this.state.images && this.state.images.hits.map((image) => {

                    return (
 
                        <ImageGalleryItem
                            
                            image={image}
                            key={image.id}
                            // src={image.webformatURL}
                        /> 
 
                    )
                })}

                {this.state.loadButton && <Button text="Load more" /> }
       

            </ImageList>
            
        }

        if (this.state.status === 'rejected') {
            return <h2>...OOPS</h2>
        }
        
    }
};


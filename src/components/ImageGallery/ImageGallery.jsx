import { Component } from "react";
import { ImageList } from "./ImageGalleryStyled";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { getImages } from "components/services/GetImages";
import { ThreeDots } from "components/Loader/LoaderStyled"; 
import { ErrorMessage } from "formik";



export class ImageGallery extends Component {

    state = {
        images: null,
        loading: false
    }

    componentDidUpdate(prevProps, prevState) { 

      if (prevProps.value !== this.props.value
            // || 
            // prevProps.value == this.props.value
        )
       
        {
          this.setState({ loading: true })
          
            getImages(this.props.value)
                .then((response) => response.json())
                .then((images) => {
                    if (images.status !== 'ok') {
                    // return Promise.reject(new Error(images.status))
                    }
                    this.setState({ images })
                })
                

          .catch((error) => {
                  console.log('error :>> ', error);
              })
              
                .finally(() => {
              this.setState({ loading: false })
          })
     
         }       
          
    } 

    render() {

        return (

           

            <ImageList className="gallery">
                

                {this.state.loading && <ThreeDots />}
                    

            
                {this.state.images && this.state.images.hits.map((image) => {

                    return (

                        
                        <ImageGalleryItem
                            
                            image={image}
                            key={image.id}
                            // src={image.webformatURL}
                        /> 

                
                        
                    )
                })}
       

            </ImageList>
            
            
                  

        );
    }
};


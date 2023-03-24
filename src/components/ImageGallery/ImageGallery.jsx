import { Component } from "react";
import { ImageList } from "./ImageGalleryStyled";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { getImages } from "components/services/GetImages";
import { threeDots } from "components/Loader/Loader";
import { Button } from "components/Button/Button";
import { toast } from "react-hot-toast";
// import { ThreeDots } from "react-loader-spinner";





export class ImageGallery extends Component {

    state = {
        images: [],
        loading: false,
        error: '',
        loadButton: false,
        page: 1,
        status: 'idle'

    }


    componentDidUpdate(prevProps, prevState) {

        if (prevProps.value !== this.props.value
            ||
            prevState.page !== this.state.page) {
            
            this.setState({ loading: true })
         
          
            getImages(this.props.value, this.state.page)
                .then((response) => response.json())
                .then((images) => {
                    if (images.total === 0) {
                        return Promise.reject(new Error(toast.error('Bad request')))
                    }
                   
                    this.setState({
                        images: [...this.state.images, ...images.hits]
                    })
                 
            
                    
                    if (images.hits.length !== 12) {
                        return this.setState({ loadButton: false })
                    }

                    return this.setState({ loadButton: true });
                    
                })
                

                .catch((error) => {
                    console.log('error :>> ', error)
                    this.setState({ error, status: 'rejected' })
                })
                
          
                .finally(() => {
                    this.setState({ loading: false })
                })
        }
          
    };

    handleLoadPage = () => {
        this.setState((prevState) => {
            return {
                page: prevState.page + 1
            }
        });
    };

    render() {
    
        return (

            <ImageList className="gallery">


                {this.state.loading && threeDots }
 
                {this.state.images && this.state.images.map((image) => {

                    return (
 
                        <ImageGalleryItem
                            
                            image={image}
                            key={image.id}
                        // src={image.webformatURL}
                        />
 
                    )
                })}

                {this.state.loadButton && <Button onClick={this.handleLoadPage} />}
       

            </ImageList>
           
        )
 
    };

}


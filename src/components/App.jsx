
import { Component } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Layout } from "./Layout/Layout";
import { Searchbar } from "./Searchbar/Searchbar";
import { Toaster } from "react-hot-toast";
import { Modal } from "./Modal/Modal";




export class App extends Component {


  state = {
    textSearch: '',
    showModal: false,
  
  };

  toggleModal = () => {
    this.setState(({ showModal })=> ({
      showModal: !showModal
    }))
  };


  handleSubmit = (textSearch) => {
    this.setState({ textSearch })
  };

  


  render() {
    
    const { textSearch, showModal } = this.state


    return (

      
      <Layout>  

        {showModal && (< Modal
          
          onClose={this.toggleModal}>
          {/* largeImageURL={largeImageURL} */}

        </Modal>)}


        <button type="button" onClick={this.toggleModal}>Open modal</button>


        <Toaster
           position="top-right"
           reverseOrder={false}
        />
        
        <Searchbar onSubmit={this.handleSubmit} />

        <ImageGallery value={textSearch} />



      
    

      
        <GlobalStyle />
        
    </Layout>
    );
    
  }
  
};



 
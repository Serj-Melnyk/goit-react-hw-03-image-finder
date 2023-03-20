
import { Component } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Layout } from "./Layout/Layout";
import { Searchbar } from "./Searchbar/Searchbar";
import { Toaster } from "react-hot-toast";
import { Button } from "./Button/Button";



export class App extends Component {


  state = {
    textSearch: ''
  
  };

  handleSubmit = (textSearch) => {
  this.setState({textSearch})
}



  render() {


    return (

      
      <Layout>  
        
        <Toaster
        position="top-right"
          reverseOrder={false}
        />
        
        <Searchbar onSubmit={this.handleSubmit} />

        <ImageGallery value={this.state.textSearch} />
        
        {this.state.textSearch && <Button text="Load more" />}


       


      
        <GlobalStyle />
        
    </Layout>
    );
    
  }
  
};



 
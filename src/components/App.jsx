
import { Component } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Layout } from "./Layout/Layout";
import { Searchbar } from "./Searchbar/Searchbar";


export class App extends Component {


  state = {
    textSearch: ''
  
  };

  handleSubmit = (textSearch) => {
  this.setState({textSearch})
}


  render() {

    // console.log('state :>> ', this.state);




    return (

    <Layout>
        
        <Searchbar onSubmit={this.handleSubmit} />

        <ImageGallery value={this.state.textSearch } />
      
        <GlobalStyle />
        
    </Layout>
    );
    
  }
  
};



 
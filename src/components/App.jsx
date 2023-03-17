
import { Component } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Layout } from "./Layout/Layout";
import { Searchbar } from "./Searchbar/Searchbar";


export class App extends Component {


  state = {
    // search: [],
    images: [
      {
        id: "1",
        name: "Smoked salmon burger",
    
        image: "https://assets.bonappetit.com/photos/62cc4eca787a907e535e8e7f/1:1/w_2580%2Cc_limit/0711-black-bean-burger-lede.jpg",
   
      },
      {
        id: "2",
        name: "Tomatoes With Creamy Feta",
   
        image: "https://assets.bonappetit.com/photos/62b4926736e0c90647da6b71/1:1/w_2580%2Cc_limit/0623-diana-yen-tomato-recipe-lede.jpg",
 
      },
      {
        id: "3",
        name: "Spicy potato salad",
   
        image: "https://assets.bonappetit.com/photos/62bf35ae872a6cfbb260f286/1:1/w_2580%2Cc_limit/0701-tj-recipe-potato-v2.jpg",
   
      },
      {
        id: "4",
        name: "Chicken Biryani",
 
        image: "https://assets.bonappetit.com/photos/5db1b689823b960008d8468d/1:1/w_2580%2Cc_limit/Chicken-Biryani-Lede-NEW.jpg",
   
      }
    ]
 
  };

findImage = (evt) => {
    this.setState({ images: evt.currentTarget.value })
  };


  addImage = (newImage) => {
    this.setState((prevState) => {
      
      return { 
        images: [...prevState.images, newImage] 

      }

    })
  }

  render() {


    return (

    <Layout>
      
        {/* <h1>Hello World</h1> */}
        
        <Searchbar onSubmit={this.addImage} />
        
        <ImageGallery images={this.state.images}/>
      
        <GlobalStyle />
        
    </Layout>
    );
    
  }
  
};



 
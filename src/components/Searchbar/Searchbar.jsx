
import { Form, Field, Button, SearchHead} from "./SearchbarStyled";
import { GoSearch } from "react-icons/go";

import { Component } from "react";


export class Searchbar extends Component {
    state = {
        value: ''
    }


    handleChange = ({ target: { value } }) => {
        // console.log(value);
   
        this.setState({ value })
           
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        this.props.onSubmit(this.state.value)
        this.setState({value : ''})
        
    }
    



    
    render() {


        return (

            <SearchHead className="searchbar">
                <Form
                    
                    onSubmit={this.handleSubmit}
                    
                    className="form">

                    


                    <Button type="submit" className="button">
                        <span className="button-label"> <GoSearch /> </span>
                    </Button>

                    <Field
                        className="input"
                        type="text"
                        aria-label="search"
                        placeholder="Search images and photos"
                        value={this.state.value}
                        onChange={this.handleChange}
                        
        
                        

                    />
                </Form>
            </SearchHead>
            
        );
    }
};


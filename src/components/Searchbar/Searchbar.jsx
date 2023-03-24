
import { Form, Field, Button, SearchHead} from "./SearchbarStyled";
import { GoSearch } from "react-icons/go";


import { Component } from "react";
import { toast } from "react-hot-toast";


export class Searchbar extends Component {

    state = {
        value: '',
        page: 1,
    }


    handleChange = ({ target: { value } }) => {
        // console.log(value);
   
        this.setState({ value })
           
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        if (!this.state.value.trim()) {
            return toast.success('The search field is empty');
         
        }
        this.props.onSubmit(this.state.value)
        this.setState({value : '', page: 1})
        
    }
    



    
    render() {
        


        return (

            <SearchHead className="searchbar">

                <Form onSubmit={this.handleSubmit}>
                
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


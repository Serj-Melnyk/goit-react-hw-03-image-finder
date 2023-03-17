import { Formik } from "formik";
import { Form, ErrorMessage, Field, Button, SearchHead} from "./SearchbarStyled";
import * as Yup from "yup"
import { nanoid } from 'nanoid';
import { GoSearch } from "react-icons/go";


const SearchShema = Yup.object().shape({

    name: Yup.string().trim().min(2, 'Too Short!').max(50, 'Too Long!')
        // .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        //  "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan")
    .required('Required'),


    

 });

export const Searchbar = ({ onSubmit }) => {
    
    return (

        <SearchHead>


            <Formik
            
            
                initialValues={{
                    name: '',
                    image: ''
        
                }}

                validationSchema={SearchShema}


                onSubmit={(values, actions) => {
            
                    onSubmit({
                        ...values,
                        id: nanoid(),
                    });
                    actions.resetForm()
                }}
            >

           

                <Form>

                    <Button type='submit'>
                        <GoSearch />
                    </Button>

                    {/* <FormLabel>
                        Name */}
                    <Field name="name" type="text" placeholder="Search images and photos" />
                        <ErrorMessage name="name" component={'div'} />
                    {/* </FormLabel> */}

                


                </Form>

            </Formik >
        
        </SearchHead>

    );


}
import { ButtonMore, ButtonCentre } from "./ButtonStyled"

export const Button = ({text}) => {
    return (


        <ButtonCentre>
             <ButtonMore type="button">{ text }</ButtonMore>
        </ButtonCentre>

       
    )
}
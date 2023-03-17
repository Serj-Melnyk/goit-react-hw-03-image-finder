import { Container } from "./LayoutStyled";
export const Layout = ({ children }) => {
    
    return (
        <Container>
            
            <div>{children}</div>
            
        </Container>

    )
};
import { render, screen } from '@testing-library/react';
import App from '../../App';
import Button from './Button';

describe("Render button componets",()=>{

    it("should render button",()=>{
        render(<Button>hello</Button>)
        let button=screen.getByText("hello");
        expect(button).toBeInTheDocument();
    })

    it("should render app.js",()=>{
        render(<App/>)
        let button=screen.getByText('Click Me');
        expect(button).toBeInTheDocument();
    })
    it("should render app.js and check that button have a test-id",()=>{
        render(<App/>)
        let button=screen.getByTestId("customBtn");
        expect(button).toHaveTextContent("Click Me")
        expect(button).toBeInTheDocument();
    })

    it("should have a empty button",()=>{
        render(<Button></Button>)
        let button=screen.getByTestId('customBtn');
        expect(button).toBeEmptyDOMElement()
    })

    
    it("should have a color green",()=>{
        render(<Button>Geen Button</Button>)
        let button=screen.getByTestId('customBtn');
        expect(button).toHaveClass('blue')
            // expect(button).toBeEmptyDOMElement()
    })


})
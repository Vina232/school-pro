import { render, screen } from "@testing-library/react";
import Article from "../components/Article.js/index.js";


// test('test heading', ()=>{
//     render(<Article/>);
//     const h1Title = screen.getByRole('heading');
//     expect(h1Title).toBeInTheDocument();
//     // p 
//     const para = screen.getByText(/it is a sunny day./i);
//     expect(para).toBeInTheDocument();

// })

test('test heading', ()=>{
    render(<Article/>);
    // const h1Title = screen.getByRole('heading');
    // expect(h1Title).toBeInTheDocument();
    // p 
    const para = screen.getByText(/it is a sunny day./i);
    expect(para).toBeInTheDocument();

})
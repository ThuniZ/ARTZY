import React from 'react'
import Navbar from '../Components/Navbar'
import Logo from "../assets/Logo.svg"
import { Link } from 'react-router-dom'
import { render , screen } from "@testing-library/react"
//import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom'


const MockNavbar = () => {
  return (
    
     <BrowserRouter>
      <Navbar />
      </BrowserRouter>
    

  )
};
//philip test
describe('Dropdown menu header', () => {

  it('The dropdown menu has a header', () =>  {
  render(<MockNavbar />)
    const CategoryInputEl = screen.getByText(/Browse Category/i)
    expect(CategoryInputEl).toBeInTheDocument()
  }
)
})



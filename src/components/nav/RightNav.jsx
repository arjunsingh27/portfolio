import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const UL = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
    margin-right:150px;
    
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color:#1DC19A;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    transition: transform 0.3s ease-in-out;
    padding-top: 3.5rem;

    li {
    margin-left:100px;
    }
     
  }
`;

const RightNav = ({ open }) => {
  return (
    <UL open={open}>
      <li>
        <Link to="/home" style={{ textDecoration: 'none' }}>
          <div className="header_nav_name text-link">Home</div>
        </Link>
      </li>
      <li>
        <Link to="/about" style={{ textDecoration: 'none' }}>
          <div className="header_nav_name">About</div>
        </Link>
      </li>
      <li>
        <Link to="/projects" style={{ textDecoration: 'none' }}>
          <div className="header_nav_name">Projects</div>
        </Link>
      </li>
      <li>
        <Link to="/contactus" style={{ textDecoration: 'none' }}>
          <div className="header_nav_name">Contact Us</div>
        </Link>
      </li>
    </UL>
  );
};

export default RightNav;

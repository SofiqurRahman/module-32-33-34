import React from 'react';
import './Header.css'
const Header = () => {
  return (
    <div className="header">
      <h1 className="text-center my-4 text-uppercase">Online Course</h1>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="/coursera">Coursera</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="/home">Home <span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link" href="/courses">Our Courses</a>
            <a class="nav-item nav-link" href="/order">Order Now</a>
            <a class="nav-item nav-link" href="/about">About Us</a>
            <a class="nav-item nav-link" href="/login">Log In</a>
            <a class="nav-item nav-link" href="/signup">Sign Up</a>
          </div>
        </div>
        <form class="form-inline">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
          <button class="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
    </div>
  );
};

export default Header;
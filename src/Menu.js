import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
export default class Menu extends Component {
  render() {
    return (
      <>

        <nav className="navbar navbar-expand-lg bg-info ">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/Business">Business</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/Sports">Sports</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/Entertainment">Entertainment</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/Technology">Technology</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/Science">Science</a>
                </li>
                <li className="nav-item">
                  <a className=" nav-link active" href="/General">General</a>
                </li>
              </ul>
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item same">
                  <a className="nav-link active" href="#" data-bs-toggle="modal" data-bs-target="#loginModal">Login</a>
                </li>


              </ul>
              <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="loginModalLabel">Login</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <form>
                        <div class="mb-3">
                          <label for="loginName" class="form-label">Name</label>
                          <input type="text" class="form-control" id="loginName" placeholder="Enter your name" />
                        </div>
                        <div class="mb-3">
                          <label for="loginEmail" class="form-label">Email address</label>
                          <input type="email" class="form-control" id="loginEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div class="mb-3">
                          <label for="loginPassword" class="form-label">Password</label>
                          <input type="password" class="form-control" id="loginPassword" placeholder="Password" />
                        </div>
                        <button type="submit" class="btn btn-primary d-block mx-auto">Login</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" href="#" data-bs-toggle="modal" data-bs-target="#signupModal">Signup</a>
                </li>
              </ul>
              <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="signupModalLabel">Sign Up</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <p>Sign up in seconds:</p>
                      <div className="row">
                        <div className="col-md-4">
                          <button className="btn btn-outline-primary w-100 mb-3">
                            <i className="fab fa-google me-2"></i>Continue with Google
                          </button>
                        </div>
                        <div className="col-md-4">
                          <button className="btn btn-outline-primary w-100 mb-3">
                            <i className="fab fa-facebook me-2"></i>Continue with Facebook
                          </button>
                        </div>
                        <div className="col-md-4">
                          <button className="btn btn-outline-primary w-100 mb-3">
                            <i className="fas fa-envelope me-2"></i>Continue with Email
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-dark bg-info" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>

        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="100">
              <img src="3.jpg" className="d-block w-100" height={600} width={100} alt="..." />
            </div>
            <div className="carousel-item">
              <img src="4.jpg" className="d-block w-100" height={600} width={100} alt="..." />
            </div>
            <div className="carousel-item">
              <img src="1.jpg" className="d-block w-100" height={600} width={100} alt="..." />
            </div>
            <div className="carousel-item">
              <img src="2.jpg" className="d-block w-100" height={600} width={100} alt="..." />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

      </>
    )
  }
}

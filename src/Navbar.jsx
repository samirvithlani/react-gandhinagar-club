import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Navbar = () => {
  //cart-->reducerName
  //cart-->stateName
  const cartState = useSelector((state)=>state.cart.cart)
  console.log(cartState)
  const bankState = useSelector((state)=>state.bank.amount)
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar navbar-dark bg-primary">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              {/* <a class="nav-link" href="/movies">movies</a> */}
              <Link to="/movies" className="nav-link">
                movies
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/shows" className="nav-link">
                shows
              </Link>
            </li>

            {/* <li class="nav-item">
              <Link to="/formdemo1" className="nav-link">
                formdemo1
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/formdemo2" className="nav-link">
                formdemo2
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/formdemo3" className="nav-link">
                formdemo3
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/formdemo4" className="nav-link">
                formdemo4
              </Link>
            </li>

            <li class="nav-item">
              <Link to="/depde" className="nav-link">
                depde
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/useeffect" className="nav-link">
                useeffect
              </Link>
            </li> */}
            <li class="nav-item">
              <Link to="/apidemo1" className="nav-link">
                API DEMO 1
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/apidemo2" className="nav-link">
                API DEMO 2
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/apidemo4" className="nav-link">
                API DEMO 4
              </Link>
            </li>

            <li class="nav-item">
              <Link to="/movieapi" className="nav-link">
                movieapi
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/google" className="nav-link">
                Google
              </Link>
            </li>

            <li class="nav-item">
              <Link to="/publishblog" className="nav-link">
                publishblog
              </Link>
            </li>

            <li class="nav-item">
              <Link to="/muibbutton" className="nav-link">
                muibbutton
              </Link>
            </li>

            <li class="nav-item">
              <Link to="/muiLayout" className="nav-link">
                muiLayout
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/chart" className="nav-link">
                chart
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/muitable" className="nav-link">
                muitable
              </Link>
            </li>

            <li class="nav-item">
              <Link to="/prod" className="nav-link">
                prod
              </Link>
              {
                cartState?.length
              }
            </li>
            <li class="nav-item">
              <Link to="/bank" className="nav-link">
                Bank
              </Link>
              <h1>{bankState}</h1>  
            </li>

          </ul>
        </div>
      </nav>
    </div>
  );
};

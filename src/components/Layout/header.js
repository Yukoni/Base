import React from 'react';
import { Link, IndexLink } from 'react-router';


const Header=()=>(

<div>
<div className="nav navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
   
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <Link className="navbar-brand" to="/">Yukoni Base</Link>
            </div>
          
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li>
                        <Link to="/games">Products</Link>
                    </li>
                    <li>
                       <Link to="/Contact">Contact</Link>
                    </li>
                    <li>
                       <Link to="/About">About</Link>
                    </li>
                </ul>
            </div>
         
        </div>

    </div>
       
</div>
);

export default Header;



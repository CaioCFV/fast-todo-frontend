import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { Auth } from "../api";


export class ProtectedRoute extends Component{
   render(){
    const { component: Component, ...rest} = this.props
    return (
        <Route 
            {...rest} 
            setLoading={this.setLoading} 
            render={props => {
            if (Auth.validateUser()) {
                return <Component {...props} />
            } else {
              return <Redirect to={{pathname: "/signin",state: {from: props.location}}}/>
            }
          }}  
        />
        
      )
   }

}

  
import React, {Component} from "react"
export default class Details extends Component {
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                        <h1 className="display-3">404</h1>
                        <h2>error</h2>
                        <h3>Page <span className="text-danger">{this.props.location.pathname}</span> is not found</h3>
                    </div>
                </div>
            </div>
        )
    }
}

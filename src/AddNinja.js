import React, { Component } from 'react'

class AddNinja extends Component {
    state = { 
        name: null,
        age: null,
        belt: null
     } 
     handleChange = (e) => {
            this.setState({
                [e.target.id]: e.target.value
            })
     }
     handleSubmit = (e) => {
        e.preventDefault();
        this.props.addNinja(this.state);
     }
    render() { 
        return (
         <div>
            <form onSubmit={this.handleSubmit}>
                <div className="form-row align-items-center">
                    <div className="col-auto">
                        <label className="sr-only" for="inlineFormInput">Name</label>
                        <input type="text" className="form-control mb-2" id="name" placeholder="Enter Name" onChange={this.handleChange}/>
                    </div>
                    <div className="col-auto">
                        <label className="sr-only" for="inlineFormInput">Age</label>
                        <input type="text" className="form-control mb-2" id="age" placeholder="Enter Age" onChange={this.handleChange}/>
                    </div>
                    <div className="col-auto">
                        <label className="sr-only" for="inlineFormInput">Belt</label>
                        <input type="text" className="form-control mb-2" id="belt" placeholder="Enter Belt" onChange={this.handleChange}/>
                    </div>
                    <div className="col-auto">
                         <button type="submit" className="btn btn-primary mb-2">Add</button>
                     </div>
                </div>
            </form>
         </div>
        );
    }
}
 
export default AddNinja;
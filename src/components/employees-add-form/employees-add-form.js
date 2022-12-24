import { Component } from 'react';
import './employees-add-form.scss';

class EmployeesAddForm extends Component {
    state = {
        name: '',
        salary: ''
    }
    
    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.name.length < 3 || !this.state.salary) return;
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }


    render(){
        const {name, salary} = this.state;
        return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
                className="add-form d-md-flex text-center"
                onSubmit={this.onSubmit}>
                <input type="text"
                    className="form-control new-post-label mb-2"
                    placeholder="Как его зовут?" 
                    name="name"
                    value={name}
                    onChange={this.onValueChange}/>
                <input type="number"
                    className="form-control new-post-label mb-2"
                    placeholder="З/П в $?" 
                    name="salary"
                    value={salary}
                    onChange={this.onValueChange}/>

                <button type="submit"
                        className="btn btn-outline-light mb-2">Добавить</button>
            </form>
        </div>
        )
    }
}

export default EmployeesAddForm;
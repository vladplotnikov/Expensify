import React, { Component } from 'react';
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseForm'
import {editExpense, removeExpense} from '../actions/expenses'
export class EditExpense extends Component {
    onSubmit = (expense)=>{
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    }
    handleRemove = () => {
        this.props.removeExpense({id: this.props.expense.id})
        this.props.history.push('/')
    }
     render() {
         return (
            <div>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.handleRemove}>Remove</button>
            </div>
         )
     }

}
const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense)=>expense.id===props.match.params.id)
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        editExpense: (id, expense) => dispatch(editExpense(id, expense)),
        removeExpense: (data) => dispatch(removeExpense(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditExpense)
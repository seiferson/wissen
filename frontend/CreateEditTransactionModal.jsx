import React, {Component} from 'react';
import Modal from './Modal';

class CreateEditTransactionModal extends Component {

    constructor(props){
        super(props);
    }

    handleInit() {
    }

    componentDidMount() {
        $('#transactiontypedd').dropdown();
        $('#accountdd').dropdown();
        $('#categorydd').dropdown();
    }

    componentDidUpdate() {
        $('#transactiontypedd').dropdown();
        $('#accountdd').dropdown();
        $('#categorydd').dropdown();
    }

    render() {
        var that = this;
        return (
            <Modal id='xmodal' onOpeningCallback={this.handleInit}>
              <form className='ui small form'>
                <h4 className='ui dividing header'>Log transaction</h4>
                <div class='fields'>
                  <div className='four wide field'>
                    <label>Type</label>
                    <div class='ui selection dropdown' id='transactiontypedd'>
                      <input type='hidden' name='transactiontype' value='EXPENSE'/>
                      <div class="default text">Select type</div>
                      <i class='dropdown icon'></i>
                      <div class='menu'>
                        <div class='item' data-value='INCOME'><i class='hand holding usd icon'></i>Income</div>
                        <div class='item' data-value='EXPENSE'><i class='receipt icon'></i>Expense</div>
                      </div>
                    </div>
                  </div>
                  <div className='eight wide field'>
                    <label>Description</label>
                    <input type='text'></input>
                  </div>
                  <div className='four wide field'>
                    <label>Amount</label>
                    <input type='number'></input>
                  </div>
                </div>
                <div class='fields'>
                  <div className='five wide field'>
                    <label>Account</label>
                    <div class='ui selection dropdown' id='accountdd'>
                      <input type='hidden' name='transactiontype' value='General'/>
                      <div class="default text">Select account</div>
                      <i class='dropdown icon'></i>
                      <div class='menu'>
                        <div class='item' data-value='General'>General</div>
                      </div>
                    </div>
                  </div>
                  <div className='six wide field'>
                    <label>Date</label>
                    <input type='datetime-local'></input>
                  </div>
                  <div className='five wide field'>
                    <label>Category</label>
                    <div class='ui selection dropdown' id='categorydd'>
                      <input type='hidden' name='category' value='Misc'/>
                      <div class="default text">Select category</div>
                      <i class='dropdown icon'></i>
                      <div class='menu'>
                        <div class='item' data-value='Misc'><i class='wallet icon'></i>Misc</div>
                        <div class='item' data-value='Salary'><i class='money bill alternate outline icon'></i>Salary</div>
                        <div class='item' data-value='Debt'><i class='coins icon'></i>Debt</div>
                        <div class='item' data-value='Misc'><i class='cash register icon'></i>Misc</div>
                        <div class='item' data-value='Housing'><i class='home icon'></i>Housing</div>
                        <div class='item' data-value='Party/Restaurants'><i class="glass martini alternate icon"></i>Party/Restaurants</div>
                        <div class='item' data-value='Entertainment'><i class='film icon'></i>Entertainment</div>
                        <div class='item' data-value='Grocery'><i class='shopping cart icon'></i>Grocery</div>
                        <div class='item' data-value='Medical'><i class='stethoscope icon'></i>Medical</div>
                        <div class='item' data-value='Personal'><i class='store icon'></i>Personal</div>
                        <div class='item' data-value='Loans'><i class='money bill alternate outline icon'></i>Loans</div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </Modal>
        );
    }
}

export default CreateEditTransactionModal;
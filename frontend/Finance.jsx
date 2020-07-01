import React, {Component, Fragment} from 'react';
import Pagination from './Pagination';
import CreateEditTransactionModal from './CreateEditTransactionModal';

class Finance extends Component{

    constructor(props) {
        super(props);

        this.state = {
            expenseTransactions: [],
            incomeTransactions: [],
            balance: 0.00,
            incomeTotal: 0.00,
            expensesTotal: 0.00,
            date: new Date()
        }
    }

    handleGetTransactionData( ) {
        var that = this;

        $.ajax({
            type: 'GET',
            url: '/api/v1/finance/balance?month='+ (this.state.date.getMonth() + 1) +'&year=' + this.state.date.getFullYear(),
            headers: {
                'Authorization' : 'Bearer ' + that.props.token,
                'Accept' : 'application/json'
            },
            success: function(data) {
                that.setState({
                    balance: data.balance,
                    incomeTotal: data.incomeAmount,
                    expensesTotal: data.expensesAmount,
                    expenseTransactions: data.expenses,
                    incomeTransactions: data.income
                });
            }
        });
    }

    componentDidMount() {
        this.handleGetTransactionData();
    }

    render() {
        return(
            <div class="ui container">
              <div className='ui segment'>
                <h2 className='ui center aligned icon header'>
                  <i className='circular chart line icon'></i>
                  <div class="content">Expenses report<span class="sub header">{this.state.date.getMonth()+1}/{this.state.date.getFullYear()}</span></div>
                </h2>
              </div>
              <div class="ui stackable grid">
                <div class="row">
                  <div class="ten wide column">
                  </div>
                  <div class="six wide column">
                    <div class="ui green center aligned segment">
                      <div class="ui tiny statistic">
                        <div class="value"><i class="wallet icon"></i> {this.state.balance}</div>
                        <div class="label">Balance MXN</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="four wide column">
                    <button class="ui fluid button" onClick={function(){$('#xmodal').modal('show');}}><i class="plus icon"></i> Log transaction</button>
                  </div>
                  <div class="twelve wide column">
                    <table class="ui striped compact table">
                      <thead>
                        <tr>
                          <th colspan="3">Expenses</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.expenseTransactions.map((entry, i) =>{return(
                            <tr>
                              <td class='collapsing'><i class='calendar alternate outline icon'></i>{formatDate(entry.date)}</td>
                              <td><i class='receipt icon'></i>{entry.description}</td>
                              <td class='right aligned collapsing'>{entry.amount} MXN</td>
                            </tr>
                        );})}
                      </tbody>
                      <tfoot>
                        <tr>
                          <th></th>
                          <th><b><i class="receipt icon"></i> Total</b></th>
                          <th class='right aligned collapsing'>{this.state.expensesTotal} MXN</th>
                        </tr>
                      </tfoot>
                    </table>
                    <table class="ui striped compact table">
                      <thead>
                        <tr>
                          <th colspan="3">Income</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.incomeTransactions.map((entry, i) =>{return(
                            <tr>
                              <td class='collapsing'><i class='calendar alternate outline icon'></i>{formatDate(entry.date)}</td>
                              <td><i class='money bill alternate outline icon'></i>{entry.description}</td>
                              <td class='right aligned collapsing'>{entry.amount} MXN</td>
                            </tr>
                        );})}
                      </tbody>
                      <tfoot>
                        <tr>
                          <th></th>
                          <th><b><i class="donate icon"></i> Total</b></th>
                          <th class='right aligned collapsing'>{this.state.incomeTotal} MXN</th>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
              <CreateEditTransactionModal />
            </div>
        );
    }
}

export default Finance;
import React, {Component, Fragment} from 'react';
import Pagination from './Pagination';

class Finance extends Component{

    render() {
        return(
            <div class="ui container">
              <div className='ui segment'>
                <h2 className='ui center aligned icon header'>
                  <i className='circular chart line icon'></i>
                  <div class="content">Expenses report<span class="sub header">Feb 2020</span></div>
                </h2>
              </div>
              <div class="ui stackable grid">
                <div class="row">
                  <div class="ten wide column">
                  </div>
                  <div class="six wide column">
                    <div class="ui green center aligned segment">
                      <div class="ui green tiny statistic">
                        <div class="value"><i class="wallet icon"></i> 35,000.00</div>
                        <div class="label">Balance MXN</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="four wide column">
                  </div>
                  <div class="twelve wide column">
                    <table class="ui striped compact table">
                      <thead>
                        <tr>
                          <th colspan="3">Expenses</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class='collapsing'><i class='calendar alternate outline icon'></i>27/02/2020</td>
                          <td><i class='receipt icon'></i>Credit card payment</td>
                          <td class='right aligned collapsing'>15,587.00 MXN</td>
                        </tr>
                        <tr>
                          <td class='collapsing'><i class='calendar alternate outline icon'></i>12/02/2020</td>
                          <td><i class='gas pump icon'></i>Fuel</td>
                          <td class='right aligned collapsing'>700.00 MXN</td>
                        </tr>
                        <tr>
                          <td class='collapsing'><i class='calendar alternate outline icon'></i>06/02/2020</td>
                          <td><i class="shopping cart icon"></i>Grocery</td>
                          <td class='right aligned collapsing'>854.20 MXN</td>
                        </tr>
                        <tr>
                          <td class='collapsing'><i class='calendar alternate outline icon'></i>25/01/2020</td>
                          <td><i class='car icon'></i>Car repair</td>
                          <td class='right aligned collapsing'>1200.00 MXN</td>
                        </tr>
                         <tr>
                           <td class='collapsing'><i class='calendar alternate outline icon'></i>12/01/2020</td>
                           <td><i class='hospital outline icon'></i>Hospital bill</td>
                           <td class='right aligned collapsing'>3000.00 MXN</td>
                         </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <th></th>
                          <th><b><i class="receipt icon"></i> Total</b></th>
                          <th class='right aligned collapsing'>21587.00 MXN</th>
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
                        <tr>
                          <td class='collapsing'><i class='hand holding usd icon'></i> Salary</td>
                          <td>15,587.00 MXN</td>
                          <td class='right aligned collapsing'>27/02/2020</td>
                        </tr>
                        <tr>
                          <td class='collapsing'><i class='money bill alternate outline icon'></i> Cash</td>
                          <td>700.00 MXN</td>
                          <td class='right aligned collapsing'>27/02/2020</td>
                        </tr>
                        <tr>
                          <td class='collapsing'><i class='piggy bank icon'></i> Savings</td>
                          <td>854.20 MXN</td>
                          <td class='right aligned collapsing'>27/02/2020</td>
                        </tr>
                        <tr>
                            <td><b><i class="donate icon"></i> Total</b></td>
                            <td>21587.00 MXN</td>
                            <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

export default Finance;
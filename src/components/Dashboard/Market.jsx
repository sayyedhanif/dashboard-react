import React from 'react'  
import PropTypes from 'prop-types'  
import availableBalanace from '../../images/available_balance.png';
import circle from '../../images/circle.png';
import walletIcon from '../../images/wallet.png';
import equityIcon from '../../images/equity.png';
import tradeIcon from '../../images/trade.png'

const Market = ({ data, userDetails }) => (  
  <div className="dashboard-market-layout">
    <div className="row padding-15">
      <h3>Hi, {userDetails.userName}</h3>
    </div>
    <div className="row center-text">
      <div className="col-md-4 ">
        <div className="bg-white  padding-15">
          <h4 className="sub-heading-color left-text mb-30"> 
            <img className="img-icon-md" src={walletIcon} alt="" />
            Total Portfolio
          </h4>
          <img src={availableBalanace}  classname="img-ab" alt="" />
          <div className="display-flex mt-30 center-text">
            <div className="half-width border-ridge-1"> 
              Margins Used
              <h4 className="sub-heading-color center-text">{data.portfolio.accountValue}</h4>
              
            </div>
            <div className="half-width border-ridge-1">
               Account Value
               <h4 className="sub-heading-color center-text">{data.portfolio.accountValue}</h4>
              
            </div>
          </div>
        </div> 
      </div>
      <div className="col-md-4 ">
        <div className="bg-white  mb-30 padding-15">
          <h4 className="sub-heading-color left-text mb-30">
            <img className="img-icon-md" src={equityIcon} alt="" /> 
            Equaty
          </h4>
          <h2 className="">{data.equaty.balance}</h2>
          Available Balance
        </div>
        <div className="bg-white  padding-15">
          <h4 className="sub-heading-color left-text mb-30">
            <img className="img-icon-md" src={tradeIcon} alt="" /> 
            Trade
          </h4>
          <h2>{data.trade.balance}</h2>
          Available Balance
        </div>
      </div>
      <div className="col-md-4 ">
        <div className="bg-white padding-15">
          <h4 className="sub-heading-color left-text mb-30"> 
            <img className="img-icon-md" src={walletIcon} alt="" />
            Holdings
          </h4>
          <div className="display-flex">
            <div className="half-width"> 
              
              <h2 className="">{data.holdings.balance}</h2>
              Available Balance
            </div>
            <div className="half-width">
               
               <h2 className="">{data.holdings.total}</h2>
              Total Holdings
            </div>
          </div>
          <div className="display-flex mt-30">
            <div className="half-width"> 
            <img className="img-holding" src={circle}  alt="" />
              
            </div>
            <div className="half-width " style={{"padding-top": "6%"}}>
               
              <div className="ul-circle">
                <div class="form-check">
                  <label class="form-check-label">
                    <input type="radio" class="form-check-input" name="optradio" />Current Value
                  </label>
                </div>
                <div class="form-check">
                  <label class="form-check-label">
                    <input type="radio" class="form-check-input" name="optradio" />Investment Value
                  </label>
                </div>
                <div class="form-check">
                  <label class="form-check-label">
                    <input type="radio" class="form-check-input" name="optradio" />P&L
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="display-flex mt-30 center-text">
            <div className="half-width border-ridge-1"> 
              Margins Used
              <h4 className="sub-heading-color left-text">{data.portfolio.accountValue}</h4>
              
            </div>
            <div className="half-width border-ridge-1">
               Account Value
               <h4 className="sub-heading-color center-text">{data.portfolio.accountValue}</h4>
              
            </div>
          </div>

        </div>
      </div>
    </div>
    
  </div>
)  
  
Market.propTypes = {  
  data: PropTypes.object.isRequired,  
}  
  
export default Market
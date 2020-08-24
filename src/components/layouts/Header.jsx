import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogout } from '../../actions/index';
import logo from '../../images/equate1.png';
import bellIcon from '../../images/bell.png';
import userIcon from '../../images/user-icon.png';
import logoutIcon from '../../images/logout.png';

class Header extends Component {
  
  handleLogOutClick = (e) => {  
    const { onLogout } = this.props;    
    localStorage.clear();
    onLogout();
  }

  getDateAMPAM = (d) => {
    d = new Date(d);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let hours = d.getHours();
    let minutes = d.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;

    return [
      d.getDate(),
      months[d.getMonth()],
      d.getFullYear()].join(' ')+' | '+
      [hours,
      minutes,
      d.getSeconds()].join(':') +' '+ ampm;
  }
    
  render() {
    const { appData,  userDetails } = this.props;
    
    userDetails.lastLogin = this.getDateAMPAM(userDetails.lastLogin);
    return (
      <div className="" id="header">
        <div className="row">
          <div className="col-xl-2 col-ls-6 col-md-12">
            <img className="app-logo" src={logo} alt="" width="123px" height="40px" />
          </div>
          <div className="col-xl-2 col-lg-6 col-md-12 pr-0 ">
            <span className="p-2">SENSEX</span>
            <div className="display-flex pt-2">
              <h4 className={appData.sensex.changeBy === '+' ? "heading-color-green" : "heading-color-red"}>
                <i className={appData.sensex.changeBy === '+' ? "fa fa-caret-up pr-1" : "fa fa-caret-down pr-1"} aria-hidden="true"></i>{appData.sensex.value}
                </h4>
              <div className="pad-top-2">{appData.sensex.changeBy} {appData.sensex.changeValue} ({appData.sensex.chengPerValue})</div>
            </div>                
          </div>
          <div className="col-xl-2 col-lg-6 col-md-12 pr-0 ">
            <span className="p-2">NIFTY</span>
            <div className="display-flex pt-2">
              <h4 className={appData.nifty.changeBy === '+' ? "heading-color-green" : "heading-color-red"}>
                <i className={appData.nifty.changeBy === '+' ? "fa fa-caret-up pr-1" : "fa fa-caret-down pr-1"} aria-hidden="true"></i>{appData.nifty.value}
              </h4>
              <div className="pad-top-2">{appData.nifty.changeBy} {appData.nifty.changeValue} ({appData.nifty.chengPerValue})</div>
            </div>                
          </div>
          <div className="col-xl-3 col-lg-6 col-md-12 pr-0 ">
            <div className="display-flex">
              <div className="pr-2">
                <a href="#" className="notification">
                  <span><img className="pl-2" src={bellIcon} alt="" width="25px" height="25px" /></span>
                  <span className="badge">{appData.trading.alert}</span>
                </a>
              </div>
              <div>
                <span className="p-2">Trading Limits</span>
                <h4 className="heading-color-green"><span className="color-black">&#8377;</span> {appData.trading.limits}</h4>
              </div>
              <div className="pt-3 pl-3">
                <select  id="select-trading">
                  <option value="trade_bal">Get Balance</option>
                </select>
              </div>
            </div>
          
          </div>
          <div className="col-xl-3 col-lg-6 col-md-12 pr-0 left-minus-2-per ">
            <div className="display-flex">
              <div className="pt-2 pr-1">
                <img className="" src={userIcon} alt="" width="25px" height="25px" />
              </div>
              <div>
                  <h6>Welcome <span className="sub-heading-color pl-0">{userDetails.userName}</span>[{userDetails.id}]</h6>
                  <span className="fs-12" >Last login: {userDetails.lastLogin} </span>
              </div>
              <div className="pl-3-per" onClick={this.handleLogOutClick}>
                <img  src={logoutIcon} alt="" width="30px" height="30px" />
              </div>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = {
    onLogout: userLogout,
};

export default connect(null, mapDispatchToProps)(Header);

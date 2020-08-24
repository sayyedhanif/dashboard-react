import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import marketIcon from '../../images/market.png';
import viewIcon from '../../images/view-icon-grey.png';
import ordersetIcon from '../../images/orders-icon.png';
import managetIcon from '../../images/trade.png';
import Market from '../Dashboard/Market'


class AppLayout extends PureComponent {
  constructor(props) {
    super(props);
    let {  data, userDetails} = this.props;

    this.state = {
      currentRoute:'market',
      menuTabs: [
        {title: 'Market', currentRoute: 'market', icon: marketIcon, Component:  <Market data={data} userDetails={userDetails}/>},
        {title: 'View', currentRoute: 'view', icon: viewIcon, Component: <p><h1>View</h1></p> },
        {title: 'Orders', currentRoute: 'orders', icon: ordersetIcon, Component: <p><h1>Orders</h1></p> },
        {title: 'Manage', currentRoute: 'manage', icon: managetIcon, Component: <p><h1>Manage</h1></p> },
      ]
    }
  }
  
  render() {
    let { menuTabs, currentRoute} = this.state;
    return (
      <div id='app-content'>
        <ul className="nav nav-tabs">
          {
            menuTabs.map(tab => (
              <li className="">
                <a className="" onClick ={ () => {this.setState({currentRoute :tab.currentRoute})}}>
                  
                  <span className={ currentRoute=== tab.currentRoute ? "inactive-tab active-tab" : "inactive-tab"}  > <img className="icon" src={tab.icon} alt=""/> {tab.title} </span>
                </a>
              </li>
            ))
          }          
        </ul>
        {
          menuTabs.map(tab => (
            (currentRoute === tab.currentRoute) ? tab.Component : null            
          ))
        }
      </div>
    );
  } 
};

const mapStateToProps = state => ({
  data: state.appData.data,
  userDetails: state.auth.userDetails

});

export default connect(mapStateToProps, null)(AppLayout);

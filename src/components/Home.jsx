import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import '../App.css';
import Header from './layouts/Header';
import AppLayout from './layouts/AppLayout';
import SideBar from './layouts/SideBar';


class Home extends React.Component {

  render() {

    return (
      <div className="container-fluid">
      <div id="d" className="row"> <Header {...this.props} />
        </div>

        <div id="" className="row">
          <div className=" col-lg-2 col-md-12 p-0"  >

            <SideBar {...this.props} />
          </div>
          <div className=" col-lg-10 col-md-12 dashboard-layout"  id="mainContent">
            <AppLayout {...this.props} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userDetails: state.auth.userDetails,
  appData: {
    sensex: {
      value: "37500.88",
      changeValue: "40.70",
      chengPerValue: "0.45%",
      changeBy: "+",
    },
    nifty: {
      value: "11200.70",
      changeValue: "20.40",
      chengPerValue: "0.18%",
      changeBy: "-",
    },
    trading: {
      limits: "20000.00",
      alert: 2,
    },
  }
});


export default withRouter(connect(mapStateToProps)(Home));

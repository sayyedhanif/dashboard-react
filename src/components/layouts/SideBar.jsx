import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import plusIcon from '../../images/plus-light-icon.png';
import {  Button } from 'react-bootstrap';
import $ from 'jquery'

class SideBar extends Component {
  componentDidMount() {
    $("#carousel").on('slide.bs.carousel', function(event){
      let obj = ['div.dot.one', 'div.dot.two', 'div.dot.three']
      console.log(event);
      $('.dot').removeClass('active-dot')
    $(obj[event.to]).addClass('active-dot')

    });
  }

  handleSlideClick = (e, slide) => {

    $("#carousel").carousel(slide);
    $('.dot').removeClass('active-dot')
    $(e.target).addClass('active-dot')
  }

  render() {
    const { appData } = this.props;
    

    return (
      <div id="left-sidebar">
        <div className="search">
          <input
            type="text"
            placeholder="Search and Add Security"
          />
          <span className="fa fa-icon"><img className="" src={plusIcon} alt="" width="20px" height="20px" /></span>
        </div>
        <div className="scroll">

          <div className="sidebar-div-scroll">
            <div className={appData.nifty.changeBy === '+' ? "heading-color-green display-flex" : "heading-color-red display-flex"}>
              <div><h5>NIFTY 50</h5></div>
              <div className="pl-4">
                <h5>
                {appData.nifty.value}<i className={appData.nifty.changeBy === '+' ? "fa fa-caret-up" : "fa fa-caret-down"} aria-hidden="true"></i>
                </h5>
              </div>
            </div>
            <div className="display-flex">
              <div className="pr-3">
                <h6>Index</h6>
              </div>
              <div className="pl-5">
                <h6>
                {appData.nifty.changeBy} {appData.nifty.changeValue} ({appData.nifty.chengPerValue})
                </h6>

              </div>
            </div>
          </div>
          <div className="sidebar-div-scroll">
            <div className={appData.sensex.changeBy === '+' ? "heading-color-green display-flex" : "heading-color-red display-flex"}>
              <div><h5>SENSEX</h5></div>
              <div className="pl-5">
                <h5>
                {appData.sensex.value}<i className={appData.sensex.changeBy === '+' ? "fa fa-caret-up" : "fa fa-caret-down"} aria-hidden="true"></i>
                </h5>
              </div>
            </div>
            <div className="display-flex">
              <div className="pr-3">
                <h6>Index</h6>
              </div>
              <div className="pl-5">
                <h6>
                {appData.sensex.changeBy} {appData.sensex.changeValue} ({appData.sensex.chengPerValue})
                </h6>

              </div>
            </div>
          </div>
          <div className="sidebar-div-scroll">
            <div className={appData.nifty.changeBy === '+' ? "heading-color-green display-flex" : "heading-color-red display-flex"}>
              <div><h5>NIFTY 50</h5></div>
              <div className="pl-4">
                <h5>
                {appData.nifty.value}<i className={appData.nifty.changeBy === '+' ? "fa fa-caret-up" : "fa fa-caret-down"} aria-hidden="true"></i>
                </h5>
              </div>
            </div>
            <div className="display-flex">
              <div className="pr-3">
                <h6>Index</h6>
              </div>
              <div className="pl-5">
                <h6>
                {appData.nifty.changeBy} {appData.nifty.changeValue} ({appData.nifty.chengPerValue})
                </h6>

              </div>
            </div>
          </div>
          <div className="sidebar-div-scroll">
            <div className={appData.sensex.changeBy === '+' ? "heading-color-green display-flex" : "heading-color-red display-flex"}>
              <div><h5>SENSEX</h5></div>
              <div className="pl-5">
                <h5>
                {appData.sensex.value}<i className={appData.sensex.changeBy === '+' ? "fa fa-caret-up" : "fa fa-caret-down"} aria-hidden="true"></i>
                </h5>
              </div>
            </div>
            <div className="display-flex">
              <div className="pr-3">
                <h6>Index</h6>
              </div>
              <div className="pl-5">
                <h6>
                {appData.sensex.changeBy} {appData.sensex.changeValue} ({appData.sensex.chengPerValue})
                </h6>

              </div>
            </div>
          </div>
        </div>
        <div className="sidebar-div-trade">
          <div className="">

            <div className="display-flex trade-head">
            <div className="dot three" onClick={(e) => { this.handleSlideClick(e,2); }}>
                3
              </div>
              <div className="dot two" onClick={(e) => { this.handleSlideClick(e,1); }}>
                2
              </div>

              <div className="dot one active-dot" onClick={(e) => { this.handleSlideClick(e,0); }}>
                1
              </div>
            </div>
          </div>
          <div className="carousel_">
          <div id="carousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carousel" data-slide-to="0" className="active"></li>
              <li data-target="#carousel" data-slide-to="1"></li>
              <li data-target="#carousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <h5>
                  Order Tradie-1
                </h5>
                <p>
                  Trade Exchange Confirm 342002043 29 Jan 2018 12:04:18 AM
                </p>
                <p>
                  Ought Regular Lot(477 Gail EQ)(NSE Equaity) Delve Normal ty 152/152 @36.03 Amount of Rs 5027.60 EOD for  client:Z123 Trade No. 34028 Qty trade 152 Pendinng qty 0
                </p>
              </div>
              <div className="carousel-item">
              <h5>
                  Order Tradie-2
                </h5>
                <p>
                  Trade Exchange Confirm 342002043 29 Jan 2018 12:04:18 AM
                </p>
                <p>
                  Ought Regular Lot(477 Gail EQ)(NSE Equaity) Delve Normal ty 152/152 @36.03 Amount of Rs 5027.60 EOD for  client:Z123 Trade No. 34028 Qty trade 152 Pendinng qty 0
                </p>
              </div>
              <div className="carousel-item">
              <h5>
                  Order Tradie-3
                </h5>
                <p>
                  Trade Exchange Confirm 342002043 29 Jan 2018 12:04:18 AM
                </p>
                <p>
                  Ought Regular Lot(477 Gail EQ)(NSE Equaity) Delve Normal ty 152/152 @36.03 Amount of Rs 5027.60 EOD for  client:Z123 Trade No. 34028 Qty trade 152 Pendinng qty 0
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, null)(SideBar));

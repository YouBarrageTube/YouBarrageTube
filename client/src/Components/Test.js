import React, { Component } from "react";
import Barrage from "../Libraries/Barrage";
import './Test.css';
import $ from 'jquery';
import Youtube from '../Libraries/Youtube';

class test extends Component {
  componentDidMount() {
    this.forceUpdate();
    this.$el = $(this.el);
    //this.player = new Youtube(this.el,'A0D1h30kXlI');
    this.player = new Youtube(this.el,'A0D1h30kXlI',parent);
    var barrage = new Barrage('#player');
    barrage.newComment('haha');
    barrage.newComment('haha again');

  }
  render() {
    return (
      <div id = "player">
        <div ref={el => this.el = el}>
        </div>
      </div>
    );
  }
}

export default test;

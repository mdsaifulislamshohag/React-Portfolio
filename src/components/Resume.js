import React, { Component } from 'react';
import "./formstyles.css";
import { useState } from "react";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'




export default class Resume extends Component {

  render() {
    


    return (
      <section id="resume">

        <div className="row education">

          <div>
            <h1>Book An Appointment</h1>
          </div>
          <div>
            <form class="form-inline" >
              <label for="email">Last Name</label>
              <input type="email" id="email" placeholder="Enter Last Name" name="email"></input>
              <label for="pwd">First Name</label>
              <input type="password" id="pwd" placeholder="Enter First Name" name="pswd"></input>
              <label for="country">Country</label>
              <select name="country">
                <option value="canada">Canada</option>
                <option value="australia">Australia</option>
                <option value="usa">USA</option>
              </select>
            </form>
          </div>
          








        </div>





      </section>
    );
  }
}
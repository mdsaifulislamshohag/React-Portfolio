import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
        <h1 className="text-3xl pb-2">CarePredict by CareSchedule</h1>
      <p className="text-xl">
        With our advanced ML algorithm, you can find out your estimated time of stay and cost!
      </p>
      {/*Age Field*/}
      <div className="mt-6">
        <div className="pb-4">
          <label 
            className="block font-semibold text-md pb-2"
            htmlFor="age"
          >
            Age
          </label>
          <input 
            className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-green-700 focus:ring-green-700" 
            type="text"  
            name="age" 
            placeholder="Enter your age"
          />
        </div>
      </div>
      {/*Severity of Illness Field*/}
      <div className="mt-6">
        <div className="pb-4">
          <label 
            className="block font-semibold text-md pb-2" 
            htmlFor="severity"
          >
            Severity of Illness
          </label>
          <select 
            name="severity"
            className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-green-700 focus:ring-green-700"
          >
            <option>Select an option</option>
            <option>Minor</option>
            <option>Moderate</option>
            <option>Extreme</option>
          </select>
        </div>
      </div>
      {/*Type of Admission Field*/}
      <div className="mt-6">
        <div className="pb-4">
          <label className="block font-semibold text-md pb-2" 
          htmlFor="admission"
          >
              Type of Admission
          </label>
          <select 
            name="admission"
            className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-green-700 focus:ring-green-700"
          >
            <option>Select an option</option>
            <option>Trauma</option>
            <option>Urgent</option>
            <option>Emergency</option>
          </select>
        </div>
      </div>
      {/*Button*/}
      <button type="submit" className="bg-pink-700 font-semibold text-sm text-white py-3 mt-6 rounded-lg w-40">
        Access results now!
      </button>
        </div>
      </div>
  </section>
        );
  }
}
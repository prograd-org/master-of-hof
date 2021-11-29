import React, { Component } from "react";

class HigherOrderComponent extends Component {
  constructor() {
    super();
    this.state = {
      userData: [
        { id: "1", name: "Joe", user_type: "Developer", age: 31, years: 11 },
        { id: "2", name: "Hill", user_type: "Designer", age: 26, years: 4 },
        { id: "3", name: "John", user_type: "Teacher", age: 24, years: 2 },
        { id: "4", name: "Sam", user_type: "Entreprenuer", age: 58, years: 25 },
        { id: "5", name: "Jack", user_type: "Designer", age: 43, years: 18 },
      ],
    };
  }
  renderItems() {
    const data = this.state.userData;
    const MapData = data.map((item) => {
      return (
        <p>
          <span className="span_item">Id: {item.id}</span>
          <span className="span_item">Name: {item.name}</span>
          <span className="span_item">User_type: {item.user_type}</span>
        </p>
      );
    });
    return MapData;
  }
  filterDesigner() {
    const data = this.state.userData;
    const MapData = data
      .filter((item) => {
        let filteredItem = item.user_type === "Designer";
        return filteredItem;
      })
      .map((item) => {
        return (
          <p>
            <span className="span_item">Id: {item.id}</span>
            <span className="span_item">Name: {item.name}</span>
            <span className="span_item">User_type: {item.user_type}</span>
          </p>
        );
      });
    return MapData;
  }
  filterLetter() {
    const data = this.state.userData;
    const MapData = data
      .filter((item) => {
        let filteredItem = item.name.indexOf("J") === 0;
        return filteredItem;
      })
      .map((item) => {
        return (
          <p>
            <span className="span_item">Id: {item.id}</span>
            <span className="span_item">Name: {item.name}</span>
            <span className="span_item">User_type: {item.user_type}</span>
          </p>
        );
      });
    return MapData;
  }
  filterAge()
  {
    const data = this.state.userData;
    const MapData = data
      .filter((item) => {
        let filteredItem = item.age > 28 && item.age<=50;
        return filteredItem;
      })
      .map((item) => {
        return (
          <p>
            <span className="span_item">Id: {item.id}</span>
            <span className="span_item">Name: {item.name}</span>
            <span className="span_item">User_type: {item.user_type}</span>
          </p>
        );
      });
    return MapData;
  }
  designerYears(){
      let totalage=0;
    const data = this.state.userData;
    data.filter((item) => {
        let filteredItem = item.user_type==="Designer";
        return filteredItem;
      }).map(item=>totalage+=item.years)  
    return totalage;
  }
  render() {
    return (
      <div>
          <h1>LIST ALL ITEMS</h1>
        {this.renderItems()}
        <h1>LIST ALL DATA BASED ON USERTYPE</h1>
        <div>{this.filterDesigner()}</div>
        <h1> FILTER ALL DATA STARTING WITH THE LETTER J</h1>
        <div>{this.filterLetter()}</div>
        <h1>FILTER DATA BASED ON AGE</h1>
        <div>
            {this.filterAge()}
        </div>
        <h1> FIND THE TOTAL EXPERIENCE OF THE DESIGNERS</h1>
        <div>{this.designerYears()}</div>
      </div>
    );
  }
}

export default HigherOrderComponent;

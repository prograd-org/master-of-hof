import React, { Component } from 'react'
export default class HigherOrderComponent extends Component {
  
    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24,years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

            ]
        }
    }
    render() {
   let sum =0;
    return (
     <div className='conatiner'>
         <h1>Display all Items</h1>
         <div className='first'>
                {this.state.userData.map((e)=>{
                    return(
                        <div className='data'>
                            <p>Id: {e.id}</p>
                            <p>Name: {e.name}</p>
                            <p>User Type: {e.user_type}</p>
                        </div>
                    );
                })}
         </div>
         <h1>Display based on user type</h1>
         <div className='first'>
              {
                  this.state.userData.filter((e)=>e.user_type=="Designer").map(a=>{
                      return(
                        <div className='data'>
                        <p>Id: {a.id}</p>
                        <p>Name: {a.name}</p>
                        <p>User Type: {a.user_type}</p>
                          </div>
                      )
                  })
              }
         </div>
         <h1>Filter all data starting with J</h1>
         <div className='first'>
              {
                  this.state.userData.filter((e)=>e.name.includes('J')).map(a=>{
                      return(
                        <div className='data'>
                        <p>Id: {a.id}</p>
                        <p>Name: {a.name}</p>
                        <p>User Type: {a.user_type}</p>
                          </div>
                      )
                  })
              }
         </div>

         <h1>Filter all data based on age greater than 28 and age less than or equal to 50</h1>
         <div className='first'>
              {
                  this.state.userData.filter((e)=>e.age>28 && e.age <=50).map(a=>{
                      return(
                        <div className='data'>
                        <p>Id: {a.id}</p>
                        <p>Name: {a.name}</p>
                        <p>User Type: {a.user_type}</p>
                          </div>
                      )
                  })
              }
         </div>
         <h1>Find the total years of designers</h1>
         <div className='first'>
              {
                  this.state.userData.filter((e)=>e.user_type=='Designer').map(a=>{
                      sum += a.years;
                  })
                  
              }
                {sum==0?<div></div>: <div className='data'>
                  <p> {sum}</p>
                  </div>}
         </div>
   
     </div>
    )
  }
}
 

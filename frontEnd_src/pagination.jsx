import React, { Component } from 'react'
//import axios from 'axios';
//import { saveAs } from 'file-saver';

import Page1 from './page1.jsx'
import Page2 from './page2.jsx'
//import Page3 from './page3.jsx'
  import Check from './checkData.jsx'
import Confirmation from './confirmation.jsx'
class pagination extends Component {
 state = {



   step: 1,
     name:'',
   firstName:'',
   lastName:'',
   HospitalId:'',
   contactDetails:'',
   Email:'',
   Booking:'',
   address:'',
  postcode:'',
    Ypb:'',
  Wastheonsetofpain:'',
  Sex: '',
}
// getData = (name, value) =>{
//   this.setState({[name]:value
//
//   })
// }
// go back to previous step
prevStep = () => {
  const { step } = this.state;
  this.setState({ step: step - 1 });
}

// proceed to the next step
nextStep = () => {
  const { step } = this.state;
  this.setState({ step: step + 1 });
}


 // handleChange = name => e => {
 //    this.setState({ [name]: e.target.value });
 //  };
 //    // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  }


   render() {

  const { step } = this.state;
    // const { firstName, lastName, HospitalId, contactDetails, Email, Booking, postcode, Howdidthepainstart, Wastheonsetofpain, Sex } = this.state;
      //   const values= { firstName , lastName , HospitalId, contactDetails, Email, Booking, postcode, Howdidthepainstart, Wastheonsetofpain, Sex }
     const {name, firstName, lastName,Hid, email, contact,Dob,address,Booking,postcode,Yob,Booking2,Gender,checked } = this.state;
    const values = { name, firstName, lastName,Hid,contact, email,Dob,address,Booking,postcode,Yob,Booking2,Gender,checked }
   switch(step){
     case 1:
       return(
         <Page1
        nextStep={this.nextStep }
        handleChange={this.handleChange}
        values={ values }
    />
);
  case 2:
  return(
    <Page2
          prevStep={ this.prevStep }
         nextStep={ this.nextStep }
         handleChange={ this.handleChange }
        values={ values }
       />
   );
     // case 3:
     //   return(
     // <Page3
     //     prevStep={ this.prevStep }
     //        nextStep={ this.nextStep }
     //        handleChange={ this.handleChange }
     //       values={ values }
     //      />
     //    );
     case 3:
       return(
     <Check
         prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
           values={ values }
          />
      );

        case 4:
            return(
          <Confirmation
              prevStep={ this.prevStep }
                 nextStep={ this.nextStep }
                 handleChange={ this.handleChange }
                values={ values }
               />


     );
  default:
// nothing


 }
}

}
export default pagination;

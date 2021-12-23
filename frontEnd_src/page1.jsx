import React  from 'react';
//import axios from 'axios';
//import { saveAs } from 'file-saver';
// import Dictaphone from './Dictaphone.js';
// import RecordSection from './RecordSection.jsx';
import DatePicker from 'react-datepicker';
// import Speechonown from './Speechonown'

import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './logo.jsx';
//  import Footer from './footer.jsx';
import './page1.css'

const page1 = ({ nextStep, handleChange, values }) => {

  const  Continue = e => {
       e.preventDefault();
       nextStep();
     }

//       handleChange = () =>{
//           this.props.onChange(this.state.name)
// };
  // createAndDownloadPdf = (e) => {
  //
  //   axios.post('/create-pdf', this.state)
  //     .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
  //     .then((res) => {
  //       const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
  //
  //       saveAs(pdfBlob, 'newPdf.pdf');
  //     })
  //
  // };
  // createAndDownload = e => {
  //
  //    this.props.createAndDownloadPdf();
  //  };


  //  const { values  ,handleChange } = this.props;
    return (
      <div>

              <Logo />
        <div className="PMT">
              <div className="container">
                   <div className="fieldname">
                       <label>First Name</label>
                         <input type="text"
                              name="firstName"
                              onChange={handleChange('firstName')}
                             placeholder="Enter FirstName"
                             defaultValue={values.firstName}>
                           </input>
                        </div>


                       <div className="fieldname">
                        <label>LastName</label>
                        <input type="text"
                          name="lastName"
                        onChange={handleChange('lastName')}
                          placeholder="Enter lastName"
                            defaultValue={values.lastName} />
                         </div>
                           <div className="fieldname">
                                 <label> Hospital Id  </label>
                                     <input type="number" id="Hid"
                                        name="Hid" placeholder="Hospital ID"
                                             onChange={handleChange('Hid')}
                                                defaultValue={values.Hid} />

                                              </div>
                                            <div className="fieldname">
                                                <label> Contact </label>
                                          <input type="text" id="contact"
                                         name="contact"  onChange={handleChange('contact')}
                                          placeholder="Contact Details"  defaultValue={values.contact} />
                                      </div>
                                      <div className="fieldname">
                                             <label> Email </label>
                                   <input type="email" id="email"
                                      name="email"
                                       onChange={handleChange('email')}
                                       placeholder="Enter email"
                                        defaultValue={values.email} />
                                   </div>
                                    <div className="fieldname">
                                           <label> DateOf Birth</label>
                                           <div className="DOB">
                                              <DatePicker></DatePicker>
                                            { /* selected={ this.state.startDate }

                                                  onChange={ this.handleChange }
                                                       name="startDate"

                                                        dateFormat="MM/dd/yyyy"*/}


                                                   </div>
                                                  </div>


                                                 <div className="fieldname">
                                                    <label>Are you filling this form </label>
                                                    <label className="radio1">forself
                                                      <span className="checkmark"></span></label>

                                                    <input type="radio" id="Booking" name="Booking"
                                                     checked="checked" value="For Self"
                                                     onChange={handleChange('Booking')}
                                                       defaultValue={values.Booking} />
                                                     <label className="radio1">forOthers
                                                       <span className="checkmark"></span>
                                                    </label>
                                                        <input type="radio" id="Booking" name="Booking"value="For Others"
                                                    onChange={handleChange('Booking')}
                                                    defaultValue={values.Booking}/>
                                             </div>
                                                <div className="fieldname">
                                               <label> Address</label>

                                                   <input type="text" id="address" name="address"
                                                      onChange={handleChange('address')}
                                                       defaultValue={values.address}
                                                        placeholder="Enter Address"  />
                                                   </div>

                                                   <div className="fieldname">
                                                   <label> post code </label>

                                                     <input type="text" id="postcode" name="postcode"
                                                        onChange={handleChange('postcode')}
                                                         defaultValue={values.postcode}
                                                        placeholder="postcode" />
                                                        </div>
                                                         <br />
                                                 </div>

                                               <div>
                                                  <button className="Next" onClick={Continue}>
                                                    Next
                                                  </button>
                                                  </div>
                                                </div>
                                              </div>



                                                );

                                            }

                                            export default page1;

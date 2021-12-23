import React from 'react'
<div className="PMT">
     <div className="container">
              <div className="fieldname">
                   <label>First Name</label>
                     <input type="text"

                          id="Fname"
                          name="Fname"
                          placeholder="Enter FirstName"

                          onChange={this.handleChange('firstName')}
                           />
                        </div>

                                <div className="fieldname">
                                        <label>LastName</label>
                                    <input type="text" id="Lname" name="Lname"
                                       onChange={this.handleChange} placeholder="Enter Last Name" />

                                       </div>
                                         <div className="fieldname">
                                             <label> Hospital Id  </label>

                                       <input type="text" id="HospitalId"
                                          name="HospitalId" placeholder="Hospital ID"
                                           onChange={this.handleChange} />
                                     </div>
                                     <div className="fieldname">
                                            <label> Contact </label>
                                  <input type="text" id="contactDetails"
                                     name="contactDetails"  onChange={this.handleChange}
                                      placeholder="Contact Details"/>
                                  </div>
                                  <div className="fieldname">
                                         <label> Email </label>
                               <input type="email" id="Email"
                                  name="Email"  onChange={this.handleChange}
                                   placeholder="Enter email"/>
                               </div>


                                             <div className="fieldname">
                                                <label>Are you filling this form </label>
                                                <input type="radio" id="Booking" name="Booking"
                                                 checked="checked" value="For Self"
                                                 onChange={this.handleChange}/>  <label className="radio1">forself
                                                 <span className="checkmark"></span></label>


                                                    <input type="radio" id="Booking" name="Booking"value="For Others"
                                                onChange={this.handleChange}/>    <label className="radio1">forOthers
                                                  <span className="checkmark"></span>
                                                </label>
                                          </div>
                                            <div className="fieldname">
                                           <label> Address</label>

                                               <input type="text" id="Address" name="Address"
                                                  onChange={this.handleChange} placeholder="Enter Address"  />
                                               </div>

                                               <div className="fieldname">
                                               <label> post code </label>

                                                 <input type="text" id="postcode" name="postcode"
                                                    onChange={this.handleChange} placeholder="postcode" />
                                                    </div>
                                                     <br />
                                             </div>



                                  <button className="Submit" onClick={this.createAndDownloadPdf}>Submit</button>


              </div>

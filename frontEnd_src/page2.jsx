import React from 'react';
import Logo from './logo.jsx';
//import axios from 'axios';
//import { saveAs } from 'file-saver';
import './page2.css';
import Template from './template';
 const page2 = ({ prevStep, nextStep, handleChange, values })=> {
// state= {
//   name: ''
//
// }
const Continue = e =>{
  e.preventDefault();
  nextStep();
};
const Previous = e =>{
  e.preventDefault();
     prevStep();
};
// handleChange = ({ target: { value, name }}) =>
// this.setState({ [name]: value})

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

    // const { values, handleChange } = this.props;
return(

  <div>
<div>
  <div className="container1">

  <Logo />
  <Template  />
  </div>

 </div>

     <div className="PMT">
       <div className="field1">
       <div className="fieldname2">
                <label>Year Pain Began</label>
             </div>
                <div className="fieldinput2">

                   <input type="text" id="Yob" name="Yob"
                     onChange={handleChange('Yob')} defaValue={values.Yob} />
               </div>

        </div>

                 <div className="field3">
                       <div className="fieldname3">
                             <label>Was the onset of pain</label>
                             <div className="fieldinput3">

                                 <label className="radio1">Instant
                              <input type="radio" id="Booking2" name="Booking2"
                                 value="Instant"onChange={handleChange('Booking2')}
                                   defaultValue={values.Booking2}/>

                               </label>
                                 <label className="radio1">Gradual

                            <input type="radio" id="Booking2" name="Booking2"
                              value="Gradual" onChange={handleChange('Booking2')}
                                defaultValue={values.Booking2}/>

                       </label>
                         </div>
                          </div>

              </div>
              <div className="field4">
                <div className="fieldname4">
                         <label>Gender</label>
                           <div className="fieldinput4">

                             <label className="radio1">Male
                          <input type="radio" id="Gender" name="Gender"
                            value="Male"onChange={handleChange('Gender')}
                              defaultValue={values.Gender}/>

                           </label>
                             <label className="radio1">female

                        <input type="radio" id="Gender" name="Gender"
                          value="female" onChange={handleChange("Gender")}
                            defaultValue={values.Gender}/>

                   </label>
            </div>
          </div>
        </div>
        <div className="field5">
         <div className="pain_start ">
                 <label>
            Please indicate what words describe your pain now</label>
              </div>
              <div className="fieldinput2">
                <div className="checkButtons">
                       <label className="check-label" for="check1">
                             Throbbing
                           </label>
                               <input type="checkbox"
                                id="check1"
                                 name="option1"/>

                      </div>
                        <br/>
                          <div className="checkButtons">
                                 <label className="check-label" for="check1">
                                       shooting
                                     </label>
                                         <input type="checkbox"
                                          id="check1"
                                           name="option1"/>

                                       </div><br/>
                                   <div className="checkButtons">
                                    <label className="check-label" for="check1">
                                            stabbing
                                      </label>
                                      <input type="checkbox"
                                         id="check1"
                                          name="option1"/>

                                        </div><br/>
                              <div className="checkButtons">
                               <label className="check-label" for="check1">
                                   stabbing
                               </label>
                                 <input type="checkbox"
                                    id="check1"
                                 name="option1"/>
                               </div><br/>
                               <div className="checkButtons">
                                <label className="check-label" for="check1">
                                    sharp
                                </label>
                                  <input type="checkbox"
                                     id="check1"
                                  name="option1"/>
                                </div><br/>
                                <div className="checkButtons">
                                 <label className="check-label" for="check1">
                                     cramping
                                 </label>
                                   <input type="checkbox"
                                      id="check1"
                                   name="option1"/>
                                 </div><br/>
                                 <div className="checkButtons">
                                  <label className="check-label" for="check1">
                                      Gnawing
                                  </label>
                                    <input type="checkbox"
                                       id="check1"
                                    name="option1"/>
                                  </div><br/>
                                  <div className="checkButtons">
                                   <label className="check-label" for="check1">
                                       Hot-Burning
                                   </label>
                                     <input type="checkbox"
                                        id="check1"
                                     name="option1"/>
                                   </div><br/>
                                   <div className="checkButtons">
                                    <label className="check-label" for="check1">
                                        Aching
                                    </label>
                                      <input type="checkbox"
                                         id="check1"
                                      name="option1"/>
                                    </div><br/>
                                    <div className="checkButtons">
                                     <label className="check-label" for="check1">
                                         Heavy
                                     </label>
                                       <input type="checkbox"
                                          id="check1"
                                       name="option1"/>
                                     </div><br/>
                                     <div className="checkButtons">
                                      <label className="check-label" for="check1">
                                          Tender
                                      </label>
                                        <input type="checkbox"
                                           id="check1"
                                        name="option1"/>
                                      </div><br/>
                                      <div className="checkButtons">
                                       <label className="check-label" for="check1">
                                        splitting
                                       </label>
                                         <input type="checkbox"
                                            id="check1"
                                         name="option1"/>
                                       </div><br/>
                                       <div className="checkButtons">
                                        <label className="check-label" for="check1">
                                            Tiring-Exhausting
                                        </label>
                                          <input type="checkbox"
                                             id="check1"
                                          name="option1"/>
                                        </div><br/>
                                        <div className="checkButtons">
                                         <label className="check-label" for="check1">
                                             sickening
                                         </label>
                                           <input type="checkbox"
                                              id="check1"
                                           name="option1"/>
                                         </div><br/>
                                         <div className="checkButtons">
                                          <label className="check-label" for="check1">
                                            Fearful
                                          </label>
                                            <input type="checkbox"
                                               id="check1"
                                            name="option1"/>
                                          </div><br/>
                                          <div className="checkButtons">
                                           <label className="check-label" for="check1">
                                               Punishing-Cruel
                                           </label>
                                             <input type="checkbox"
                                                id="check1"
                                             name="option1"/>
                                           </div><br/>





          </div>

         </div>
       <div>
              <button onClick={Previous}>Back</button>
                <button onClick={Continue}>Next</button>


    </div>
  </div>
</div>
)
};

export default page2;

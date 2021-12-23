import React from 'react';
import Logo from './logo.jsx';
//import axios from 'axios';
//import { saveAs } from 'file-saver';
import './page5.css';
import Template from './template';
const page5 = (handleChange,values) =>{

return(
    <div>
            <div className="container5">
                  <Logo />
                     <Template  />

            </div>

      <div className="field3">
      <div className="col-6">
          <label><strong>Please tick if you have seen any of the following people regarding your pain?</strong></label>

                       <div>
                        <input type="checkbox" value="none" id="check_1" name="checklist" required/>
                       <label for="check_1" className="check"><span>Pain Clinician or Anaesthetist</span></label>
                     </div>
                     <div>
                      <input type="checkbox" value="none" id="check_1" name="checklist" required/>
                     <label for="check_1" className="check"><span>Cardiologist</span></label>
                   </div>
                   <div>
                    <input type="checkbox" value="none" id="check_1" name="checklist" required/>
                   <label for="check_1" className="check"><span>Dermatology</span></label>
                 </div>
                 <div>
                  <input type="checkbox" value="none" id="check_1" name="checklist" required/>
                 <label for="check_1" className="check"><span>Ear Nose Throat</span></label>
               </div>
               <div>
                <input type="checkbox" value="none" id="check_1" name="checklist" required/>
               <label for="check_1" className="check"><span>GP General Pracitioner</span></label>
             </div>
             <div>
              <input type="checkbox" value="none" id="check_1" name="checklist" required/>
             <label for="check_1" className="check"><span>Physician</span></label>
           </div>
           <div>
            <input type="checkbox" value="none" id="check_1" name="checklist" required/>
           <label for="check_1" className="check"><span>Neurologist</span></label>
         </div>
         <div>
          <input type="checkbox" value="none" id="check_1" name="checklist" required/>
         <label for="check_1" className="check"><span>Gynaecologist</span></label>
       </div>
       <div>
        <input type="checkbox" value="none" id="check_1" name="checklist" required/>
       <label for="check_1" className="check"><span>Eye Surgeon</span></label>
     </div>
     <div>
      <input type="checkbox" value="none" id="check_1" name="checklist" required/>
     <label for="check_1" className="check"><span>Orthopaedic Surgeon</span></label>
    </div>
    <div>
     <input type="checkbox" value="none" id="check_1" name="checklist" required/>
     <label for="check_1" className="check"><span>Paediatrician</span></label>
     </div>
     <div>
     <input type="checkbox" value="none" id="check_1" name="checklist" required/>
       <label for="check_1" className="check"><span>Plastic Surgeon</span></label>
     </div>
    <div>
     <input type="checkbox" value="none" id="check_1" name="checklist" required/>
    <label for="check_1" className="check"><span>Phychologist</span></label>
    </div>
    <div>
     <input type="checkbox" value="none" id="check_1" name="checklist" required/>
    <label for="check_1" className="check"><span>Phychiatrist</span></label>
    </div>
    <div>
     <input type="checkbox" value="none" id="check_1" name="checklist" required/>
    <label for="check_1" className="check"><span>Plastic Surgeon</span></label>
    </div>
    <div>
     <input type="checkbox" value="none" id="check_1" name="checklist" required/>
    <label for="check_1" className="check"><span>Psychologist</span></label>
    </div>
    <div>
     <input type="checkbox" value="none" id="check_1" name="checklist" required/>
    <label for="check_1" className="check"><span>Psychiatrist</span></label>
    </div>
    <div>
     <input type="checkbox" value="none" id="check_1" name="checklist" required/>
    <label for="check_1" className="check"><span>Radiologist</span></label>
    </div>
    <div>
     <input type="checkbox" value="none" id="check_1" name="checklist" required/>
    <label for="check_1" className="check"><span>Surgeon</span></label>
    </div>
    <div>
     <input type="checkbox" value="none" id="check_1" name="checklist" required/>
    <label for="check_1" className="check"><span>Dentist </span></label>
    </div>
    <div>
     <input type="checkbox" value="none" id="check_1" name="checklist" required/>
    <label for="check_1" className="check"><span>Rheumatologist </span></label>
    </div>
    <div>
     <input type="checkbox" value="none" id="check_1" name="checklist" required/>
    <label for="check_1" className="check"><span>Hypnotist</span></label>
    </div>
    <div>
     <input type="checkbox" value="none" id="check_1" name="checklist" required/>
    <label for="check_1" className="check"><span>Osteopath</span></label>
    </div>
    <div>
     <input type="checkbox" value="none" id="check_1" name="checklist" required/>
    <label for="check_1" className="check"><span>Chiropractor</span></label>
    </div>
    <div>
     <input type="checkbox" value="none" id="check_1" name="checklist" required/>
    <label for="check_1" className="check"><span>Acupuncturist</span></label>
    </div>
    <div>
     <input type="checkbox" value="none" id="check_1" name="checklist" required/>
    <label for="check_1" className="check"><span>Faith Healer</span></label>
    </div>
    <div>
     <input type="checkbox" value="none" id="check_1" name="checklist" required/>
    <label for="check_1" className="check"><span>Physiotherapist</span></label>
    </div>
    <div>
     <input type="checkbox" value="none" id="check_1" name="checklist" required/>
    <label for="check_1" className="check"><span>Others</span></label>
    </div>
</div>
         </div>

         <div className="investigtion" >
          <h3>Please give details of any tests or investigation you have had for the pain listing the health professionals and hospitals if possible</h3>

        <p>please check necessary boxes</p>
        </div>

       <div className="scan-reports">
       <table>
         <tr>
           <th className="first-col"></th>
           <th>Awaiting</th>
           <th>Had Done</th>
           <th>Not Yet</th>
         </tr>
         <tr>
           <td className="first-col">Scans</td>
           <td><input type="radio" value="none" name="Scans" /></td>
           <td><input type="radio" value="none" name="Scans" /></td>
           <td><input type="radio" value="none" name="Scans" /></td>
         </tr>
         <tr>
           <td className="first-col">Blood Tests</td>
           <td><input type="radio" value="none" name="Blood" /></td>
           <td><input type="radio" value="none" name="Blood" /></td>
           <td><input type="radio" value="none" name="Blood" /></td>
         </tr>
         <tr>
           <td className="first-col">Nerve Tests</td>
           <td><input type="radio" value="none" name="Nerve" /></td>
           <td><input type="radio" value="none" name="Nerve" /></td>
           <td><input type="radio" value="none" name="Nerve" /></td>
         </tr>
         <tr>
           <td className="first-col">X-Rays</td>
           <td><input type="radio" value="none" name="X-Rays" /></td>
           <td><input type="radio" value="none" name="X-Rays" /></td>
           <td><input type="radio" value="none" name="X-Rays" /></td>
         </tr>
       </table>
         </div>
         <div className="fieldname5">
          <label>Please give the details of any major illnesses including the dates
            if possible</label>  <textarea rows="5"></textarea>

           </div>
           <div className="fieldname5">
            <label>Please give the details of any other present illnesses</label>
          <textarea rows="5"></textarea>


             </div>
             <div className="fieldname3">
                   <label>Have you ever received any help from mental health services?</label>
                   <div className="fieldinput3">

                       <label className="radio1">yes
                    <input type="radio" id="Booking5" name="Booking5"
                       value="yes"
                         defaultValue={values.Booking5}/>

                     </label>
                       <label className="radio2">No

                  <input type="radio" id="Booking5" name="Booking2"
                    value="No"
                      defaultValue={values.Booking5}/>

             </label>
               </div>
                </div>
       </div>




);
}

export default page5;

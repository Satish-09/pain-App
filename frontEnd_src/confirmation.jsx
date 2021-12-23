import React from 'react'
import { Container, Grid, List, ListItem, ListItemText, Button } from '@material-ui/core'
import axios from 'axios';
import { saveAs } from 'file-saver';
const Confirmation = ({ prevStep, nextStep, values, createAndDownloadPdf, name }) => {

  const { firstName, lastName,contact,Hid, email,Dob,address,Booking,postcode,Yob,Booking2,Gender} = values
  // const Continue = e => {
  //   e.preventDefault();
  //   nextStep();
  // }

  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  }
const submit = (values) =>{
  console.log("in submit" , values);


 axios.post('/create-pdf', values)
   .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
   .then((res) => {
     const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

     saveAs(pdfBlob, 'newPdf.pdf');
    })
  }


  return (
    <Container  component="main" maxWidth="xxx"direction="rows">
      <div>
        <List>
           <ListItem>
            <ListItemText primary="First Name" secondary={firstName}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Last Name" secondary={lastName}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Hospital Id" secondary={Hid}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Contact" secondary={contact}/>
          </ListItem>

          <ListItem>
            <ListItemText primary="Email" secondary={email}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Date of Birth" secondary={Dob}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Address" secondary={address}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="are you booking for" secondary={Booking}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Postal Code" secondary={postcode}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Year of Pain Began" secondary={Yob}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Was the onset of pain" secondary={Booking2}/>
          </ListItem>


          <ListItem>
            <ListItemText primary="sex" secondary={Gender}/>
          </ListItem>

        </List>

        <br />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Button
              onClick={ Previous }
              type="submit"

              variant="contained"
              color="lightgray"
            >
              Previous
            </Button>
          </Grid>

          <div><button className="Submit" onClick={()=>{submit(values)}}  color="lightgray">Submit</button></div>

        </Grid>
      </div>
    </Container>
  )
}

export default Confirmation

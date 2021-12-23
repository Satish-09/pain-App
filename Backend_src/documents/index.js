module.exports = ({ name, firstName, lastName,
   Hid,contact,Booking,address,
   postcode,email, Yob, check1, check2, Booking2, Gender }) => {
    const today = new Date();
return `
    <!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <title>PDF Result Template</title>
          <style>
             .invoice-box {
             max-width: 800px;
             margin: auto;
             padding: 60px;
             border: 1px solid #eee;
             box-shadow: 0 0 10px rgba(0, 0, 0, .15);
             font-size: 16px;
             line-height: 24px;
             font-family: 'Helvetica Neue', 'Helvetica',
             color: #555;
             }
             .margin-top {
             margin-top: 50px;
             }
             .justify-center {
             text-align: center;
             }
             .invoice-box table {
             width: 100%;
             line-height: inherit;
             text-align: left;
             }
             .invoice-box table td {
             padding: 5px;
             vertical-align: top;
             }
             .invoice-box table tr td:nth-child(2) {
             text-align: right;
             }
             .invoice-box table tr.top table td {
             padding-bottom: 20px;
             }
             .invoice-box table tr.top table td.title {
             font-size: 45px;
             line-height: 45px;
             color: #333;
             }
             .invoice-box table tr.information table td {
             padding-bottom: 40px;
             }
             .invoice-box table tr.heading td {
             background: #eee;
             text-align:right;
             border-bottom: 2px solid #ddd;
             font-weight: bold;
             }
             .invoice-box table tr.details td {
             padding-bottom: 20px;
             }
             .invoice-box table tr.item td {
             border-bottom: 1px solid #eee;
             }
             .invoice-box table tr.item.last td {
             border-bottom: none;
             }
             .invoice-box table tr.total td:nth-child(2) {
             border-top: 2px solid #eee;
             font-weight: bold;
             }
             @media only screen and (max-width: 600px) {
             .invoice-box table tr.top table td {
             width: 100%;
             display: block;
             text-align: center;
             }
             .invoice-box table tr.information table td {
             width: 100%;
             display: block;
             text-align: center;
             }
             }
          </style>
       </head>
       <body>
          <div class="invoice-box">
             <table cellpadding="0" cellspacing="0">
                <tr class="top">
                   <td colspan="2">
                      <table>
                         <tr>
                         <td valign="top">
				<div style="padding:10px 0 0;">
        <img src= "logo.png" alt="No image"
             title="image" style="max-width:300px;width:268px;
             max-width:268px;height:68px;max-height:68px;">	</td>
                         <td class ="container"

                         <h2>Chronic Pain Clinic Survey</h2>
                              <p>Please complete the survey below to help us collect the required information before your chronic pain clinc appointment</p>
                                 <h4>Thank you!</h4>


                              </td>

                           <td>
                          <td>
                               Date:${`${today.getDate()}.${today.getMonth() + 1}.${today.getFullYear()}.`}
                            </td>
                         </tr>
                      </table>
                   </td>
                </tr>
                <tr class="information">
                   <td colspan="2">
                      <table>
                         <tr>
                            <td>
                               Patient name: ${firstName} ${lastName}
                            </td>
                            <td>
                               Hospital Id: ${Hid}
                            </td>
                         </tr>
                      </table>
                   </td>
                </tr>
                <tr class="heading">
                   <td>Patient Details:</td>
                   <td>     </td>
                </tr>
                <tr class="item">
                   <td>FirstName:</td>
                   <td>${firstName}</td>
                </tr>
                <tr class="item">
                   <td>LastName:</td>
                   <td>${lastName}</td>
                </tr>
                <tr class="item">
                   <td>Contact:</td>
                   <td>${contact}</td>
                </tr>
                <tr class="item">
                   <td>Are you filling this form :</td>
                   <td>${Booking}</td>

                </tr>
                <tr class="item">
                   <td>Address:</td>
                   <td>${address}</td>

                </tr>
                <tr class="item">
                   <td>Postcode:</td>
                   <td>${postcode}</td>

                </tr>
                <tr class="item">
                   <td>Email:</td>
                   <td>${email}</td>

                </tr>
                <tr class="item">
                   <td>Year Pain Began:</td>
                   <td>${Yob}</td>

                </tr>
                <tr class="item">
                   <td>How did Pain Start:</td>
                   <td>${check1}</td>
                    <td>${check2}</td>

                </tr>
                <tr class="item">
                   <td>was the onset of pain:</td>
                   <td>${Booking2}</td>

                </tr>
                <tr class="item">
                   <td>Sex:</td>
                   <td>${Gender}</td>

                </tr>
             </table>
             <br />

          </div>
       </body>
    </html>
    `;
};

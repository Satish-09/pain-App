import React from 'react';
// import Logo from './Img/logo.jpg';
 import URL from './Img/bodymap.jpg'

 import ImageMapper from 'react-image-mapper';
const Mapper = props => {

const MAP = {
       name: "my-map",
       areas: [
               {
                    name: "RightArm",
                    coords: [173, 228,130,299,147,306,194,242],
                    preFillcolor: "blue",
                    fillColor: "red",
                 },
               ]
             };




    clicked(area) {
  		this.setState({
  			msg: `You clicked on ${area.shape} at coords ${JSON.stringify(
  				area.coords
  			)} !`
  		});
  	}
 })


return(
  <div className="bodymap">
    <div className="presenter">
      <div style={{ position: "relative" }}>
        <ImageMapper
 							src={URL}
 							map={MAP}
 							width={600}
              onClick={area => this.clicked(area)}
              />
            </div>
          </div>
        </div>
        );
        }


        export default Mapper;

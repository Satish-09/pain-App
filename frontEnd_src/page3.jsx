
import React from "react";
import ImageMapper from "react-image-mapper";
import Logo from './logo.jsx';
const URL = "https://www.researchgate.net/profile/Robert-Hristovski/publication/282346406/figure/fig2/AS:341573754736648@1458448937402/Body-map-Head-area-1-2-23-or-24-neck-area-3-or-25-shoulders-area-4-5-26.png";
const page3 = ({ prevStep, nextStep, handleChange, values })=> {

const Continue = e =>{
 e.preventDefault();
 nextStep();
};
const Previous = e =>{
 e.preventDefault();
    prevStep();
};
    class picture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 0,
      colors: ["yellow"],
      map: {
        name: "my-map",
        areas: [
          {
            name: "RightArm",
            shape: "poly",
            coords: [47, 116,22,158,34 ,168,61,128],
            preFillColor: "blue",
            fillColor:"yellow"
          },
          {
            name: "Right Shoulder",
            shape: "poly",
            coords: [116, 63,77,61, 66, 79, 84, 91, 119, 91],
            preFillColor: "blue",
                fillColor:"yellow"
          },
          {
            name: "LeftKnee",
            shape: "poly",
            coords: [123, 241, 121, 264, 142, 261, 144, 236],
              preFillColor: "blue",
               fillColor:"yellow"

          },
          {
            name: "LeftLowerChest",
            shape: "poly",
            coords: [119,100,119,91,152,92,144,133,129,112,120,101,135,126],
            preFillColor: "blue",
              fillColor:"yellow"
          },

        ]
      }
    };
  }
  getInitialState() {
    return { hoveredArea: null, msg: null, moveMsg: null  };
  }
  load() {
    this.setState({ msg: "Interact with image !" });
  }
  clicked(area) {
    this.setState({

      msg: `You clicked on ${area.name}`

    });
  }
  colorChange(area){
     this.setState({
       color: area.fillColor
     })
  }

  moveOnImage(evt) {
    const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
    this.setState({
      moveMsg: `You moved on the image at coords ${JSON.stringify(coords)} !`
    });
  }
  enterArea(area) {
    this.setState({
      hoveredArea: area,
      msg: `You entered  ${area.name} body Part`


    });
  }

  moveOnArea(area, evt) {
    const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
    this.setState({
      moveMsg: `You moved on ${area.shape} ${
        area.name
      } at coords ${JSON.stringify(coords)} !`
    });
  }

  getTipPosition(area) {
    return { top: `${area.center[1]}px`, left: `${area.center[0]}px` };
  }

  render() {
    return (
      <div className="grid">
        <Logo />
        <div className="presenter">
          <div className="image">
      <ImageMapper
              src={URL}
              map={this.state.map}
              width={500}
              onLoad={() => this.load()}
             onClick={area => this.clicked(area)}
              onDoubleClick={area => this.colorChange(area)}
              onMouseEnter={area => this.enterArea(area)}

              onMouseMove={(area, _, evt) => this.moveOnArea(area, evt)}

              onImageMouseMove={evt => this.moveOnImage(evt)}
            />
            {this.state.hoveredArea && (
              <span
                className="tooltip"
                style={{ ...this.getTipPosition(this.state.hoveredArea) }}
              >
                {this.state.hoveredArea && this.state.hoveredArea.name}
              </span>
            )}
          </div>
          <pre className="message">
            {this.state.msg ? this.state.msg : null}
          </pre>
          <pre>{this.state.moveMsg ? this.state.moveMsg : null}</pre>
        </div>
        <div className="source">
          <span
            onClick={() =>
              this.setState({ codeDetails: !this.state.codeDetails })
            }
          >
    </span>
          <pre>
            <code
              className="js"
              style={{ display: this.state.codeDetails ? "block" : "none" }}
            >

            </code>
          </pre>


          <pre>
            <code
              className="css"
              style={{ display: this.state.stylindDetails ? "block" : "none" }}
            >

            </code>
          </pre>

        </div>

      </div>

    );
  }
}
return(
  <div>
         <button onClick={Previous}>Back</button>
           <button onClick={Continue}>Next</button>


</div>

);
}
export default page3;

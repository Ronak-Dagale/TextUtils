import React from 'react'

const About = (props) => {
  // const [myStyle,setMyStyle]=useState({
  //   color:'black',
  //   backgroundColor:'white'
  // })

  let myStyle={
    color:props.mode?'white':'#042743',
    backgroundColor:props.mode?'rgb(36 74 104)':'white',
    // border:'2px solid',
    // borderColor:props.mode?'white':'black'
  }

 
  return (
    <div className='container' style={myStyle}>
      <h1 className='my-3'>About Us</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      The "About" section of TextUtils app embodies a simple yet powerful utility designed to enhance text manipulation. Offering a range of fundamental functionalities, TextUtils serves as a reliable tool for users seeking efficient text transformations. With features including conversion to uppercase and lowercase, users can seamlessly modify text cases to suit their specific requirements. This functionality not only streamlines the editing process but also ensures consistency and precision in written communication.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      TextUtils further empowers users with the capability to copy text to the clipboard effortlessly. By integrating this feature, the app facilitates seamless data transfer and sharing across various platforms and applications. Whether users wish to share formatted content or preserve important text segments for future reference, the copy to clipboard functionality enables swift and convenient data management. This functionality significantly enhances user productivity and workflow efficiency, fostering a seamless text editing experience.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong>Analyze Your Text</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      In addition to its robust text manipulation capabilities, TextUtils offers a clear functionality to reset text fields, providing users with a quick and convenient method to start afresh. With a single click, users can erase existing text and commence new editing tasks without unnecessary clutter or interruption. The clear functionality ensures a clean slate for users, enabling them to focus on their content creation process without distractions. By prioritizing simplicity and user-centric design, TextUtils embodies a versatile text editing solution tailored to meet the diverse needs of modern users.
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default About

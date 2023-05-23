import React, {useState} from 'react'

export default function About(props) {

    // const[myStyle, setMyStyle] = useState({
    //     color : 'black',
    //     backgroundColor : 'white'
    // })

    let myStyle = {
        color: props.mode === 'light'?'black':'white',
        backgroundColor: props.mode === 'light'?'white':'rgb(35 95 155)'
    }

  return (
    <div>
        <div className="container" style={{color: props.mode === 'light'?'black':'white'}}>
            <h1 className="my-3">About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button" type="button" style={myStyle}  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong>Analyze your text</strong>
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        TextUtils gives you a way to analyze your texts quickly and effciently. Be it Word count, character count, uppercase conversion, lowecase conversion or capitalization.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>Free to use</strong>
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        TextUtils is a free character counter tool that provides instant character count & word count statictics for a given text. TextUtils reports the numbers of words and characters. Thus it is suitable for writing text with word/character limit.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>Browser Compatible</strong>
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        This word counter software works in any web browser such as Chrome, Firefox, Safari, Microsoft Edge, Opera. It suits to count characters in facebook, blogs, books, excel document, pdf document, essays etc.
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

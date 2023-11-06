import React, { useState } from "react";
import NavbarComp from "../components/Navbar";
import "./Diagnosis.css";

export default function Diagnosis() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const updateUI = (data) => {
    // You can update the UI with the prediction and confidence here
    // For example, display the prediction and confidence in a div with an id
    let monkeypoxInt = Number(data.monkeypox);
    let nonMonkeypoxInt = Number(data.non_monkeypox);
    console.log(monkeypoxInt)
    monkeypoxInt*=100;
    nonMonkeypoxInt*=100;
    let mon = monkeypoxInt.toFixed(2);
    let nonmon= nonMonkeypoxInt.toFixed(2);

  
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML =  `
    <h5 id='mon'>
      MonkeyPox: ${mon} %
    </h5>
    <h5 id = 'nonmon'>
      Not-MonkeyPox: ${nonmon} %
    </h5>`
  };

  function sendData() {
    const formData = new FormData();
    formData.append("image", image);

    fetch('http://localhost:5000/predict', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      // Handle the response data here, e.g., update the UI with the result
      console.log(data);
      // Update the UI with the prediction and confidence
      updateUI(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

 
    const handleSubmit = (e) => {
      e.preventDefault();
      if (image) {
        console.log("Image uploaded:", image);
      } else {
        alert("Please select an image to upload.");
      }
    };


  return (
    <div>
      <NavbarComp />
      <div className="diagnosisContent">
        <div className="howto">
          <p>
            Get to know if you have Monkepox or Not using three simple steps
          </p>
          <ul>
            <li><b>Step 1</b> : Click on the Choose file to upload an image</li>
            <li><b>Step 2</b> : Select the image from your local files</li>
            <li><b>Step 3</b> : Click on Upload Image button</li>
            <li>
              Our Deep Learning Algorithm will then work on your image and
              provide you with your resuls shortly
            </li>
          </ul>
        </div>

        <h2 style={{ textAlign: "center" }}>Upload a Skin Lesion Image</h2>
        {image && (
          <div className="center">
          <div className="previewImage">
            <h3 style={{ textAlign: "center", fontSize: '20px', marginTop: '17px' }}>Uploaded Image Preview</h3>
            <img
              src={URL.createObjectURL(image)}
              alt="Uploaded Skin Lesion"
              style={{ height: '200px', width:'fitContent' }}
            />

          </div>
          <div id="result"></div>
          </div>
          
        )}
        <form onSubmit={(e) => { handleSubmit(e); sendData(); }} className="uploadForm" id="image-upload-form" action="/get_first_pixel_color" method="POST" enctype="multipart/form-data">
        <input
          type="file"
          accept=".jpg, .jpeg, .png" // Limit accepted file types
          onChange={handleImageUpload}
        />
        <button type="submit" >Upload Image</button>
      </form>

      </div>
        

        
      </div>
    
  );
  
}

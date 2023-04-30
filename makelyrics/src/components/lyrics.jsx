import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Lyrics() {
  const [fileContent, setFileContent] = useState(null);

  const fileReader =async (e) => {
    var fr = new FileReader();
    fr.onload =async function (e) {
        const time = e.target.result.match(/[0-9]{2}:[0-9]{2}['\.'][0-9]{2}/gm);
        const text = e.target.result.match(/[^\],]*[a-zA-Zآ-ی]/gm);
        let arrayOBJ = [];
        for (let obj of text) {
          console.log("D", text);
          let resObj = {};
          resObj["text"] = obj;
          arrayOBJ.push(resObj);
        }
    
        for (var index in arrayOBJ) {
          for (let indexT in time) {
            arrayOBJ[index].time = time[index];
          }
        }
        console.log(arrayOBJ)
    //   setFileContent(e.target.result);
    const res = await axios.post("http://localhost:4000/api/lyrics/add/644e79fe309d5240431198f3", arrayOBJ,{
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiIwOTM4NTA1MTYwMiIsImlhdCI6MTY4MTU2Nzg4NiwiZXhwIjoxNjg0MTU5ODg2fQ.-LdZercfBplNcMHJ3cAxK4bBKXt26xeYggZW3h2Z0cE`,
          'Content-Type': 'application/json'
        },
      });
    };
    fr.readAsText(e.target.files[0]);



  };
  return (
    <>
      <input
        type="file"
        onChange={(e) => fileReader(e)}
        name="inputfile"
        id="inputfile"
      />
      <br />

      <pre id="output"></pre>
    </>
  );
}

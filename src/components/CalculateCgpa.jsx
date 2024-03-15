import React, { useContext } from "react";
import { UserContext } from "../context/UserContextProvider";

export default function CalculateCgpa() {
  const { userdata, userdatatwo, userdatathree, userdatafour, userdatafive, userdatasix,userdatacheck,userdatachecktwo,userdatacheckfour,userdatacheckthree,userdatacheckfive,userdatachecksix} = useContext(UserContext);
  let result=0;
  
  let totalScore = 0;
  let totalSubjects = 0;

  // Calculate total score and total subjects based on presence of userdata
  if (userdatacheck) {
    totalScore += userdata;
    totalSubjects += 22;
  }
  console.log(totalScore)
  console.log(totalSubjects)
  if (userdatachecktwo) {
    totalScore += userdatatwo;
    totalSubjects += 22;
  }
  if (userdatacheckthree) {
    totalScore += userdatathree;
    totalSubjects += 22;
  }
  if (userdatacheckfour) {
    totalScore += userdatafour;
    totalSubjects += 22;
  }
  if (userdatacheckfive) {
    totalScore += userdatafive;
    totalSubjects += 21.5;
  }
  if (userdatachecksix) {
    totalScore += userdatasix;
    totalSubjects += 21.5;
  }


  // Handle the case where no userdata is present
  if (totalSubjects === 0) {
    result = "Data not enter yet";
  } else if (totalSubjects === 22) {
    result = totalScore / totalSubjects;
  } else if (totalSubjects === 44) {
    result = (userdata + userdatatwo) / totalSubjects;
  } else if (totalSubjects === 66) {
    result = (userdata + userdatatwo + userdatathree) / totalSubjects;
  } else if (totalSubjects === 88) {
    result = (userdata + userdatatwo + userdatathree + userdatafour) / totalSubjects;
  } else if (totalSubjects === 109.5) {
    result = (userdata + userdatatwo + userdatathree + userdatafour + userdatafive) / totalSubjects;
  } else if (totalSubjects === 130) {
    result = (userdata + userdatatwo + userdatathree + userdatafour + userdatafive + userdatasix) / totalSubjects;
  }
  console.log(result)

  return (
    <div
      style={{
        width: "100vw",
        height: "20vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: 'rgb(32,87,100)',
        backgroundImage:'linear-gradient(to top right,rgba(0,0,0,1),rgba(0,0,0,0))',
        color:'whitesmoke'
      }}
    >
        <h2>OVERALL CGPA :</h2>
      <div
        style={{
          width: "11rem",
          height: "3rem",
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          fontSize:"medium"
        }}
      >
        {result}
      </div>
    </div>
  );
}

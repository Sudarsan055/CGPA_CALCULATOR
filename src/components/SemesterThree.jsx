import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContextProvider";

export default function SemesterThree(props) {
    const [grade,setGrade]=useState({
        maths:'',
        basicelectronic:'',
        chemistry:'',
        pfps:'',
        civil:'',
        lab1:'',
        lab2:'',
        lab3:'',
        lab4:'',
    })
    
    const inputEvent=(event)=>{
        const value=event.target.value
        const name=event.target.name
        setGrade((prevalue)=>{
            if(name==="maths"){
                return{
                    maths:value,
                    basicelectronic:prevalue.basicelectronic,
                    chemistry:prevalue.chemistry,
                    pfps:prevalue.pfps,
                    civil:prevalue.civil,
                    lab1:prevalue.lab1,
                    lab2:prevalue.lab2,
                    lab3:prevalue.lab3,
                    lab4:prevalue.lab4
                }
            }else if(name==="basicelectronic"){
                return{
                    maths:prevalue.maths,
                    basicelectronic:value,
                    chemistry:prevalue.chemistry,
                    pfps:prevalue.pfps,
                    civil:prevalue.civil,
                    lab1:prevalue.lab1,
                    lab2:prevalue.lab2,
                    lab3:prevalue.lab3,
                    lab4:prevalue.lab4 
                }
            }else if(name==="chemistry"){
                return{
                    maths:prevalue.maths,
                    basicelectronic:prevalue.basicelectronic,
                    chemistry:value,
                    pfps:prevalue.pfps,
                    civil:prevalue.civil,
                    lab1:prevalue.lab1,
                    lab2:prevalue.lab2,
                    lab3:prevalue.lab3,
                    lab4:prevalue.lab4 
                }
            }else if(name==="pfps"){
                return{
                    maths:prevalue.maths,
                    basicelectronic:prevalue.basicelectronic,
                    chemistry:prevalue.chemistry,
                    pfps:value,
                    civil:prevalue.civil,
                    lab1:prevalue.lab1,
                    lab2:prevalue.lab2,
                    lab3:prevalue.lab3,
                    lab4:prevalue.lab4 
                }
            }else if(name==="civil"){
                return{
                    maths:prevalue.maths,
                    basicelectronic:prevalue.basicelectronic,
                    chemistry:prevalue.chemistry,
                    pfps:prevalue.pfps,
                    civil:value,
                    lab1:prevalue.lab1,
                    lab2:prevalue.lab2,
                    lab3:prevalue.lab3,
                    lab4:prevalue.lab4 
                }
            }else if(name==="lab1"){
                return{
                    maths:prevalue.maths,
                    basicelectronic:prevalue.basicelectronic,
                    chemistry:prevalue.chemistry,
                    pfps:prevalue.pfps,
                    civil:prevalue.civil,
                    lab1:value,
                    lab2:prevalue.lab2,
                    lab3:prevalue.lab3,
                    lab4:prevalue.lab4 
                }
            }else if(name==="lab2"){
                return{
                    maths:prevalue.maths,
                    basicelectronic:prevalue.basicelectronic,
                    chemistry:prevalue.chemistry,
                    pfps:prevalue.pfps,
                    civil:prevalue.civil,
                    lab1:prevalue.lab1,
                    lab2:value,
                    lab3:prevalue.lab3,
                    lab4:prevalue.lab4 
                }
            }else if(name==="lab3"){
                return{
                    maths:prevalue.maths,
                    basicelectronic:prevalue.basicelectronic,
                    chemistry:prevalue.chemistry,
                    pfps:prevalue.pfps,
                    civil:prevalue.civil,
                    lab1:prevalue.lab1,
                    lab2:prevalue.lab2,
                    lab3:value,
                    lab4:prevalue.lab4 
                }
            }else if(name==="lab4"){
                return{
                    maths:prevalue.maths,
                    basicelectronic:prevalue.basicelectronic,
                    chemistry:prevalue.chemistry,
                    pfps:prevalue.pfps,
                    civil:prevalue.civil,
                    lab1:prevalue.lab1,
                    lab2:prevalue.lab2,
                    lab3:prevalue.lab3,
                    lab4:value
                }
            } 
        })
    }
    const [toggle,setToggle]=useState(false)
    const [sgpaThree,setsgpaThree]=useState(0)
    const[gradepointThree,setGradepointThree]=useState(0)
    const{Datathree,Datacheckthree}=useContext(UserContext)
    const calculatesgpa=()=>{
        setsgpaThree(()=>{
            if(grade.maths<11&&grade.maths>1 && grade.basicelectronic<11&&grade.basicelectronic>1 && grade.pfps<11&&grade.pfps>1 && grade.civil<11&&grade.civil>1 && grade.chemistry<11&&grade.chemistry>1 && grade.lab1<11&&grade.lab1>1 &&grade.lab2<11&&grade.lab2>1 && grade.lab3<11&&grade.lab3>1 && grade.lab4<11&&grade.lab4>1){
                return (grade.maths*4+grade.basicelectronic*3+grade.pfps*3+grade.civil*3+grade.chemistry*3+grade.lab1*1.5+grade.lab2*1.5+grade.lab3*1.5+grade.lab4*1.5)/22
            }else{
                return("Enter the correct value")
            }
        })
        setGradepointThree(()=>{
            if(grade.maths<11&&grade.maths>1 && grade.basicelectronic<11&&grade.basicelectronic>1 && grade.pfps<11&&grade.pfps>1 && grade.civil<11&&grade.civil>1 && grade.chemistry<11&&grade.chemistry>1 && grade.lab1<11&&grade.lab1>1 &&grade.lab2<11&&grade.lab2>1 && grade.lab3<11&&grade.lab3>1 && grade.lab4<11&&grade.lab4>1){
                return (grade.maths*4+grade.basicelectronic*3+grade.pfps*3+grade.civil*3+grade.chemistry*3+grade.lab1*1.5+grade.lab2*1.5+grade.lab3*1.5+grade.lab4*1.5)
            }else{
                return("Enter the correct value")
            }
        })
        setToggle(()=>{
            if(grade.maths<11&&grade.maths>1 && grade.basicelectronic<11&&grade.basicelectronic>1 && grade.pfps<11&&grade.pfps>1 && grade.civil<11&&grade.civil>1 && grade.chemistry<11&&grade.chemistry>1 && grade.lab1<11&&grade.lab1>1 &&grade.lab2<11&&grade.lab2>1 && grade.lab3<11&&grade.lab3>1 && grade.lab4<11&&grade.lab4>1){
                return true
            }
        })
        Datathree(gradepointThree)
        Datacheckthree(toggle)
    }
    
  return (
    <div className="Cgpacalculator">
      <h1 style={{ margin: "0" }}>Semester-III</h1>
      <label htmlFor="">{props.course1}</label>
      <input type="number" name='maths' value={grade.maths}  onChange={inputEvent}/>
      <label htmlFor="">{props.course2}</label>
      <input type="number" name='basicelectronic' value={grade.basicelectronic}  onChange={inputEvent}/>
      <label htmlFor="">{props.course3}</label>
      <input type="number" name='chemistry' value={grade.chemistry}  onChange={inputEvent}/>
      <label htmlFor="">{props.course4}</label>
      <input type="number" name='pfps' value={grade.pfps}  onChange={inputEvent}/>
      <label htmlFor="">{props.course5}</label>
      <input type="number" name='civil' value={grade.civil}  onChange={inputEvent}/>
      <label htmlFor="">{props.course6}</label>
      <input type="number" name='lab1' value={grade.lab1}  onChange={inputEvent}/>
      <label htmlFor="">{props.course7}</label>
      <input type="number" name='lab2' value={grade.lab2}  onChange={inputEvent}/>
      <label htmlFor="">{props.course8}</label>
      <input type="number" name='lab3' value={grade.lab3}  onChange={inputEvent}/>
      <label htmlFor="">{props.course9}</label>
      <input type="number" name='lab4' value={grade.lab4}  onChange={inputEvent}/>
      <button style={{ marginTop: "10px" }} onClick={calculatesgpa}>SUBMIT</button>
      <div
        style={{
          width: "11rem",
          height: "3rem",
          marginTop: "10px",
          textAlign: "center",
          border:'2px black solid'
        }}
      >
        SGPA:<br/>{sgpaThree}
      </div>
    </div>
  );
}

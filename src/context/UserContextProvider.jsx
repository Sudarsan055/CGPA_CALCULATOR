import React, { useState,createContext } from "react";

export const UserContext=createContext();
const UserContextProvider=({children})=>{
    const [user,setUser]=useState("")
    const [usertwo,setUsertwo]=useState("")
    const [userthree,setUserthree]=useState("")
    const [userfour,setUserfour]=useState("")
    const [userfive,setUserfive]=useState("")
    const [usersix,setUsersix]=useState("")
    const [usercheck,setUserCheck]=useState()
    const [userchecktwo,setUserChecktwo]=useState()
    const [usercheckthree,setUserCheckthree]=useState()
    const [usercheckfour,setUserCheckfour]=useState()
    const [usercheckfive,setUserCheckfive]=useState()
    const [userchecksix,setUserChecksix]=useState()
    const Data=(item)=>{
        setUser(item)
        return item
    }
    const Datacheck=(item)=>{
        setUserCheck(item)
        return item
    }
    
    const Datatwo=(item)=>{
        setUsertwo(item)
        return item
    }
    const Datachecktwo=(item)=>{
        setUserChecktwo(item)
        return item
    }

    const Datathree=(item)=>{
        setUserthree(item)
        return item
    }
    const Datacheckthree=(item)=>{
        setUserCheckthree(item)
        return item
    }

    const Datafour=(item)=>{
        setUserfour(item)
        return item
    }
    const Datacheckfour=(item)=>{
        setUserCheckfour(item)
        return item
    }

    const Datafive=(item)=>{
        setUserfive(item)
        return item
    }
    const Datacheckfive=(item)=>{
        setUserCheckfive(item)
        return item
    }

    const Datasix=(item)=>{
        setUsersix(item)
        return item
    }
    const Datachecksix=(item)=>{
        setUserChecksix(item)
        return item
    }

    let userdata=user
    let userdatatwo=usertwo
    let userdatafour=userfour
    let userdatathree=userthree
    let userdatafive=userfive
    let userdatasix=usersix
    let userdatacheck=usercheck
    let userdatachecktwo=userchecktwo
    let userdatacheckfour=usercheckfour
    let userdatacheckthree=usercheckthree
    let userdatacheckfive=usercheckfive
    let userdatachecksix=userchecksix
    return(
        <UserContext.Provider value={{Data,userdata,Datatwo,userdatatwo,Datathree,userdatathree,Datafour,userdatafour,Datafive,userdatafive,Datasix,userdatasix,Datacheck,userdatacheck,Datachecktwo,userdatachecktwo,Datacheckthree,Datacheckfour,Datacheckfive,Datachecksix,userdatacheckfour,userdatacheckthree,userdatacheckfive,userdatachecksix}}>
            {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider;
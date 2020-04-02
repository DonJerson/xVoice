import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { transform } from '@babel/core';
import Calendar from './Calendar';

var dateFormat = require('dateformat');

const getUrl = window.location;
let host
if(getUrl.host.includes(":")){
  host = getUrl.host.substring(0, getUrl.host.length - 5);
}else{host = getUrl.host;}

const baseUrl = getUrl.protocol+ "//" + host +":8181/";
const axios = require('axios');
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = false;

const customerBase = {id: 1,
apiUsageHistory: [],
recargasHistory: [],
usageHistory: Array(2),
0: {id: 1,
  method: "INVITE",
  from_tag: "182c4d3c",
  to_tag: "as20b73407",
  callid: "cEkRV392kx6FSq3oqmdIZA..",
  sip_code: "200",
  sip_reason: "OK",
  time: "2020-02-18T02:58:05Z",
  src_user: "4776200196",
  src_domain: "3.81.8.219",
  src_ip: "201.229.162.40",
  dst_ouser: "15612402968",
  dst_user: "15612402968",
  dst_domain: "64.2.142.93",
  consumer: 1},
1: {id: 2,
  method: "BYE",
  from_tag: "182c4d3c",
  to_tag: "as20b73407",
  callid: "cEkRV392kx6FSq3oqmdIZA..",
  sip_code: "200",
  sip_reason: "OK",
  time: "2020-02-18T02:58:12Z",
  src_user: "4776200196",
  src_domain: "3.81.8.219",
  src_ip: "201.229.162.40",
  dst_ouser: "15612402968",
  dst_user: "15612402968",
  dst_domain: "66.241.97.51",
  consumer: 1},
length: 2,
__proto__: Array(0),
subscribers: [{id: 2, username: "4776200196", password: "Pri3to"}],
password: "pbkdf2_sha256$180000$ssnEgRIWpT23$zXiLCGZD+tQDLSBkzSfuQog2+fKp5F6KvbGu4s92nnE=",
last_login: "2020-02-18T02:43:12.790044Z",
is_superuser: true,
username: "prieto",
first_name: "",
last_name: "",
email: "prieto@admin.com",
is_staff: true,
is_active: true,
date_joined: "2020-02-18T02:28:36.782698Z",
name: null,
balance: "-0.001",
phoneNumber: null,
groups: [],
user_permissions: []}

const EmptyFunction=()=>{
  return(
    <>
    </>
  )
}

const NavButtons=(props)=>{
  const logout=()=>{
    props.userPack.handleLogout()
  }
  return(
    <>
              <li><a className="navTitle" onClick={logout} href="#">Logout</a></li>
    </>
  )
}
const TableLineUser=(props)=>{
  const deleteUser=(e)=>{
    console.log("alto ahi",props.username)
    e.preventDefault()
    props.deleteUser(props.username)
  }
  return(
    <>
    <tr>           
      <td>{props.username}</td>
      <td>{props.password}</td>
      <td><a onClick={deleteUser} href="/" style={{position:"relative",bottom:"28px"}}><img style={{width:"30px",height:"30px"}}src="svg/delete.svg" alt="Kiwi standing on oval" className="deleteIcon"/></a>-</td>
      </tr>
    </>
  )
}
const UserLine=(props)=>{
  const handleSelect=(e)=>{
    e.preventDefault()
    props.handleSelect(props.username)
  }
  let isSelected =false
  props.seletedUsers.forEach(user => {
    if(user===props.username){
      isSelected=true
    }
  });
  return(
    <>
    <a href="#" style={{backgroundColor:isSelected?"rgb(0, 112, 186)":"",color:isSelected?"white":""}}onClick={handleSelect}>{props.username}</a>
    <hr className="solid"></hr>
    </>
  )
}
const TableLineUsage=(props)=>{
  return(
    <>
    <tr> 
      <td>{props.line.src_user}</td>
      <td>{props.line.dst_user}</td>
      <td>{props.line.startTime}</td>
      <td>{props.line.duration}</td>
      <td>{props.line.duration*0.010}</td>
      </tr>
    </>
  )
}
const FullDialog=(props)=>{
  const size = props.userPack.dimensions.width<800?"26px":"50px"
  const picWidth = props.userPack.dimensions.width<800?"60px":"130px"
  const picHeight = props.userPack.dimensions.width<800?"60px":"130px"
  const smallLetter = props.userPack.dimensions.width<800?"18px":"30px"
  const myWidth = props.userPack.dimensions.width<800?"310px":"600px"
  function off(e) {
    document.getElementById("overlay").style.display = "none";
  }
  return(
    <><div id="overlay" onClick={off}>
      <div className="row">
      <div id="text">
        <h1 style={{minWidth:myWidth,marginBottom:"8px",fontSize:size}}>Elija su método de pago:</h1>
      <div className="row center" >
        <div className="col-xs-auto glowingTarjeta" style={{width:picWidth,height:picHeight,marginRight:"40px"}}>
            <div className="row center" style={{zIndex:"15",borderWidth:"10px !important",borderColor:"black !important" }}>
              <img src="https://cdn3.iconfinder.com/data/icons/finance-223/64/x-03-512.png" style={{width:picWidth,height:picHeight}}/>
              <div className="col-xs-auto" style={{width:picWidth,height:picHeight}}>
              <div id="text" style={{position:"relative",top:"30px",fontSize:smallLetter}}>Depósito</div>
              </div>
            </div>
            <div className="row center">
              <div className="col-xs-auto" style={{width:picWidth,height:picHeight}}>
                
              </div>
            </div>
        </div>
        <div className="col-xs-auto glowingTarjeta" style={{width:picWidth,height:picHeight,marginRight:"40px"}}>
        
        <div className="row center" style={{borderWidth:"10px !important",borderColor:"black !important" }}>
              <img src="https://r5y5g3p7.rocketcdn.me/wp-content/uploads/2019/07/Bitcoin-dark-web-drug-dealer-caught.jpg" style={{width:picWidth,height:picHeight}}/>
              <div className="col-xs-auto" style={{width:picWidth,height:picHeight}}>
              <div id="text" style={{position:"relative",top:"30px",right:"15px",fontSize:smallLetter}}>Bitcoin</div>
              </div>
            </div>
            <div className="row center">
              <div className="col-xs-auto" style={{width:picWidth,height:picHeight}}>
                
              </div>
            </div>
          </div>
          <div className="col-xs-auto glowingTarjeta" style={{width:picWidth,height:picHeight,marginRight:"20px"}}>
        
        <div className="row center" style={{borderWidth:"10px !important",borderColor:"black !important" }}>
              <img src="/svg/credit-card.svg" style={{width:picWidth,height:picHeight}}/>
              <div className="col-xs-auto" style={{width:picWidth,height:picHeight}}>
              <div id="text" style={{position:"relative",top:"30px",fontSize:smallLetter}}>Tarjeta</div>
              </div>
            </div>
            <div className="row center">
              <div className="col-xs-auto" style={{width:picWidth,height:picHeight}}>
                
              </div>
            </div>
          </div>
          <div className="row center" style={{position:"relative",top:"60px"}}>
          <h1 style={{minWidth:myWidth,marginBottom:"8px",fontSize:size}}>Soporte ICQ: 742481225</h1>
          </div>
         
     
      </div>
        
        </div>
      </div>

      </div>
    </>
  )
}

const NavBar=(props)=>{
  const [mobileOpen, setMobileOpen]=React.useState(false);
  const toggleRegistration=(e)=>{
    //console.log(e.target.parentElement)
    setMobileOpen(prev=>!prev)
    //console.log(mobileOpen)
  }

  const isMobile=props.dimensions.width<768
  return(
    <><FullDialog userPack={props.userPack}/>
        <header className="header">
        
            {isMobile?
            <>
              <div className={mobileOpen?"burguer change":"burguer"} style={{position:"relative",left:"10px"}} onClick={toggleRegistration}>
        
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
              </div>
                <ul className={mobileOpen?"main-nav":"main-nav closed"} id="navContent">

                <NavButtons userPack={props.userPack}/>
                </ul>
              </>
            :
            <>
            <h1 className="logo"><a className="navTitle" href="#">XVOICE</a></h1>
            <ul className="main-nav" id="navContent">
          <NavButtons userPack={props.userPack}/>
      </ul>
      </>
    }
        </header> 
    </>
  )
}
const Registration=(props)=>{
  const [registration,setRegistration]=React.useState(false)
  let username = window.localStorage.getItem("username")
  let password = window.localStorage.getItem("password")
  if(username){
    //pass
  } else{
    username = props.userPack.email
    password = props.userPack.password
  }

  const [remember,setRemember]=React.useState(true)
  const [agree,setAgree]=React.useState(false)
  const [name,setName]=React.useState("")
  const [cellphone,setCellphone]=React.useState("")

  const handleName=(e)=>{
    setName(e.target.value)
  }
  const handleCellphone=(e)=>{
    const received = e.target.value
    if(received===""){
      setCellphone(received)
    }
    try{
      const myInt = parseInt(received)
      if(isNaN(myInt)){
        return
      }
    }catch(error){
      console.log("error",error)
      return}
    setCellphone(received.replace(/[^\d]+/g,''))
  }
  const handleRemember=()=>{
    setRemember(prev=>!prev)
  }
  const handleAgree=()=>{
    setAgree(prev=>!prev)
  }
  const handleUsername=(e)=>{
    props.userPack.handleUpdate("email",e.target.value)
  }
  const handlePassword=(e)=>{
    props.userPack.handleUpdate("password",e.target.value)
  }
  const handleLogin=()=>{
    props.userPack.handleLogin(username,password,remember)
  }
  const handleRegister=()=>{
    props.userPack.handleRegister(username,password,name,cellphone)
  }
  const setRegistering=()=>{
    setRegistration(true)
  }
  const setLogging=()=>{
    setRegistration(false)
  }
  const handleEnter=(e)=>{
    if(e.key==="Enter"){
      props.userPack.handleLogin("","",remember)
    }

  }
  const settingUp = registration?"active":""
  const logging = !registration?"active":""
  //console.log(active, "act")
  return(
    <>
    <div className="login-container" style={{marginBottom:"62px"}}>
	<div className="form-login">
		<ul className="login-nav">
			<li className={"login-nav__item "+logging}>
				<a onClick={setLogging}>Sign In</a>
			</li>
			<li className={"login-nav__item "+settingUp}>
				<a onClick={setRegistering}>Sign Up</a>
			</li>
		</ul>
		<label htmlFor="login-input-user" className="login__label">
			Email, Username or Phonenumber
		</label>
		<input id="login-input-user" value={username} onChange={handleUsername} className="login__input" type="text" />
		<label htmlFor="login-input-password" className="login__label">
			Password
		</label>
		<input id="login-input-password" value={password} onKeyPress={handleEnter} onChange={handlePassword} className="login__input" type="password" />
    {registration?
    <>
    		<label htmlFor="login-input-user" className="login__label">
			Nombre
		</label>
		<input id="login-input-user" value={name} onChange={handleName} className="login__input" type="text" />
    <label htmlFor="login-input-user" className="login__label">
			Celular
		</label>
		<input id="login-input-user" value={cellphone} onChange={handleCellphone} className="login__input" type="text" />
		<label htmlFor="login-sign-up" className="login__label--checkbox">
			<input id="login-sign-up" type="checkbox" checked={agree} onChange={handleAgree} className="login__input--checkbox" />
			Estoy de acuerdo con las condiciones
		</label>
		<button className="login__submit" onClick={handleRegister}>Registrarme</button>
    </>
    :
    <>
    <label htmlFor="login-sign-up" className="login__label--checkbox">
    <input id="login-sign-up" type="checkbox" checked={remember} onChange={handleRemember} className="login__input--checkbox" />
      Mantenme logueado
    </label>
    <button className="login__submit" onClick={handleLogin}>Entrar</button>
    </>
  }
	</div>
	<a href="#" className="login__forgot">Forgot Password?</a>
</div>
    </>
  )
}
class App extends Component {
  toggleRegistration = (x) =>{
    x.target.classList.toggle("change");
    let element = document.querySelector('#navContent')
    element.classList.toggle('closed')
    //console.log("success",element)
  }
  recargar=()=>{
    document.getElementById("overlay").style.display = "block";
    console.log("working")
  }
  updateDimensions=()=>{
    const w = window;
    const d = document;
    const documentElement = d.documentElement;
    const body = d.getElementsByTagName('body')[0];
    const width = w.innerWidth || documentElement.clientWidth || body.clientWidth;
    const height = w.innerHeight || documentElement.clientHeight || body.clientHeight;
    if(height-this.state.dimensions.height<60 &&height-this.state.dimensions.height>0 || width-this.state.dimensions.width===0){
      return
    }
    if (width < 763){
      const newDimensions={width:width, height:height, isMobile:true}
      this.setState({dimensions:newDimensions})
      return
    }
    const newDimensions={width:width, height:height, isMobile:false}
    this.setState({dimensions:newDimensions})
  }
  fetchHistory=()=>{
    let history = []
    const token = window.localStorage.getItem('token')
    axios.defaults.headers.post['Authorization']="JWT "+token
    this.setState({loadingHistorial:true})
    axios.post(baseUrl + `getHistory/`,{"amount":50}).then(res=>{
      const history = res.data.history
      const totalCalls = history.length
      //console.log("respuesta",res.data)
      // history.forEach(startLog => {
      //   if(startLog.method==="INVITE"){
      //     let endLog = history.filter(c=>c.callid===startLog.callid && c.method==="BYE")[0]
      //     const startTime = new Date(startLog.time)
      //     const endTime = new Date(endLog.time)
      //     //const duracion=
      //     const duracion = (endTime.getTime() -startTime.getTime())/1000
      //     const rate=0.010/60
      //     // totalMinutos=duracion
      //     // total=total +duracion*rate
      //     const line={username:startLog.src_user,destination:startLog.dst_user,date:dateFormat(startTime, "mm/dd/yyyy, h:MM:ss TT"),duracion:duracion,costo:duracion*rate}
      //     history.push(line)
      //   }
      // })

      this.setState({history,totalCalls,loading:false})
      this.setState({loadingHistorial:false})
    }).catch(err=>{
      console.log("error",err)
      this.setState({loading:false,loadingHistorial:false})
    })
      
  }
  getUser=()=>{
    const token = window.localStorage.getItem('token')
    axios.defaults.headers.get['Authorization']="JWT "+token
    this.setState({loading:true})
    this.fetchHistory()
    axios.get(baseUrl + `getSub/`).then(res=>{
      this.setState({customer:res.data})
      this.setState({loading:false})
      this.setState({logged:true})
    }).catch(err=>{
      console.log("error",err)
      this.setState({loading:false})
    })
  }
  constructor(props){
    super(props)
    window.addEventListener("resize", this.updateDimensions);
    const w = window;
    const d = document;
    const documentElement = d.documentElement;
    const body = d.getElementsByTagName('body')[0];
    const width = w.innerWidth || documentElement.clientWidth || body.clientWidth;
    const height = w.innerHeight || documentElement.clientHeight || body.clientHeight;
    let mobile
    if (width < 763){
      mobile=true
    }else{
      mobile=false
    }
    let loading = false
    let logged=false
    if(getUrl.host.substring(0,3)==="127"){
      logged=true
    }
    loading=true

    let myUsername = window.localStorage.getItem("username")
    let myPassword = window.localStorage.getItem("password")
    if(myUsername){
      //pass
    } else{
      myUsername=""
      myPassword=""
    }

    this.state={
      seletedUsers:[],
      history:[],totalCalls:0,
      logged:logged,dimensions:{width:width, height:height, isMobile:mobile},loading:loading,loadingHistorial:false,
      email:myUsername,password:myPassword,customer:customerBase,loadingComponent:false,
    }
  }
  handleSelect=(username)=>{
    let updated=false
    let newUsers = this.state.seletedUsers
    newUsers.forEach(user => {
      if(user===username){
        newUsers = newUsers.filter(c=>c!=username)
        this.setState({seletedUsers:newUsers})
        updated=true
        return
      }
    });
    if(updated){return}
    newUsers.push(username)
    this.setState({seletedUsers:newUsers})
    return
  }
  deleteUser=(subscriber)=>{
    const token = window.localStorage.getItem("token")
    axios.defaults.headers.post['Authorization']="JWT "+token
    this.setState({loadingComponent:true})
    axios.post(baseUrl + `deleteSubscriber/`,{subscriber}).then(res=>{
      this.setState({customer:res.data})
      this.setState({loadingComponent:false})
    }).catch(err=>{
      console.log("error",err)
      this.setState({loadingComponent:false})
    })
    //this.setState({selectUsers:newUsers})
  }
  filterUser=(username)=>{
    let newUsers = this.state.seletedUsers
    newUsers.filter(c=>c!=username)
    return newUsers
  }
  
  switchLoadingComponent=()=>{
    const newVal = !this.state.loadingComponent
    this.setState({loadingComponent:newVal})
  }
  componentDidUpdate(){
    this.updateDimensions();
    

  };
  componentDidMount(){
    let token = window.localStorage.getItem("token")
    if(getUrl.host.includes("127.0.0")){
      console.log(getUrl.host.substring(0,3))
      token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJ1c2VybmFtZSI6ImNyb3dza0B5YWhvby5jb20iLCJleHAiOjYxNTg1NDM5MTU0LCJlbWFpbCI6ImNyb3dza0B5YWhvby5jb20ifQ.wh3vskd5LrQki-ZRRb6FFe0Y2egXDbhwrQtb0RcUPZk"
    }
    window.localStorage.setItem('token',token)
    if(token){
      this.getUser()
      
    }
  }
  componentWillMount(){
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount(){
    window.removeEventListener("resize", this.updateDimensions);

  }
  handleUpdate=(type,val)=>{
    window.localStorage.removeItem("username")
    window.localStorage.removeItem("password")
    switch(type){
      case "email":
          this.setState({email:val})
        break
        case "password":
          this.setState({password:val})
            break
    }
  }
  handleLogin=(username,password,remember)=>{
    const token = window.localStorage.getItem('token')
    axios.defaults.headers.get['Authorization']="JWT "+token
    this.setState({loading:true})
    const email = this.state.email
    const myPass = this.state.password
    if(remember){
      window.localStorage.setItem('username',email)
      window.localStorage.setItem('password',myPass)
    }
    axios.post(baseUrl + `token-auth/`,{username:email,password:myPass}).then(res=>{
      window.localStorage.setItem('token',res.data.token)
      this.setState({customer:res.data.user})
      const newStatus=!this.state.logged
      this.setState({logged:newStatus})
      this.setState({loading:false})
    }).catch(err=>{
      console.log("error",err)
      this.setState({loading:false})
    })

  }
  addDevice=()=>{
    if(this.state.customer.subscribers.length>4){
      return
    }
    const token = window.localStorage.getItem('token')
    axios.defaults.headers.get['Authorization']="JWT "+token
    this.setState({loadingComponent:true})
    axios.get(baseUrl+"addDevice/").then(resp=>{
      this.setState({customer:resp.data})
      this.setState({loadingComponent:false})
    })
  }
  deleteDevice=(id)=>{
    const token = window.localStorage.getItem('token')
    axios.defaults.headers.get['Authorization']="JWT "+token
    this.setState({loadingComponent:true})
    axios.post(baseUrl+"addDevice",{id}).then(resp=>{
      this.setState({customer:resp.data})
      this.setState({loadingComponent:false})
    })
  }
  handleRegister=(username,password,name,phoneNumber)=>{
    const token = window.localStorage.getItem('token')
    axios.defaults.headers.get['Authorization']="JWT "+token
    this.setState({loading:true})
    const myUsername = this.state.email
    const myPass = this.state.password
    axios.post(baseUrl + `newCustomer/`,{email:myUsername,password:myPass,name,phoneNumber}).then(res=>{
      if(res.data.id){
        this.setState({customer:res.data})
      }
      const newStatus=!this.state.logged
      this.setState({logged:newStatus})
      this.setState({loading:false})
      axios.post(baseUrl + `token-auth/`,{username:myUsername,password:myPass}).then(res=>{
        window.localStorage.setItem('token',res.data.token)
      }).catch(err=>{
        console.log("error",err)
        this.setState({loading:false})
      })
    }).catch(err=>{
      console.log("error",err)
      this.setState({loading:false})
    })
  }
  handleLogout=()=>{
    window.localStorage.removeItem("token")
    window.localStorage.removeItem("userId")
    window.localStorage.removeItem("username")
    window.localStorage.removeItem("password")
    this.setState({logged:false})
  }
  render() {

    //const totalConsumido = "US$"+parseFloat(total).toFixed(2)+" (total minutos: "+totalMinutos+")"
    const isMobile=this.state.dimensions.width<768
    let marginBody = this.state.dimensions.isMobile?"15px":"50px"
    const userPack={dimensions:this.state.dimensions,customer:this.state.customer,email:this.email,password:this.password,
      logged:this.state.logged,handleLogin:this.handleLogin,handleRegister:this.handleRegister,
      handleUpdate:this.handleUpdate,handleLogout:this.handleLogout,addDevice:this.addDevice,deleteDevice:this.deleteDevice
    }
    return ( 
      <>{this.state.loading?
        <div className="row" style={{justifyContent:"center"}}>
         <div className="lds-hourglass" style={{marginTop:"220px"}}></div>
          
        </div>
        
      :
      <>
      {this.state.logged?
        <>
        <NavBar dimensions={this.state.dimensions} userPack={userPack}/>
        <div id="mainBody" style={{marginLeft:marginBody,marginRight:marginBody,marginTop:"18px",marginBottom:"200px"}}>
        <div className="row">
              <h1 className="mainTitle" style={{marginLeft:"10px",fontSize:isMobile?"40px":"40px"}}>Welcome {this.state.customer.name}</h1>
            </div> 

            <div className="row" style={{paddingTop:"10px",marginLeft:isMobile?"0.3rem":"0px",marginRight:isMobile?"0.3rem":"0px"}}>

              <div className="col-xs-12 col-sm-4 caja" style={{maxHeight:"140px",paddingTop:"10px"}}>
                
                <div className="row center">
                <h1 className="balance">${this.state.customer.balance}</h1>
                </div>
                <div className="row center" style={{marginTop:"5px"}}>
                  <div className="col-xs-auto">
                <button onClick={this.recargar} style={{marginTop:"8px",width:"150px",position:"relative",bottom:"6px"}}className="pure-material-button-contained green">Recargar</button>
                </div>
                  </div>
                  <div className="row center" style={{marginTop:"5px"}}>
                  <p> (ICQ 742481225)</p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-7 caja" style={{marginRight:"0px",marginLeft:isMobile?"0.0px":this.state.dimensions.width*0.065+"px",marginTop:!isMobile?"0px":"25px",paddingTop:"10px",paddingBottom:"10px"}}>
              <div className="row center">
                <div className="col-xs-auto">
                <h1 className="secondTitle" style={{marginBottom:"5px",fontSize:isMobile?"28px":"30px"}}>Mis dispositivos</h1><button onClick={this.addDevice} style={{marginLeft:"35px",width:"100px",position:"relative",bottom:"6px"}}className="pure-material-button-contained">Agregar</button>
                </div>
                </div>
                <div className="row center">
                {/* <p className="infoText">Saldo Actual</p> */}
                <table id="customers">
                <thead>
                <tr>
                <th>USUARIO</th>
                <th>CONTRASEÑA</th>
                <th>IP</th>
              </tr>
              </thead>

              <tbody>

              {this.state.loadingComponent?
                       null
                :
                <>
                {this.state.customer.subscribers.map((subscriber,index)=>(
                  <TableLineUser deleteUser={this.deleteUser} key={subscriber.id} username={subscriber.username} password={subscriber.password}/>
            ))} 
            </>
                }


              </tbody>

            </table>
            {this.state.loadingComponent?
                        <div className="row center">
                          <div className="col-xs-auto">
                            <div className="lds-hourglass" ></div>
                          </div>
                        
                         
                       </div>
                :
                null} 
                </div>
                </div>
              
            </div>
            <div className="row" style={{marginTop:"30px"}}>
            <div className="col-xs-auto" style={{marginLeft:"10px"}}>
            <div className="dropdown">
              <button className="dropbtn">Usuarios</button>
              <div className="dropdown-content" >
              {this.state.customer.subscribers.map((subscriber,index)=>(
                  <UserLine seletedUsers={this.state.seletedUsers}handleSelect={this.handleSelect} key={subscriber.id} username={subscriber.username} password={subscriber.password}/>
            ))} 
              </div>
              </div>
            </div>
            <div className="col-xs-auto">
            <div className="dropdown" style={{marginLeft:"15px"}}>
              <button className="dropbtn">Inicio</button>
              <div className={"dropdown-content left"} >
                <Calendar/>
              </div>
              </div>
            </div>
            <div className="col-xs-auto">
            <div className="dropdown" style={{marginLeft:"15px"}}>
              <button className="dropbtn">Final</button>
              <div className="dropdown-content right" >
              <Calendar/>
              </div>
              </div>
            </div>
            
            </div>
            <div className="col-xs-12 caja" style={{marginTop:"25px",marginBottom:"80px",overflowX:"visible"}}>
                
                <div className="row">
                <div className="col-xs-12 col-md-6">
                <h1 className="secondTitle" style={{padding:"8px",fontSize:isMobile?"28px":"30px"}}>Historial de llamadas</h1>
                </div>
                <div className="col-xs-12 col-md-6" >
                {/* <p>Total consumido: {totalConsumido}</p> */}
                </div>
                </div>
                <div className="row center">
                {/* <p className="infoText">Saldo Actual</p> */}
                <table id="customers" style={{overflowX:"scroll !important"}}>
                <thead>
                <tr>
                <th>Desde</th>
                <th>Hacia</th>
                <th>Fecha</th>
                <th>Duración</th>
                <th>Costo</th>
                
              </tr>
              </thead>
              <tbody>
                {this.state.loadingHistorial?
                  null
                :
                this.state.history.map((log,index)=>(
                  <TableLineUsage line={log} key={index}/>
            ))
                } 


              </tbody>
              
            </table>
            {console.log("truth",this.state.loadingHistorial)}
              {this.state.loadingHistorial?
                        <div className="row center">
                          <div className="col-xs-auto">
                            <div className="lds-hourglass" ></div>
                          </div>
                        
                         
                       </div>
                :
                null} 
                </div>
              </div>
            {/* <div classname="row">
              <h1 className="mainGrayTitle">Mis dispositivos</h1>
            </div>
            {this.state.customer.subscribers.map((subscriber,index)=>(
                          <div classname="row" style={{backgroundColor:"#5e5c5b"}}>
                          <p style={{color:"white"}}>Username: {subscriber.username} Password: {subscriber.password} </p>
                        </div>
            ))} */}

        </div>
        </>
        :
        <Registration userPack={userPack}/>
        }
        </>
      }


      </>
     );
  }
}
export default App;
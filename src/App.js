import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
              <li><a onClick={logout} href="#">Logout</a></li>
    </>
  )
}
const NavBar=(props)=>{
  const [mobileOpen, setMobileOpen]=React.useState(false);
  const toggleRegistration=(e)=>{
    console.log(e.target.parentElement)
    setMobileOpen(prev=>!prev)
    console.log(mobileOpen)
  }

  const isMobile=props.dimensions.width<769
  return(
    <>
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
            <h1 className="logo"><a href="#">XVOICE</a></h1>
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
  getUser=()=>{
    const token = window.localStorage.getItem('token')
    axios.defaults.headers.get['Authorization']="JWT "+token
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
    let loading = false
    const token = window.localStorage.getItem("token")
    let logged=true
    console.log(getUrl.host.substring(0,3))
    if(getUrl.host.substring(0,3)==="127"){
      logged=true
    }
    if(token && !logged){
      loading=true
      this.getUser()
      
    }
    let myUsername = window.localStorage.getItem("username")
    let myPassword = window.localStorage.getItem("password")
    if(myUsername){
      //pass
    } else{
      myUsername=""
      myPassword=""
    }

    this.state={
      logged:logged,dimensions:{width:width, height:height, isMobile:false},loading:loading,
      email:myUsername,password:myPassword,customer:customerBase
    }
  }
  componentDidUpdate(){
    window.addEventListener("resize", this.updateDimensions);

  };
  componentWillMount(){

    this.updateDimensions();
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
    //const token = window.localStorage.getItem('token')
    //axios.defaults.headers.get['Authorization']="JWT "+token
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
  handleRegister=(username,password,name,phoneNumber)=>{
    //const token = window.localStorage.getItem('token')
    //axios.defaults.headers.get['Authorization']="JWT "+token
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
    const isMobile=this.state.dimensions.width<768
    let marginBody = this.state.dimensions.isMobile?"15px":"50px"
    const userPack={dimensions:this.state.dimensions,customer:this.state.customer,email:this.email,password:this.password,
      logged:this.state.logged,handleLogin:this.handleLogin,handleRegister:this.handleRegister,
      handleUpdate:this.handleUpdate,handleLogout:this.handleLogout}
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
        <div id="mainBody" style={{marginLeft:marginBody,marginRight:marginBody,marginTop:"18px",marginBottom:"25px"}}>
            
            <div className="row">
              <h1>Welcome {this.state.customer.name}</h1>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-4 caja" style={{maxHeight:"135px",paddingTop:"10px"}}>
                
                <div className="row center">
                <h1 className="balance">${this.state.customer.balance}</h1>
                </div>
                <div className="row center">
                <p className="infoText">Saldo Actual</p>
                </div>
                <div className="row center" style={{marginTop:"5px"}}>
                  <a>Agregar saldo</a>
                  <p> (escribir por WhatsApp 829 630 6782)</p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-7 caja" style={{marginLeft:isMobile?"0px":this.state.dimensions.width*0.065+"px",marginTop:!isMobile?"0px":"25px",paddingTop:"10px",paddingBottom:"10px"}}>
              <div className="row center">
                <h1 className="balance" style={{marginBottom:"5px"}}>Mis dispositivos</h1>
                </div>
                <div className="row center">
                {/* <p className="infoText">Saldo Actual</p> */}
                <table id="customers">
                <tr>
                <th>Usuario</th>
                <th>Contraseña</th>
                <th>IP</th>
              </tr>
                            <tr>           
                <td>Magazzini Alimentari Riuniti</td>
                <td>Giovanni Rovelli</td>
                <td>Italy</td>
              </tr>
              <tr>
                <td>North/South</td>
                <td>Simon Crowther</td>
                <td>UK</td>
              </tr>
              <tr>
                <td>Paris spécialités</td>
                <td>Marie Bertrand</td>
                <td>France</td>
              </tr>
            </table>
                </div>
                </div>
              
            </div>
            <div className="col-xs-12 caja" style={{marginTop:"25px"}}>
                
                <div className="row">
                <h1 className="balance" style={{padding:"8px"}}>Historial de llamadas</h1>
                </div>
                <div className="row center">
                {/* <p className="infoText">Saldo Actual</p> */}
                <table id="customers">
                <tr>
                <th>Usuario</th>
                <th>Destino</th>
                <th>Fecha</th>
                <th>Duración</th>
                <th>Costo</th>
              </tr>
                            <tr>           
                <td>Magazzini Alimentari Riuniti</td>
                <td>Giovanni Rovelli</td>
                <td>Italy</td>
              </tr>
              <tr>
                <td>North/South</td>
                <td>Simon Crowther</td>
                <td>UK</td>
              </tr>
              <tr>
                <td>Paris spécialités</td>
                <td>Marie Bertrand</td>
                <td>France</td>
              </tr>
            </table>
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
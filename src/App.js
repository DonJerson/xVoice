import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const getUrl = window.location;
let host
if(getUrl.host.includes(":")){
  host = getUrl.host.substring(0, getUrl.host.length - 5);
}else{host = getUrl.host;}

const baseUrl = getUrl.protocol+ "//" + host +"/";
console.log(baseUrl)
const axios = require('axios');
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = false;

const EmptyFunction=()=>{
  return(
    <>
    </>
  )
}

const NavButtons=()=>{
  return(
    <>
                  <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Contact</a></li>
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
              <div className={mobileOpen?"burguer change":"burguer"} onClick={toggleRegistration}>
        
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
              </div>
                <ul className={mobileOpen?"main-nav":"main-nav closed"} id="navContent">

                <NavButtons/>
                </ul>
              </>
            :
            <>
            <h1 className="logo"><a href="#">TELEXFREE</a></h1>
            <ul className="main-nav" id="navContent">
          <NavButtons/>
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
      console.log(myInt)
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
    console.log(e.key)
    if(e.key==="Enter"){
      props.userPack.handleLogin("","",remember)
      console.log("work")
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
    if (width < 960){
      const newDimensions={width:width, height:height, isMobile:false}
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
      console.log(",tamo aqui")
      this.setState({customer:res.data})
      const newStatus=!this.state.logged
      this.setState({logged:newStatus})
      this.setState({loading:false})
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
    if(token){
      loading=true
      this.getUser()
    }
    let myUsername = window.localStorage.getItem("username")
    let myPassword = window.localStorage.getItem("password")
    console.log("my shit",myUsername)
    if(myUsername){
      //pass
    } else{
      myUsername=""
      myPassword=""
    }
    this.state={
      logged:false,dimensions:{width:width, height:height, isMobile:false},loading:loading,
      email:myUsername,password:myPassword
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
    console.log("vamo alla")
    //const token = window.localStorage.getItem('token')
    //axios.defaults.headers.get['Authorization']="JWT "+token
    this.setState({loading:true})
    const email = this.state.email
    const myPass = this.state.password
    if(remember){
      console.log("setting shit",email,myPass)
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
      console.log("done?",this.state.email)
      this.setState({loading:false})
    })

  }
  handleRegister=(username,password,name,phoneNumber)=>{
    console.log("vamo alla")
    //const token = window.localStorage.getItem('token')
    //axios.defaults.headers.get['Authorization']="JWT "+token
    this.setState({loading:true})
    const myUsername = this.state.email
    const myPass = this.state.password
    console.log("my user",myUsername)
    axios.post(baseUrl + `newCustomer/`,{email:myUsername,password:myPass,name,phoneNumber}).then(res=>{
      console.log("respuesta",res)
      if(res.data.id){
        console.log("el mejor")
        this.setState({customer:res.data})
      }
      const newStatus=!this.state.logged
      this.setState({logged:newStatus})
      this.setState({loading:false})
      axios.post(baseUrl + `token-auth/`,{username:myUsername,password:myPass}).then(res=>{
        window.localStorage.setItem('token',res.data.token)
        console.log("setiao")
      }).catch(err=>{
        console.log("error",err)
        console.log("done?",this.state.email)
        this.setState({loading:false})
      })
    }).catch(err=>{
      console.log("error",err)
      this.setState({loading:false})
    })
  }
  render() {
    const userPack={dimensions:this.state.dimensions,customer:this.state.customer,email:this.email,password:this.password,
      logged:this.state.logged,handleLogin:this.handleLogin,handleRegister:this.handleRegister,handleUpdate:this.handleUpdate}
    return ( 
      <>{this.state.loading?
        <div className="row" style={{justifyContent:"center"}}>
         <div className="lds-hourglass" style={{marginTop:"220px"}}></div>
          
        </div>
        
      :
      <>
      {this.state.logged?
        <>
        <NavBar dimensions={this.state.dimensions}/>
        {console.log("name",this.state.customer)}
        <h1 className="mainGrayTitle">Welcome {this.state.customer.name}</h1>
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
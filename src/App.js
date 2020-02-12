import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


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
  const [username,setUsername]=React.useState("")
  const [password,setPassword]=React.useState("")
  const handleLogin=()=>{
    props.userPack.handleLogin()
  }
  const toggleRegistration=()=>{
    setRegistration(prev=>!prev)
  }
  return(
    <>
    <div className="login-container">
	<form action="" className="form-login">
		<ul className="login-nav">
			<li className="login-nav__item active">
				<a href="#">Sign In</a>
			</li>
			<li className="login-nav__item">
				<a href="#">Sign Up</a>
			</li>
		</ul>
		<label for="login-input-user" className="login__label">
			Username
		</label>
		<input id="login-input-user" className="login__input" type="text" />
		<label for="login-input-password" className="login__label">
			Password
		</label>
		<input id="login-input-password" className="login__input" type="password" />
		<label for="login-sign-up" className="login__label--checkbox">
			<input id="login-sign-up" type="checkbox" className="login__input--checkbox" />
			Keep me Signed in
		</label>
		<button className="login__submit" onClick={handleLogin}>Sign in</button>
	</form>
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
  constructor(props){
    super(props)
    window.addEventListener("resize", this.updateDimensions);
    const w = window;
    const d = document;
    const documentElement = d.documentElement;
    const body = d.getElementsByTagName('body')[0];
    const width = w.innerWidth || documentElement.clientWidth || body.clientWidth;
    const height = w.innerHeight || documentElement.clientHeight || body.clientHeight;
    this.state={
      logged:false,dimensions:{width:width, height:height, isMobile:false}
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
  handleLogin=()=>{
    const newStatus=!this.state.logged
    this.setState({logged:newStatus})
  }
  render() {
    const userPack={dimensions:this.state.dimensions,
      logged:this.state.logged,handleLogin:this.handleLogin}
    return ( 
      <>
      {this.state.logged?
      <>
        <NavBar dimensions={this.state.dimensions}/>

        {/* 
        <div className="row center">
          <div>
              <div className="myCircle2">
                  <div className="myCircle">
                    </div>
                </div>

          </div>


        </div>
        */}
        </>
      :
      <Registration userPack={userPack}/>
      }

      </>
     );
  }
}
export default App;
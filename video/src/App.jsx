import logo from './logo.svg';
import './App.css';
import React  , { useRef} from "react"
import Login from './Login.js'
import io from "socket.io-client"


 const socket = io()
class  App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isLoggedIn: false
    }
    this.setUserDetails = this.setUserDetails.bind(this);
  }
//  const [isLoggedIn, setIsLoggedIn] = useState(true);
//  const [userStreams, setUserStream] = useState();
 // const [partnerStream, setPartnerStream] = 
//  const [users, setUsers] = useState({}); 
//  const [yourID, setYourID] = useState();
 
// const [userName , setUserName] = useState()
// const userVideo = useRef();
//  partnervVdeos = useRef()


setUserDetails(userName, password ,event) { 
  event.preventDefault();
  const test = {
    name: 'fdfd'
  }
  const data = JSON.stringify(test)
  socket.connect()
  socket.emit('userName',test )
  socket.on("yourID", (id) => {
    console.log(id)
  this.setState({
    ID : id
  })
})
 console.log(userName + password)
    this.setState({
     userName: userName,
     password: password, 
     isLoggedIn: true,    
   })
   console.log(this.state.isLoggedIn+ 'ddf')
     //socket.emit('userName', this.state.userName)

}
  render() {
    const userInterface =  () => {
      if (!this.state.isLoggedIn){
        return <Login setUserDetails= {this.setUserDetails}></Login>
      } else {
        return(
              <div>
                <p>helldddo</p>
                 <p>{this.state.yourID}</p>
                 <p>{this.state.isLoggedIn}</p>
              </div>
        ) 
      }
    }
    return (
    <div>
      <p>test me boi</p>
      {userInterface()}
    </div>
  )
    }
}
export default App;

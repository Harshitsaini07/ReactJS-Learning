import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
// import Button from './Button.jsx'
// import Student from './student.jsx'
import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'

function App() {
  return(
    <>
      <Header/>
      <Card/>
      <Food/>
      {/* <Button/> */}
      <Footer/>
      {/* <Student name='spogebob' age ={30} isStudent={true}/>
      <Student name="Pateric" age={42} isStudent={false}/>
      <Student name="Sandy" age={27} isStudent={true}/> */}
      <UserGreeting isLoggedIn={true} />
      return(<List/>);
    </>
  );
}

export default App

import {Route, BrowserRouter as Router, Link} from 'react-router-dom';
import styled from 'styled-components';
import Hooks from './components/hooks/Hooks';
import Home from './components/Home'


const Div = styled.div`
    position: relative;
    width: auto;
    height: 50px;
    background-color: rgba(228, 241, 254, 1);
    margin-top: 130px;
`
const Ul = styled.ul`
    position: sticky;
    list-style-type: none;
    background-color: rgba(228, 241, 254, 1);
    padding-top: 15px;
`

const LiLeft = styled.li`
    float: left;
    margin-left: 10px;
    &:hover{
        cursor: pointer;
        color: #eb974e;
    }
`

const LiRight = styled.li`
    float: right;
    margin-right: 10px;
    &:hover{
        cursor: pointer;
        color: #eb974e;
    }
`

function App() {
  return (
    <Div className="App">
      <Router>
        <Ul>
          <LiLeft><Link to={"/"}>Home</Link></LiLeft>
          <LiRight><Link to={"/Hooks"}>Hooks</Link></LiRight>
        </Ul>
        <Route path="/" exact component={Home}></Route>
        <Route path="/Hooks" exact component={Hooks}></Route>
      </Router>


    </Div>
  );
}

export default App;

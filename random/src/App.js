import {Route, BrowserRouter as Router, Link} from 'react-router-dom';
import styled from 'styled-components'
import Hooks from './components/hooks/Hooks'
import Home from './components/Home'
import Styled from './components/styled/Styled'
import CustomHooks from './components/customhooks/CustomHooks';


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
          <LiLeft><Link style={{textDecoration: 'none'}} to={"/"}>Home</Link></LiLeft>
          <LiRight><Link style={{textDecoration: 'none'}} to={"/Styled"}>Styled</Link></LiRight>
          <LiRight><Link style={{textDecoration: 'none'}} to={"/Hooks"}>Hooks</Link></LiRight>
          <LiRight><Link style={{textDecoration: 'none'}} to={"/CustomHooks"}>Custom Hooks</Link></LiRight>
        </Ul>
        <Route path="/" exact component={Home}></Route>
        <Route path="/Hooks" exact component={Hooks}></Route>
        <Route path="/Styled" exact component={Styled}></Route>
        <Route path="/CustomHooks" exact component={CustomHooks}></Route>
      </Router>


    </Div>
  );
}

export default App;

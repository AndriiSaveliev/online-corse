import logo from '/logo-name.svg'
import {useEffect, useState} from "react";
import  {styled} from "styled-components";
import './Header.css'
 const HeaderContainer = styled.header`
    height: 50px;
    display: flex;
    padding: 0 2rem;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    background: #fafafa;    
`
export  default function Header() {
    const [now, setNow] = useState(new Date())
    useEffect(() => {
       const interval = setInterval(() => setNow(new Date()), 1000)
        return () => {
           clearInterval(interval)
        }
    }, [])
    //const now = new Date()


    return (
        <HeaderContainer>
            <img src={logo} alt="Result"/>
            {/*<h3>Result University</h3>*/}

            <span>Here be time: {now.toLocaleTimeString()}</span>
        </HeaderContainer>
    )
}
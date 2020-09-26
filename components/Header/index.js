import { Container as HeaderContainer } from './styles'
import { Nav } from 'components'

const Header = ({user}) => {
    return(
        <HeaderContainer>
            <div><img src="/logo.svg" alt="Minimal.ar Logo" className="logo" /> <span>(Playground)</span></div>
            
            <Nav user={user}/>
        </HeaderContainer>
    )
}

export default Header;
import { Container } from './styles'

const Footer = () => {
    return (
        <Container>
            <a
                href="https://minimal.com.ar"
                target="_blank"
                rel="noopener noreferrer"
            >
                By{' '}
                <img src="/logo.svg" alt="Minimal.ar Logo" className="logo" />
            </a>
        </Container> 
    )
}
export default Footer;
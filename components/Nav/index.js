import { Container } from './styles'
import Link from 'next/link'    
export default function Nav({user, loading}) {
    return (
        <Container>
            <ul>
                <li><Link href="/"><a>Home</a></Link></li>
                {!loading && user ? <li><Link href="/dashboard"><a>Dashboard</a></Link></li> : '' }
                {!loading && user ? <li><a href="/questions">Questions</a></li> : '' }
                {!loading && user ? <li><a href="/api/logout">Logout</a></li> : <li><a href="/api/login">Login</a></li> }
            </ul>
        </Container>
    )
}
import Link from 'next/link'
export default function Home() {
    return (
        <h1 className="title">
            Welcome to {' '} 
            <Link href="/dashboard">
                <a>The machine</a>
            </Link>
        </h1>

    )
}
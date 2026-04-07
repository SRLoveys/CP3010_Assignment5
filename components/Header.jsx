import Link from "next/link"

export default function Header() {
    
    return (
        <nav className="">
            <div className="flex gap-1">
                <Link href = "/" className="text-600">Home</Link>
                <Link href = "/characters" className="text-600">Characters</Link>
            </div>
            <br></br>
        </nav>
    )
}
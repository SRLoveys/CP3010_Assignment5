import Link from "next/link";

export default async function charPage() {

    const response = await fetch(`${process.env.BACKEND_URL}/api/characters`);
    const data = await response.json();
    return (
        <>
        <h2>Characters</h2>
        <ul>
            { data.map((char) => { 
                console.log(char._id);
                return <li key={char._id}><Link href={`/characters/${char._id}`}>{char.name}</Link></li>
            })}
        </ul>
        </>
    ) 
} 
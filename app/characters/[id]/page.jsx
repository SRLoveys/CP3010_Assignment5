import Character from "../../../components/Character"

export default async function CharacterDetail( props) {
    const { id } = await props.params;

    const response = await fetch(`${process.env.BACKEND_URL}/api/characters/${id}`);

    const data = await response.json();

    return (
        <div>
           <Character
            name={data.name}
            species={data.species}
            image={data.image}
           />
        </div>
    );
}

export async function generateStaticParams() {
    return [{id: '1'}, {id: '2'}, {id: '3'}]
}


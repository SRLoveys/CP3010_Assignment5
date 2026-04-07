export default function Character({name, species, image}) {
    return (
        <div>
            <p>Name: {name}</p>
            <p>Species: {species}</p>
            <img src={image} alt={name}></img>
        </div>
    );
}
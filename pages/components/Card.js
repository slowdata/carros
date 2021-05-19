const Card = ({ carro }) => {
    return (
        <div className="flex flex-col w-full h-36 p-4 bg-blue-100 border border-blue-400 rounded-lg">
            <h3>{carro.marca}</h3>

            <ul>
                <li>{carro.matricula}</li>
                <li>{carro.kms}</li>
                <li>{carro.cor}</li>
            </ul>
        </div>
    );
};

export default Card;

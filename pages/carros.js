import Title from "../components/Title";
import Card from "../components/Card";

const CarrosPage = () => {
    return (
        <div>
            <Title>Os meus Carros</Title>
            <section className="mt-14 w-4/5 mx-auto">
                <ul className="flex justify-evenly">
                    {carros.map((carro) => (
                        <li key={carro.id}>
                            <Card carro={carro} />
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default CarrosPage;

const carros = [
    {
        id: 1,
        marca: "Kia",
        matricula: "00-OP-14",
        kms: 88100,
        cor: "branco",
    },
    {
        id: 2,
        marca: "Mini",
        matricula: "00-VV-14",
        kms: 21360,
        cor: "preto",
    },
];

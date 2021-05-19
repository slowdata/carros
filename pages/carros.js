import Title from "../components/Title";
import Card from "../components/Card";

import { useState } from "react";

const CarrosPage = ({ bd }) => {
    const [carro, setCarro] = useState({});
    const [carros, setCarros] = useState(bd);

    const handleChange = (e) => {
        const newCarro = {};
        const { name, value } = e.target;
        newCarro[name] = value;
        setCarro((prevState) => {
            return { ...prevState, ...newCarro };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newCar = {
            id: carros.length + 1,
            ...carro,
        };
        setCarros((prevState) => {
            return [...prevState, newCar];
        });
    };

    return (
        <div>
            <Title>Os meus Carros</Title>
            <form
                className="w-1/2 mx-auto mt-14 p-4 border rounded-md 
            border-gray-200 shadow-sm"
                onSubmit={handleSubmit}
            >
                <div className="mt-2">
                    <label className="mr-1" htmlFor="marca">
                        Marca
                    </label>
                    <input
                        className="rounded-md border border-gray-300 px-1"
                        type="text"
                        name="marca"
                        id="marca"
                        onChange={handleChange}
                    />
                </div>
                <div className="mt-2">
                    <label className="mr-1" htmlFor="matricula">
                        Matricula
                    </label>
                    <input
                        className="rounded-md border border-gray-300 px-1"
                        type="text"
                        name="matricula"
                        id="matricula"
                        onChange={handleChange}
                    />
                </div>
                <div className="mt-2">
                    <label className="mr-1" htmlFor="kms">
                        Kms
                    </label>
                    <input
                        className="rounded-md border border-gray-300 px-1"
                        type="text"
                        name="kms"
                        id="kms"
                        onChange={handleChange}
                    />
                </div>
                <div className="mt-2">
                    <label className="mr-1" htmlFor="cor">
                        Cor
                    </label>
                    <input
                        className="rounded-md border border-gray-300 px-1"
                        type="text"
                        name="cor"
                        id="cor"
                        onChange={handleChange}
                    />
                </div>
                <button
                    className="mt-4 p-2 bg-blue-400 border border-blue-600
                rounded-lg hover:bg-blue-500"
                    type="submit"
                >
                    Adicionar
                </button>
            </form>

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

export async function getStaticProps(context) {
    const bd = [
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

    return {
        props: { bd }, // will be passed to the page component as props
    };
}

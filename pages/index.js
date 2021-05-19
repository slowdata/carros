import Link from "next/link";

export default function Index() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <Link href="/carros">
                <a>
                    <h1 className="text-4xl uppercase">carro</h1>
                </a>
            </Link>
        </div>
    );
}

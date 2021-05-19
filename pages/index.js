import Link from "next/link";

export default function Index() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <Link href="/carros">
                <a>
                    <h1 className="text-4xl uppercase">carro</h1>
                </a>
            </Link>
            <img
                class="w-32 h-32 md:w-48 md:h-auto rounded-full mx-auto"
                src="https://i.pravatar.cc/200"
            ></img>
        </div>
    );
}

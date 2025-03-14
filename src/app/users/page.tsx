import Link from "next/link";
import UserListContainer from "../features/users/container/UserListContainer";
import { Button } from "@/components/ui/button";


export default async function Home() {

    return (
        <main className="p-4 mt-4 w-full h-full">
            <section>
                <Link href="/" passHref>
                    <Button className="text-white">
                        Regresar
                    </Button>
                </Link>
            </section>
            <section className="flex flex-col items-center justify-center w-full h-full">
                <h1 className="text-2xl font-bold mb-4 text-center">Usuarios</h1>
                <UserListContainer />
            </section>
        </main>
    );
}

import Link from "next/link";

const links:object[] = [
    {
        title: "connexion admin",
        url: "/auth/login"
    },

    {
        title: "modification de l'admin",
        url: "/auth/update"
    },

    {
        title: "dashboard",
        url: "/dashboard"
    },

    {
        title: "ajouter un portfolio",
        url: "/dashboard/profile/create"
    },

     {
        title: "modifier un portfolio",
        url: "/dashboard/profile/update"
    },
    
     {
        title: "voir un portfolio",
        url: "/dashboard/profile/read"
    }
]

type linkType = {
    title: string,
    url: string
}
function CreateLink({link}: {link: linkType}){

    return(
        <Link href={link.url} className="text-white font-semibold capitalize px-4 py-2 bg-blue-600 rounded-xl">{link.title}</Link>
    )
}
export default function HomePage(){


    return(<section>

        <header className="bg-blue-900 py-3 px-4">
            <div className="max-w-300 mx-auto">
               <nav className="flex gap-4">
                    {links.map((link) => (<CreateLink link={link} />))}
               </nav>
            </div>
        </header>
    </section>)

}
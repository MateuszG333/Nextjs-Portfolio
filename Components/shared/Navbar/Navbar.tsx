import Link from "next/link";

const links = [
    {href: "/", label: "Home"},
    {href: "/blog", label: "Blog"},
    {href: "/contact", label: "Contact"},
    {href: "/login", label: "Login"},
]

export default function NavBar() {
    return (
        <nav>
            <Link href="/">Portfolio</Link>

            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <Link href={link.href}>
                        {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
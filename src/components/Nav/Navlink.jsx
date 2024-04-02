import Link from 'next/link'
const NavLink = (props) => {
    return (
        <Link href={props.path} className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-[#525250]">
            {props.title}
        </Link>
    )
}

export default NavLink
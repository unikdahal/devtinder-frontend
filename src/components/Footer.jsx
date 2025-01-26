import logo from "../assets/logo.png";

const Footer = () => {
    return (
        <>
            <footer className="text-base-content w-full">
                <aside className="bg-base-300 py-4 px-8 w-full flex gap-2 flex-wrap justify-between items-center text-sm">
                    <a className="btn btn-ghost text-lg">
                        <img alt="Logo" src={logo} className="w-50"/>
                    </a>
                    <p>Copyright ©{new Date().getFullYear()} - All rights reserved</p>
                </aside>
            </footer>
        </>
    )
}

export default Footer;
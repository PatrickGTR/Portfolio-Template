import React from "react";

import Head from "next/head";
import Link from "next/link";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

import { MdHome, MdPerson, MdLibraryBooks } from "react-icons/md";
import { TiHeartFullOutline } from "react-icons/ti";

import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavLink,
    NavItem,
    Button
} from "reactstrap";

export const HeaderContent = ({ title }) => {
    return (
        <Head>
            <title>{title ? `Patrick : ${title}` : ""}</title>
        </Head>
    );
};

const Navlinks = () => {
    const links = [
        {
            Name: "Home",   
            Path: "/",
            Icon: MdHome
        },
        {
            Name: "About",
            Path: "/about",
            Icon: MdPerson
        },
        {
            Name: "Projects",
            Path: "#",
            Icon: MdLibraryBooks
        }
    ];

    return links.map(link => {
        const Icon = link.Icon;
        return (
            <NavItem key={link.Name}>
                <Link href={link.Path}>
                    <NavLink>
                        <Button color="info">
                            <span className="navbar-style">
                                <Icon className="navbaricon-style" />
                                {link.Name}
                            </span>
                        </Button>
                    </NavLink>
                </Link>
            </NavItem>
        );
    });
};

export class NavbarContent extends React.Component {
    state = {
        isOpen: false
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render() {
        return (
            <Navbar light expand="sm">
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="nav-center" navbar>
                        <Navlinks />
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export const FooterContent = () => {
    return (
        <footer className="footer">
            <p>
                Made with <TiHeartFullOutline className="heart" />{" "}
                <a href="https://patrickgtr.github.io" target="_blank">
                    Patrick
                </a>{" "}
                - &copy; 2019
            </p>
        </footer>
    );
};

export const PageTemplate = ({ title, children }) => {
    return (
        <>
            <HeaderContent title={title} />

            <main>
                <Container>
                    <img className="logo" src="./static/logo.png" />
                    <NavbarContent />
                    <div className="content-outbox">
                        <div className="content-title">
                            <h1>{title}</h1>
                            <div className="content-inbox">
                                <section>{children}</section>
                            </div>
                        </div>
                    </div>
                    <FooterContent />
                </Container>
            </main>
        </>
    );
};

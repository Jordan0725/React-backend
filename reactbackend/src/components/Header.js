import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logoVCR from "../Images/Logo_simplesVCR.png";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import DropD from "../components/Dropdown.js";

function Header() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	const handleResize = () => {
		setWindowWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div>
			<Navbar className="navbar-custom" variant="dark">
				<Container fluid className="px-5">
					<Navbar.Brand href="#inicio">
						<img
							src={logoVCR}
							className="logo-navbar"
							alt="Logo da VCR"
						/>
					</Navbar.Brand>

					<Nav className="ms-auto">
						{windowWidth <= 1250 ? (
							<>
								<DropD />
								{}
							</>
						) : (
							<>
								<Nav.Link href="#sobre">Sobre Nós</Nav.Link>
								<Nav.Link href="#servicos">Serviços</Nav.Link>
								<Nav.Link href="#cases">Cases</Nav.Link>
								<Nav.Link href="#metodo">Método VCR</Nav.Link>
								<Nav.Link href="#depoimentos">
									Depoimentos
								</Nav.Link>
							</>
						)}
					</Nav>
				</Container>
			</Navbar>
		</div>
	);
}

export default Header;

import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<Container>
		<Row>
		<Column>
			<Heading>Quick Links</Heading>
            <FooterLink href="#">Home</FooterLink>
            <FooterLink href="#">Service</FooterLink>
            <FooterLink href="#">Shop</FooterLink>
            <FooterLink href="#">Team</FooterLink>
			<FooterLink href="#" target="_blank">Datenschutz</FooterLink>
			<FooterLink href="#" target="_blank">Haftungsausschluss</FooterLink>
		</Column>
		<Column>
			<Heading>Impressum</Heading>
            <h5 style = {{color:"white"}}>
            Offiz. Firmenbezeichnung
            </h5>
            <p style = {{color:"white"}}>
                Friseurteam Michaela Drewes (Einzelunternehmen)
            </p>
            <h5 style = {{color:"white"}}>
            Verantwortl. u. Position
            </h5>
            <p style = {{color:"white"}}>
                 Michaela Drewes (Inhaberin)
            </p>
            <h5 style = {{color:"white"}}>
            Streitschlichtung EU
            </h5>
            <p style = {{color:"white"}}>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
            https://ec.europa.eu/consumers/odr
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
		</Column>

		<Column>
			<Heading>Details</Heading>
			<FooterLink href="#">Telefonummer: 04795958949</FooterLink>
			<FooterLink href="https://www.google.com/maps/place/Friseurteam+Michaela+Drewes/@53.387003,9.253178,8z/data=!4m5!3m4!1s0x0:0x322d5a29608605e8!8m2!3d53.2528605!4d8.7104641?hl=en">Address:Bremer Heerstraße 28 a, 27711 Osterholz-Scharmbeck</FooterLink>
			<FooterLink href="https://friseurteam-drewes.de/"> Website : https://friseurteam-drewes.de/
			</FooterLink>
			<FooterLink href="https://friseurteam-drewes.de/"> Email : info@friseurteam-garbade.de
			</FooterLink>
		</Column>
        <Column>
            <Heading>Direction</Heading>
            <FooterLink href="#">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9548.187496967797!2d8.71049!3d53.25286!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x322d5a29608605e8!2sFriseurteam%20Michaela%20Drewes!5e0!3m2!1sen!2sde!4v1656611088269!5m2!1sen!2sde" width="250" height="250" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
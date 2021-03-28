import React from "react";
import "bootstrap";

const data = {
	/*image:
		"https://a.storyblok.com/f/89778/1168x728/b7082a9dd9/cr_00_00_2.jpeg",
	cardTitle: "Card title",
	cardDescription:
		"Some quick example text to build on the card title and make up the bulk of the cards content.",
    */
	button: {
		url: "#",
		label: "Go to wikipedia"
	}
};

export function Card() {
	return (
		<div className="card">
			<img
				src="https://a.storyblok.com/f/89778/1168x728/b7082a9dd9/cr_00_00_2.jpeg"
				className="card-img-top"
				alt=""
				width="200"
				height="250"
			/>
			<div className="card-body text-center">
				<h5 className="card-title">Tucan</h5>
				<p className="card-text">
					"Tucan: Se trata de un ave cuyo nombre proviene de la
					palabra tukana, que a su vez pertenece a la lengua tupí. Es
					además fácilmente reconocible por su pico largo y colorido"
				</p>
			</div>
			<div className="card-footer justify-content-center text-center">
				<a className="btn btn-primary" href={data.button.url}>
					{data.button.label}
				</a>
			</div>
		</div>
	);
}

export function Card2() {
	return (
		<div className="card">
			<img
				src="https://artelista.s3.amazonaws.com/obras/fichas/7/6/2/2201311113066807.jpg"
				className="card-img-top"
				alt=""
				width="200"
				height="250"
			/>
			<div className="card-body text-center">
				<h5 className="card-title">Lapa</h5>
				<p className="card-text">
					"Lapa: País: Costa Rica Categoría: Fotografía Técnica y
					soportes: Color (Digital) Temática: Naturaleza En Artelista
					desde: 4 de Mayo de 2009 © Todos los derechos reservados"
				</p>
			</div>
			<div className="card-footer justify-content-center text-center">
				<a className="btn btn-primary" href={data.button.url}>
					{data.button.label}
				</a>
			</div>
		</div>
	);
}

export function Card3() {
	return (
		<div className="card">
			<img
				src="https://www.otromundoesposible.net/wp-content/uploads/2014/12/guacamaya1-1.jpg"
				className="card-img-top"
				alt=""
				width="200"
				height="250"
			/>
			<div className="card-body text-center">
				<h5 className="card-title">Guacamaya</h5>
				<p className="card-text">
					"Está en peligro de extinción por la destrucción de su
					hábitat y debido a su popularidad, según Think Quest, se ha
					convertido en especie muy demandada comercialmente.
				</p>
			</div>
			<div className="card-footer justify-content-center text-center">
				<a className="btn btn-primary" href={data.button.url}>
					{data.button.label}
				</a>
			</div>
		</div>
	);
}

export function Card4() {
	return (
		<div className="card">
			<img
				src="https://miro.medium.com/max/474/1*xsop6F0gu0UjZevtR52jCQ.png"
				className="card-img-top"
				alt=""
				width="200"
				height="250"
			/>
			<div className="card-body text-center">
				<h5 className="card-title">Ave del paraiso</h5>
				<p className="card-text">
					"El Ave del Paraíso de Alberto o Ave del Paraíso Rey de
					Sajonia (Pteridophora alberti) es una especie de ave
					paseriformede la familia Paradisaeidae."
				</p>
			</div>
			<div className="card-footer justify-content-center text-center">
				<a className="btn btn-primary" href={data.button.url}>
					{data.button.label}
				</a>
			</div>
		</div>
	);
}

import React from "react";
import "bootstrap";

const data = {
	image:
		"https://a.storyblok.com/f/89778/1168x728/b7082a9dd9/cr_00_00_2.jpeg",
	cardTitle: "Card title",
	cardDescription:
		"Some quick example text to build on the card title and make up the bulk of the cards content.",
	button: {
		url: "#",
		label: "Go to wikipedia"
	}
};

export function Card() {
	return (
		<div className="card">
			<img src={data.image} className="card-img-top" alt="..." />
			<div className="card-body text-center">
				<h5 className="card-title">{data.cardTitle}</h5>
				<p className="card-text">{data.cardDescription}</p>
			</div>
			<div className="card-footer justify-content-center text-center">
				<a className="btn btn-primary" href={data.button.url}>
					{data.button.label}
				</a>
			</div>
		</div>
	);
}

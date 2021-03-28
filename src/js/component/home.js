import React from "react";
import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Card, Card2, Card3, Card4 } from "./card";
import { Footer } from "./footer";

import "../../styles/index.scss";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="container-fluid">
			<div className="anch">
				<Navbar />
			</div>
			<div className="row justify-content-center">
				<div className="col-sm-11 contenedor">
					<Jumbotron />
				</div>

				<div className=" row carcon">
					<div className="col-sm">
						<Card />
					</div>
					<div className="col-sm">
						<Card2 />
					</div>
					<div className="col-sm">
						<Card3 />
					</div>
					<div className="col-sm">
						<Card4 />
					</div>
				</div>
			</div>
			<div className="col-sm anch">
				<Footer />
			</div>
		</div>
	);
}

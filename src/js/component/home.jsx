import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5"> Simple Counter!</h1>
			<p>
				<img src={rigoImage} />
			</p>
		</div>
		
	);
};


export default Home;

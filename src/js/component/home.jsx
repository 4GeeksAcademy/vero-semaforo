
import React, { useState } from "react"
//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [luces, setLuces] = useState("secondary")
	const [lucesAmarillas, setLucesAmarillas] = useState("secondary")
	const [lucesVerdes, setLucesVerdes] = useState("secondary")

	function cambiarColor() {
			setLuces("danger")
			setLucesAmarillas("secondary")
			setLucesVerdes ("secondary")


	}
	function cambiarLucesAmarillas () {
		setLucesAmarillas ("warning")
		setLuces ("secondary")
		setLucesVerdes ("secondary")
	}
	function cambiarLucesVerdes() {
		setLucesVerdes ("success")
		setLuces ("secondary")
		setLucesAmarillas ("secondary")
		
	}
	return (
		<div className="container border border-1" style={{width:"120px", marginTop:"20px", padding:"10px", background:"black"}}>

			<div className={`alert alert-${luces} rounded-circle`} onClick={cambiarColor}>
			</div>
			<div className={`alert alert-${lucesAmarillas} rounded-circle`}  onClick={cambiarLucesAmarillas}>
			</div>
			<div className={`alert alert-${lucesVerdes} rounded-circle`} onClick={cambiarLucesVerdes}> 
			</div>



		</div>


	);
};

export default Home;

import './mapContactPage.css';
const MapContactPage = () => {
	return (
		<section className="map">
			<div className="map__container _container">
				<div className="map__top">
					<div className="map__top-number">02</div>
					<h2 className="map__title">LOCATION</h2>
				</div>
				<div className="map__body">
					<div style={{"width": 100 + "%"}}>
						<iframe title="frame" width="100%"
										height="511"
										frameBorder="0"
										scrolling="no"
										marginHeight="0"
										marginWidth="0"
										src="https://maps.google.com/maps?width=100%25&amp;height=511&amp;hl=en&amp;q=Washington+(map)&amp;t=&amp;z=9&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
						</iframe>
					</div>
				</div>
			</div>
		</section>
	)
}

export default MapContactPage;
const Questions = () => {
	return (
		<>
			<div className="questions__line"></div>
			<div className="questions__items">
				<div className="questions__item">
					<input type="checkbox" className="questions__input" name="questions_1" id="questions_1"/>
					<label className="questions__item-title" htmlFor="questions_1">Where Can I Find More Information?</label>
					<div className="questions__text">
						<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
							duis
							enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
					</div>
				</div>
				<div className="questions__item">
					<input type="checkbox" className="questions__input" name="questions_2" id="questions_2"/>
					<label className="questions__item-title" htmlFor="questions_2">What Kinds of Payment Do You
						Accept?</label>
					<div className="questions__text">
						<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
							duis
							enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
					</div>
				</div>
				<div className="questions__item">
					<input type="checkbox" className="questions__input" name="questions_3" id="questions_3"/>
					<label className="questions__item-title" htmlFor="questions_3">What Are Your Terms and Conditions?</label>
					<div className="questions__text">
						<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
							duis
							enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Questions;
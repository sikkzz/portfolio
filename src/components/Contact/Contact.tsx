import { useRef, useState } from "react";

import { motion } from "framer-motion";

import emailjs from "@emailjs/browser";

import SectionWrapper from "@/hoc/SectionWrapper";
import EarthCanvas from "@/components/Canvas/EarthCanvas";
import { slideIn } from "@/utils/motion";

import {
	ContactDiv,
	ContactWrapper,
	ContactInnerDiv,
	ContactForm,
} from "./Contact.styles";

const Contact = () => {
	const formRef = useRef<HTMLFormElement>(null);

	const [form, setForm] = useState({ name: "", email: "", message: "" });

	const [loading, setLoading] = useState(false);

	const slideInData = {
		direction: "left",
		type: "tween",
		delay: 0.2,
		duration: 1,
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { target } = e;
		const { name, value } = target;

		setForm({ ...form, [name]: value });
	};

	const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const { target } = e;
		const { name, value } = target;

		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);

		emailjs
			.send(
				"service_4amu3zq",
				"template_bvgc44q",
				{
					from_name: form.name,
					to_name: "sikkzz",
					from_email: form.email,
					to_email: "sling0623@gmail.com",
					message: form.message,
				},
				"8MtMxw3g0g1b3IByy",
			)
			.then(
				() => {
					setLoading(false);
					alert("Thank you. I will get back to you as soon as possible.");

					setForm({
						name: "",
						email: "",
						message: "",
					});
				},
				(error) => {
					setLoading(false);
					console.error(error);

					alert("Ahh, something went wrong. Please try again.");
				},
			);
	};

	return (
		<ContactDiv>
			<ContactWrapper>
				<ContactInnerDiv>
					<motion.div
						variants={slideIn(slideInData)}
						style={{
							flex: "0.75",
							borderRadius: "1rem",
							backgroundColor: "rgb(16,13,37)",
							padding: "2rem",
						}}
					>
						<p>Get in touch</p>
						<h3>Contact.</h3>
						<ContactForm ref={formRef} onSubmit={handleSubmit}>
							<label htmlFor="nameInput">
								<span>Your Name</span>
								<input
									id="nameInput"
									type="text"
									name="name"
									value={form.name}
									onChange={handleInputChange}
									placeholder="What's your good name?"
								/>
							</label>
							<label htmlFor="emailInput">
								<span>Your email</span>
								<input
									type="email"
									name="email"
									value={form.email}
									onChange={handleInputChange}
									placeholder="What's your web address?"
								/>
							</label>
							<label htmlFor="messageArea">
								<span>Your Message</span>
								<textarea
									id="messageArea"
									rows={7}
									name="message"
									value={form.message}
									onChange={handleTextAreaChange}
									placeholder="What you want to say?"
								/>
							</label>
							<button type="submit">{loading ? "Sending..." : "Send"}</button>
						</ContactForm>
					</motion.div>
					<motion.div
						variants={slideIn(slideInData)}
						style={{ flex: "1 1 0%", height: "auto" }}
					>
						<EarthCanvas />
					</motion.div>
				</ContactInnerDiv>
			</ContactWrapper>
		</ContactDiv>
	);
};

export default SectionWrapper(Contact, "contact");

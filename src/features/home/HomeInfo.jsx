import InfoBox from './InfoBox';
import Intro from './Intro';

const renderContent = {
	1: <Intro />,
	2: (
		<InfoBox
			text="Specializing in crafting visually appealing and user-friendly interfaces by leveraging modern web technologies"
			link="/about"
			btnText="Get to know me"
		/>
	),
	3: (
		<InfoBox
			text="Led multiple projects to success over the years. Curious about the impact?"
			link="/projects"
			btnText="Visit my projects"
		/>
	),
	4: (
		<InfoBox
			text="Need a project done or looking for a dev? I'm just a few keystrokes away"
			link="/contact"
			btnText="Let's talk"
		/>
	),
};

export default function HomeInfo({ currentStage }) {
	return renderContent[currentStage] || null;
}
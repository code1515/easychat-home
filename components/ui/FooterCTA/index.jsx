import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink"

const FooterCTA = () => (
    <SectionWrapper>
        <div className="custom-screen">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                    Get started with EasyChat today!
                </h2>
                <p className="mt-3 text-gray-600">
                    Leverage free GPT-4o technology to streamline your writing process, access expert support, and overcome challenges. Experience the benefits of free EasyChat and boost your productivity effortlessly!
                </p>
                <NavLink
                    href="https://easychat.vip"
                    className="font-medium text-lg text-white inline-block"
                    style={{
                        backgroundColor: 'rgba(31, 148, 140, 1)', // Initial background color
                        border: 'none', // Remove border if not needed
                        padding: '0.5rem 1rem', // Adjust padding as needed
                        borderRadius: '1.5rem', // Adjust border radius as needed
                        textDecoration: 'none',
                        marginTop: '1.5rem',
                        transition: 'background-color 0.3s ease', // Smooth transition
                        width: 200,
                        height: 50
                    }}
                >
                    Start Chat
                </NavLink>
            </div>
        </div>
    </SectionWrapper>
)

export default FooterCTA
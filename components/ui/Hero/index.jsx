import NavLink from "../NavLink"
import Description from "../../constants";
const Hero = () => (
    <section>
        <div className="custom-screen py-28 text-gray-600">
            <div className="space-y-5 max-w-4xl mx-auto text-center">
                <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
                    <span style={{color: 'var(--easychat-color)'}}>Free </span>
                        Chat with <span style={{color: 'var(--easychat-color)'}}>GPT-4o/mini</span> For Everyone!
                </h1>

                <p className="max-w-xl mx-auto"> {Description} </p>

                <div className="flex items-center justify-center gap-x-3 font-medium text-lg">
                    <NavLink
                        href="https://easychat.vip"
                        className="text-white"
                        target="_blank" // Open link in a new tab
                        rel="noopener noreferrer" // Security measure
                        style={{
                            backgroundColor: 'rgba(31, 148, 140, 0.6)', // Initial background color
                            border: 'none', // Remove border if not needed
                            padding: '0.5rem 1rem', // Adjust padding as needed
                            borderRadius: '1.5rem', // Adjust border radius as needed
                            textDecoration: 'none',
                            transition: 'background-color 0.3s ease', // Smooth transition
                            width: 200,
                            height: 50
                        }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(31, 148, 140, 1)'} // Adjust opacity
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(31, 148, 140, 0.6)'} // Adjust opacity
                        onMouseDown={(e) => e.currentTarget.style.backgroundColor = 'rgba(31, 148, 140, 1)'} // Adjust opacity
                    >
                        Start Chat
                    </NavLink>
                </div>

            </div>
        </div>
    </section>
)

export default Hero
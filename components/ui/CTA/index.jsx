import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink"
import ctaImage from "../../../public/wecom.jpg"
import Image from "next/image"

const CTA = () => {
    return (
        <SectionWrapper id="cta" className="pb-0">
            <div className="custom-screen">
                <div className="items-center gap-x-12 lg:flex">
                    <div className="flex-1 sm:hidden lg:block">
                        <Image src={ctaImage} className="rounded-lg md:max-w-lg" alt="Boost Your Productivity with EasyChat: Your Essential Writing and Work Assistant Using GPT-4o!" />
                    </div>
                    <div className="max-w-xl mt-6 md:mt-0 lg:max-w-2xl">
                        <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Boost Your Productivity with EasyChat: Your Essential Writing and Work Assistant Using GPT-4o!
                        </h2>
                        <p className="mt-3 text-gray-600">
                            EasyChat is the ultimate tool for boosting your work efficiency, powered by advanced GPT-4o technology. It simplifies writing tasks, whether you're drafting reports, creating articles, or brainstorming ideas. Enjoy the benefits of free access to GPT-4o and EasyChat, and discover a new, efficient way to enhance your productivity. Make EasyChat your go-to assistant for daily tasks and achieve more with less effort!                        </p>
                        <NavLink
                            href="https://easychat.vip"
                            className="inline-block mt-4 font-medium text-sm text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800"
                            style={{backgroundColor: 'rgba(31, 148, 140, 0.6)'}}
                        >
                            Chat Now!
                        </NavLink>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default CTA
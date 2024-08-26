import SectionWrapper from "../../SectionWrapper"
const Features = () => {

    const features = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" version="1.1" width="48" height="48" viewBox="0 0 48 48"><defs><radialGradient cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" id="master_svg0_12_08117" gradientTransform="translate(24.000003814697266 24) rotate(90) scale(24 24.000003814697266)"><stop offset="1.4285714365541935%" stop-color="#FFF4D8" stop-opacity="1"/><stop offset="49.28571283817291%" stop-color="#E8B75D" stop-opacity="0.20000000298023224"/><stop offset="100%" stop-color="#E8B75D" stop-opacity="0.10000000149011612"/></radialGradient><clipPath id="master_svg1_12_07426"><rect x="10" y="10" width="28" height="28" rx="0"/></clipPath></defs><g><g><rect x="0" y="0" width="48.00000762939453" height="48" rx="24" fill="url(#master_svg0_12_08117)" fill-opacity="1"/></g><g clip-path="url(#master_svg1_12_07426)"><g><path d="M20.3333940625,13.11962890625L30.130714062499997,13.11962890625L26.4010140625,20.44775890625L32.7310140625,20.45595890625L19.4666040625,35.74932890625L23.2810540625,26.00402890625L16.0869140625,26.00402890625L20.3333940625,13.11962890625Z" fill="#DD9434" fill-opacity="1"/></g></g></g></svg>,
            title: "Lightning Fast Response",
            desc: "Millisecond-level response, breaking speed limits, faster than fast."
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" version="1.1" width="48" height="48" viewBox="0 0 48 48"><defs><radialGradient cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" id="master_svg0_12_08117" gradientTransform="translate(24.000003814697266 24) rotate(90) scale(24 24.000003814697266)"><stop offset="1.4285714365541935%" stop-color="#FFF4D8" stop-opacity="1"/><stop offset="49.28571283817291%" stop-color="#E8B75D" stop-opacity="0.20000000298023224"/><stop offset="100%" stop-color="#E8B75D" stop-opacity="0.10000000149011612"/></radialGradient><clipPath id="master_svg1_12_07404"><rect x="12" y="12" width="24" height="24" rx="0"/></clipPath></defs><g><g><rect x="0" y="0" width="48.00000762939453" height="48" rx="24" fill="url(#master_svg0_12_08117)" fill-opacity="1"/></g><g clip-path="url(#master_svg1_12_07404)"><g><path d="M15.783,14.826L24,13L32.217,14.826C32.674499999999995,14.92779,33,15.33349,33,15.802L33,25.789C32.9999,27.795099999999998,31.9972,29.6683,30.328,30.781L24,35L17.672,30.781C16.00264,29.6676,15,27.794800000000002,15,25.79L15,15.802C15.0000803471,15.33339,15.325558000000001,14.92769,15.783,14.826Z" fill="#DD9434" fill-opacity="1"/></g></g></g></svg>,
            title: "Stable and Reliable",
            desc: "Access from anywhere, anytime, just \"Chat\" a bit."
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" version="1.1" width="48" height="48" viewBox="0 0 48 48"><defs><radialGradient cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" id="master_svg0_12_08117" gradientTransform="translate(24.000003814697266 24) rotate(90) scale(24 24.000003814697266)"><stop offset="1.4285714365541935%" stop-color="#FFF4D8" stop-opacity="1"/><stop offset="49.28571283817291%" stop-color="#E8B75D" stop-opacity="0.20000000298023224"/><stop offset="100%" stop-color="#E8B75D" stop-opacity="0.10000000149011612"/></radialGradient><clipPath id="master_svg1_12_07386"><rect x="12" y="12" width="24" height="24" rx="0"/></clipPath></defs><g><g><rect x="0" y="0" width="48.00000762939453" height="48" rx="24" fill="url(#master_svg0_12_08117)" fill-opacity="1"/></g><g clip-path="url(#master_svg1_12_07386)"><g><path d="M26,15L26,33L15,33C14.447715,33,14,32.5523,14,32L14,26.5C15.38071,26.5,16.5,25.380699999999997,16.5,24C16.5,22.61929,15.38071,21.5,14,21.5L14,16C14,15.447715,14.447715,15,15,15L26,15ZM28,15L33,15C33.5523,15,34,15.447715,34,16L34,21.5C32.619299999999996,21.5,31.5,22.61929,31.5,24C31.5,25.380699999999997,32.619299999999996,26.5,34,26.5L34,32C34,32.5523,33.5523,33,33,33L28,33L28,15Z" fill="#DD9434" fill-opacity="1"/></g></g></g></svg>,
            title: "Great Discounts",
            desc: "Stackable discounts, new users get an instant 10 yuan off on their first order, with a maximum discount of 70%."
        }
    ]

    return (
        <SectionWrapper>
            <div id="features" className="custom-screen text-gray-600">
                <ul className="grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        features.map((item, idx) => (
                            <li key={idx} className="space-y-3">
                                <div className="w-12 h-12 text-indigo-600 rounded-full flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <h4 className="text-lg text-gray-800 font-semibold">
                                    {item.title}
                                </h4>
                                <p>
                                    {item.desc}
                                </p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </SectionWrapper>
    )
}

export default Features
import Image from 'next/image'
import THU from '../../../public/recommends/THU.png'
import KING from '../../../public/recommends/KING.png'
import NKU from '../../../public/recommends/NKU.png'
import HKU from '../../../public/recommends/HKU.png'

const logos = [
    {
        src: KING,
        alt: "freshbooks"
    },
    {
        src: THU,
        alt: "sendgrid"
    },
    {
        src: NKU,
        alt: "layers"
    },
    {
        src: HKU,
        alt: "adobe"
    },
]


const LogoGrid = () => (
    <div>
        <div className="custom-screen">
            <h2 className="font-semibold text-sm text-gray-600 text-center">
                TRUSTED BY EVERYONE FROM AROUND THE WORLD ESPECIALLY IN CHINA
            </h2>
            {/*<div className="mt-6">*/}
            {/*    <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16">*/}
            {/*        {*/}
            {/*            logos.map((item, idx) => (*/}
            {/*                <li key={idx}>*/}
            {/*                    <Image*/}
            {/*                        src={item.src} alt={item.alt}*/}
            {/*                        style={{ filter: 'grayscale(100%)' }}*/}
            {/*                    />*/}
            {/*                </li>*/}
            {/*            ))*/}
            {/*        }*/}
            {/*    </ul>*/}
            {/*</div>*/}
        </div>
    </div>
)

export default LogoGrid
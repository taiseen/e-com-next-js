import { footerData } from "@/constants/data";
import { Wrapper } from ".";


const Footer = () => {
    return (
        <footer className="bg-black text-white pt-14 pb-3">

            <Wrapper className="flex justify-between flex-col md:flex-row gap-[50px] md:gap-0">
                {/* LEFT START */}
                <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
                    {/* MENU START */}
                    <div className="flex flex-col gap-3 shrink-0">
                        {
                            footerData.firstLevel.map(data =>
                                <div key={data.id} className="font-oswald font-medium uppercase text-sm cursor-pointer">
                                    {data.text}
                                </div>
                            )
                        }
                    </div>


                    {/* NORMAL MENU START */}
                    <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0">
                        {/* MENU START */}
                        <div className="flex flex-col gap-3">
                            {
                                footerData.secondLevel.map(data =>
                                    data.id === 1
                                        ? (
                                            <div key={data.id} className="font-oswald font-medium uppercase text-sm">
                                                {data.text}
                                            </div>
                                        ) : (
                                            <div key={data.id} className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                                {data.text}
                                            </div>
                                        )
                                )
                            }
                        </div>

                        {/* MENU START */}
                        <div className="flex flex-col gap-3">
                            {
                                footerData.thirdLevel.map(data =>
                                    data.id === 1
                                        ? (
                                            <div key={data.id} className="font-oswald font-medium uppercase text-sm">
                                                {data.text}
                                            </div>
                                        ) : (
                                            <div key={data.id} className="text-sm text-white/[0.5] hover:text-white cursor-pointer">
                                                {data.text}
                                            </div>
                                        )
                                )
                            }
                        </div>
                    </div>
                </div>


                {/* RIGHT START */}
                <div className="flex gap-4 justify-center md:justify-start">
                    {
                        footerData.forthLevel.map(data =>
                            <div key={data.id} className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                                {<data.icon size={20} />}
                            </div>
                        )
                    }
                </div>

            </Wrapper>


            <Wrapper className="flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0">

                {/* LEFT START */}
                <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer text-center md:text-left">
                    © 2023 Nike, Inc. All Rights Reserved
                </div>


                {/* RIGHT START */}
                <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
                    {
                        footerData.fifthLevel.map(data =>
                            <div key={data.id} className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                                {data.text}
                            </div>
                        )
                    }
                </div>

            </Wrapper>
        </footer>
    );
};

export default Footer;
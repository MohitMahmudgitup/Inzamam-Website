
import { allImage } from "../../../Images/image";
const Slides = () => {
    return (
        <section className="">
            <div className="w-full md:px-32 pt-10 md:pt-28  sm:h-[180vh] ">
                <div className="castom-221 flex  ">
                    <div className="castom-22 flex md:w-[50%] flex-col  ">
                        <h1 className="text-7xl f1  pb-10 cursor-default">Let's create</h1>
                        <h1 className="f1 text-7xl -mt-10   pb-10 cursor-default"><span className="text-violet-400">beautiful</span> things.</h1>
                        <img className=" w-[90%] md:w-[80%]  rounded-[10px]" src={allImage.pic14} alt="" />
                    </div>
                    <div className="md:w-[50%] flex flex-col  ">
                        <h5 className="text-lg font-medium md:text-left text-center px-3 md:px-0 pt-10 md:pt-0 mb-5   sticky top-20 cursor-default">This photo is taken from a unique perspective, where the blurred piece of wood in the foreground symbolizes life's obstacles, while the smiling face in the background reflects the confidence to overcome them. The pink shirt, open sky, and the relaxed posture on the rooftop create a perfect blend of freedom, tranquility, and self-assurance. The image seems to say— "Life's path is never smooth, but with a smile and confidence, every hurdle can be overcome." 😊✨</h5>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Slides

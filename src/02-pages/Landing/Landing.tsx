import trebuchet from '@assets/treb.svg';

const Landing = () => {
    return (
        <div>
            <div className='flex flex-col items-center'>
                <img src={trebuchet} className="my-8" width={500} alt="trebuchet logo" />
                <div className="text-3xl font-bold bg-color-regal-blue w-full h-full text-white flex justify-center">
                    Trebuchet
                </div>
            </div>
            <p className='text-2xl w-full flex justify-center text-light m-3'>V<sub>0.0.1</sub></p>
        </div>
    )
}

export default Landing;
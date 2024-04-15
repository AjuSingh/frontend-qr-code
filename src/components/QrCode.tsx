import Scanner from '../assets/code.png'


const QrCode = () => {
    return (
        <div className='fixed bg-[#D5E1EF] flex items-center justify-center w-[100vw] h-[100vh]'>
            <div className="md:w-[25%] md:h-[60%] border bg-white rounded-2xl p-6 mx-4 w-[]">
                <img src={Scanner} alt="code" className='rounded-xl' />
                <h1 className='font-bold text-xl p-2'>Improve your front-end skills by building projects</h1>
                <p className='text-base text-zinc-400 p-2'> Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
        </div>
    )
}

export default QrCode
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation


const LoadAmplifier = () => {


  const products = [
    {
      id: 1,
      image: "/images/blog-2.png",
      title: "S-10",
      // link: '/loadcell',
    },
    {
      id: 2,
      image: "/images/loadamplifier1.png",
      title: "S-201",
      // link: '/loadindicator',
    },


  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/images/blog-2.png",
    "/images/loadamplifier1.png",
  ];

  // Auto-scroll to the next image every 2 seconds
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change the timing here (2000ms = 2 seconds)

    return () => clearInterval(scrollInterval); // Clear interval when component unmounts
  }, [images.length]);

  return (
    <>
      <div className='lg:px-20 px-7 lg:mt-20 mt-14 mb-52 lg:mb-60'>
        <div>
          <h1 className="lg:text-[30px] text-[25px] font-bold border-[#3ebbe1] pb-3 ">
            Load Cell Amplifier
          </h1>
          <hr className="lg:w-[300px] w-[180px] border-[#3ebbe1] border-b-4" />
        </div>
        <div className='mt-14 '>
          <div className='space-y-5'>    <h1 className='font-medium text-[33px]  '>What is a load cell amplifier?</h1>
            <p className='text-[18px] '>A Load Cell Amplifier is a device that can increase the excitation and strength of the signals emitted by a load cell (a kind of transducer that converts force signals to electrical signal precisely). The voltage amplification is required as sometimes, the signal coming from a load cell might be of very low strength and not useful for certain measuring components such as PLC, Load Meter, Data Acquisition Modules (DAQ), and Microprocessors. It is also considered as the best possible option to amplify signals when we are talking about providing excitation voltage to circuits like strain gauge load cells. A load cell amplifier can be used to convert mv/V output signal into a stable and strong electrical signal, making it possible for other components to receive it.</p>
            <p className='text-[18px] '>Excitation voltage, noise filtering, attenuation, amplify low-strength signals, and conversion of output signals are indeed considered as some of the most prominent functions of a load cell amplifier. As the amplification device will enhance or increase the actual strength and range of the output signal, there are so many electrical components and measuring devices that works with a load cell amplifier parallelly. The main function or working of this signal amplifier involves getting a feeble and weak output digital signal from load cell, converting or amplifying the received signal into a more powerful signal, and sending a higher strength electrical signal in the form of output.</p>
            <p className='text-[18px] '>Putting in simple words, a load cell is an sensor or transducer that has the capability to convert the kinetic energy of a force such as tension, compression, expansion, and pressure into a measurable electrical quantity through the medium of a digital signal. Usually, this output signal is very weak and of low-strength with having noise interruptions and thereby, not useful for many electrical components. It is essential for such electrical components or displays to get a high-strength and noise-free signal as an input to produce a more appropriate and understandable signal for human interpretation. Hence, the output or resultant signal of a load cell needs to pass through signal conditioners or Load Cell Amplifiers to enhance the quality and strength of the signal.</p>

          </div>
          <div className='space-y-5'>    <h1 className='font-medium mt-7 text-[33px]  '>How Does Load Cell Amplifier Work?</h1>
            <p className='text-[18px] '>As stated above, the job of a load cell amplifier is to strengthen the weak signals. Normally, the signals generated by a load cell are in millivolt (mV), and the task of a load cell amplifier is to convert those mV signals into more powerful signals like 4-20mA, 0-10 VDC, ±10 VDC, RS232, RS485, and USB. This device will need an external power supply to operate.</p>
            <p className='text-[18px] '>When you use a load cell amplifier to increase the strength of a signal, the interesting thing it the measurement of the core data does not change – it remains the same. In simple words, it does not create any inaccuracies in the measured value.</p>
            <p className='text-[18px] '>The process through which a load cell amplifier strengthens the signal is known as signal conditioning. There are many different types of signal conditional methods like filtering, linearization, and more besides amplification. Normally, a load cell amplifier is selected based on the requirements of the project, but if you are not sure about your requirements, then you can feel free to contact load cell experts at Sivay Sencor Sensor.</p>

          </div>
          <div className='space-y-5'>    <h1 className='font-medium mt-7 text-[33px]  '>Load Cell Amplifiers with Built-in Excitation</h1>
            <p className='text-[18px] '>A load cell requires excitation voltage to generate an output signal. The recommended and maximum excitation values are often set by the manufacturer, and it is crucial to maintain these values for accurate results.</p>
            <p className='text-[18px] '>Higher excitation voltage will indeed produce a higher output voltage that is easy to measure and digitize. However, higher voltages will also cause the flow of more current within the resistive strain gauges and eventually heat the load cell in the process. The excess of head produced because of extra voltage (exceeds the rated value) can lead to gauge failures. Also, if the device is battery operated then there are chances that the battery may deplete faster due to higher excitation of voltage.</p>
            <p className='text-[18px] '>Therefore, you will need a load cell that has a built-in regulated excitation source to make sure that the output voltage of the strain gauge is exactly proportional to the excitation voltage. This in-built regulated excitation source will make sure that the final output voltage generated is accurate and free from fluctuations and noise. This type of load cell amplifier offers quite a steady temperature and ensures precise accurate measurement for the long term.</p>

          </div>
          <div className='space-y-5'>    <h1 className='font-medium mt-7 text-[33px]  '>How to calibrate load cell amplifier?</h1>
            <p className='text-[18px] '>The output voltage of a load cell will be in the range of millivolts. However, for the other devices that are connected to the load cell, the reading inputs in the range of millivolts can be difficult. A load cell amplifier strengthens the signal and makes it legible for other devices. The calibration of a load cell depends on the type of load cell being used. Normally, the load cell manufacturer will do it for you if you order a load cell with an amplifier.</p>

          </div>


          <div className='w-full flex mt-7 lg:px-7 flex-col lg:flex-row lg:gap-10'>
            <div className='lg:w-1/2 space-y-4'>
              <h1 className='font-bold text-[#3ebbe1] text-[30px] sm:text-[40px] leading-tight'>
                Load Cell Amplifier
              </h1>
              <p className='text-[17px]'>This product are widely demanded for the several industrial applications such as to interface load cell for Controllers, PLC Systems and Digital indicators having standard analog inputs which can be current or voltage. These are also known as load transmitter. These are fabricated using the supreme quality raw stuff. Our products are highly accepted and admired by users due to its highly durable service life, unmatched quality, dimensional accuracy, easy use and installation.</p>
              <p className='text-[17px]'>It is utilized to transform the signals of one load cell to another remote device which is attuned with process control system. The measuring gauge of the existing device starts with zero to assure the accuracy level; Normal output of the presented apparatus is between 0 to 10 volt levels. It is frequently utilized in control systems and weighing systems. The all technical details about the concern appliance is given in the below table. This Load Cell Amplifier Module is design in such a way that, It will give the best output results.</p>

            </div>
            <div className='lg:w-1/2 lg:h-[350px] lg:mt-20 overflow-hidden lg:pl-10'>
              <div className='relative lg:w-[400px] lg:h-[300px]'>
                {/* Render the current image */}
                <img
                  src={images[currentIndex]}
                  alt={`Image ${currentIndex + 1}`}
                  className=' object-cover rounded-lg transition-all duration-700'
                />
              </div>
            </div>

          </div>

          <div className='mt-9 lg:mt-16 lg:px-7'><h1 className='text-[#3ebbe1] text-[25px] font-medium'> Sub Category :</h1> <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 lg:grid-cols-5 gap-10 ">

            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white border rounded-tl-[40px] rounded-br-[40px] border-gray-300 shadow-lg overflow-hidden transform transition-all hover:shadow-xl hover:scale-105"
                style={{ height: 'auto' }}
              >
                {/* Image Container */}
                <div className="w-full h-auto p-3 flex justify-center items-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="object-cover w-full h-auto max-h-auto max-w-[150px] rounded-tl-lg"
                  />
                </div>

                {/* Product Content */}
                <Link to={product.link}>
                  <div className="max-h-auto flex flex-col justify-center items-center shadow-xl bg-slate-200">
                    {/* Product Title */}
                    <h2 className="text-[18px] hover:text-[#3ebbe1] font-medium bg-slate-200 text-black text-center p-3 ">{product.title}</h2>
                  </div>
                </Link>


              </div>
            ))}
          </div>
          </div>

          <div className='mt-16'>
            <h1 className='font-bold text-[24px] text-[#3ebbe1]'>Technical Specifications :</h1>
            <div className='mt-5 bg-[#f4f4f4]'>
              <p className='p-4 text-[18px]'> Analogue Input Range: 2mV/V loadcell</p>
            </div>
            <div className='mt-5 bg-[#f4f4f4]'>
              <p className='p-4 text-[18px]'> Supply: 24V DC</p>  </div>
            <div className='mt-5 bg-[#f4f4f4]'>
              <p className='p-4 text-[18px]'> Operating Temperature: Beetween -10 ÂºC and +40 ÂºC</p>
            </div>
            <div className='mt-5 bg-[#f4f4f4]'>
              <p className='p-4 text-[18px]'> Operating Humidity: Max. %80 RH </p>
            </div>
            <div className='mt-5 bg-[#f4f4f4]'>
              <p className='p-4 text-[18px]'>  External Adjustment: Zeroing Function</p>
            </div>
            <div className='mt-5 bg-[#f4f4f4]'>
              <p className='p-4 text-[18px]'>  Analogue Output: 0-10V (4-20 mA)</p>
            </div>
            <div className='mt-5 bg-[#f4f4f4]'>
              <p className='p-4 text-[18px]'> Mounting: DIN-Rail</p>
            </div>
            <div className='mt-5 bg-[#f4f4f4]'>
              <p className='p-4 text-[18px]'>  Front Panel: Trimming potentiometer for zeroing and power led</p>
            </div>
            <div className='mt-5 bg-[#f4f4f4]'>
              <p className='p-4 text-[18px]'> Load Cell Supply Voltage: 12V DC</p>
            </div>
            <div className='mt-5 bg-[#f4f4f4]'>
              <p className='p-4 text-[18px]'> Load Cell Headlines: 4 pieces 350</p>
            </div>
            <div className='mt-5 bg-[#f4f4f4]'>
              <p className='p-4 text-[18px]'>  Load Cell Connection: 4 wired cable</p>
            </div>
          </div>



        </div>

      </div>

    </>
  );
};

export default LoadAmplifier;

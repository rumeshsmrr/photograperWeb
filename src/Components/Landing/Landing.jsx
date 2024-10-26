import './Landing.css';
import backgroundVideo from '../../assets/video/protograpervideo.mp4';

export default function Landing() {
  return (
    <div className='p-2 pb-0 mb-2 '>
    <div className="bgVideoLanding ">
      <video className="videoBackground" autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="textOverlay font-regular text-[110px] ">
        Let's <br />
        create <br />
        your story <br />
        together!
      </div>
      <div className='categoryOverlay font-bold font-semibold text-white relative text-[20px] cursor-pointer opacity-75  text-right '>
       
        <div className='w-fit p-2 flex flex-col gap-10 '>
          <div className='categoryItem hover:text-accent'>Wedding</div>
          <div className='categoryItem  hover:text-accent'>Birthday</div>
          <div className='categoryItem  hover:text-accent'>Graduation</div>
          <div className='categoryItem hover:text-accent'>Corporate</div>
        </div>
      </div>
      
    </div>

    <div className='relative bottom-5 h-5 bg-white'>
        <div className='shape5'>
                <div id="curved-corner-bottomleft"></div>
                </div>
                <div className='shape6'>
                <div id="curved-corner-bottomright"></div>
                </div>
    </div>
    </div>
  );
}


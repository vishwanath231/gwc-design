import React from 'react';

const Header = () => {
    return (
        <>
            <div className="bg_video_container">
                <video loop muted autoPlay className='bg_video'>
                    <source src={require('../assets/pexels-pressmaster-3141210-1920x1080-25fps.mp4')} type="video/mp4" />
                </video>
                    <div className="bg_video_content ">
                        <div className="content_info">
                        <div className="flicker">
                            Changing the way you think about data
                        </div>
                            
                        </div>
                    </div>
            </div>


            
        </>
    )
}

export default Header;
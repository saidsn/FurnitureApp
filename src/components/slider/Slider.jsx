import React from 'react';
import './Slider.scss';
import Slider from "react-slick";

const MySlider = () => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplay: true,
    };
    return (
        <div className="container">
            <Slider className='slider' {...settings}>
                <div className='category__slider--item'>
                    <img src="https://s3-alpha-sig.figma.com/img/fc4f/78b4/52608fae9d209c21479bbc2e3acdb8da?Expires=1692576000&Signature=o65p4eTHGOi9u3hpEaLWGmybuQZh~WWiz84vP~1TRsjXmszNF12awYZxdgTrMVC0DHYQWISQ3VMhNS9Ozl6~j9rPEFt3QIQIUXUmhCccEnti7Dk22mT~ftDwDDdsc3iHETzrEudIpVMvpz2YqvBWAFcjdDkmv1ifWU7ud7l~fBV-CMircpUj8ZBu~JIXV~8OqKknouUiLhF9765EKTtaRSsWx7fVzAFNg7WNy9zfIoqFjAZe2cXJiYHQZoWY9WixAkERtgLtTODCcPMuv1~ZzJzMiMhWeMcqWJqPhEgmuXaVqUr~9Op2PWEYgVNfXb-HOy4Qy1IxHnAmsMfH3q7bYg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                    <p className='category__name'>SOFAS</p>
                </div>
                <div className='category__slider--item'>
                    <img src="https://s3-alpha-sig.figma.com/img/fc4f/78b4/52608fae9d209c21479bbc2e3acdb8da?Expires=1692576000&Signature=o65p4eTHGOi9u3hpEaLWGmybuQZh~WWiz84vP~1TRsjXmszNF12awYZxdgTrMVC0DHYQWISQ3VMhNS9Ozl6~j9rPEFt3QIQIUXUmhCccEnti7Dk22mT~ftDwDDdsc3iHETzrEudIpVMvpz2YqvBWAFcjdDkmv1ifWU7ud7l~fBV-CMircpUj8ZBu~JIXV~8OqKknouUiLhF9765EKTtaRSsWx7fVzAFNg7WNy9zfIoqFjAZe2cXJiYHQZoWY9WixAkERtgLtTODCcPMuv1~ZzJzMiMhWeMcqWJqPhEgmuXaVqUr~9Op2PWEYgVNfXb-HOy4Qy1IxHnAmsMfH3q7bYg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                    <p className='category__name'>BEDS AND HEADBOARDS</p>
                </div>
                <div className='category__slider--item'>
                    <img src="https://s3-alpha-sig.figma.com/img/fc4f/78b4/52608fae9d209c21479bbc2e3acdb8da?Expires=1692576000&Signature=o65p4eTHGOi9u3hpEaLWGmybuQZh~WWiz84vP~1TRsjXmszNF12awYZxdgTrMVC0DHYQWISQ3VMhNS9Ozl6~j9rPEFt3QIQIUXUmhCccEnti7Dk22mT~ftDwDDdsc3iHETzrEudIpVMvpz2YqvBWAFcjdDkmv1ifWU7ud7l~fBV-CMircpUj8ZBu~JIXV~8OqKknouUiLhF9765EKTtaRSsWx7fVzAFNg7WNy9zfIoqFjAZe2cXJiYHQZoWY9WixAkERtgLtTODCcPMuv1~ZzJzMiMhWeMcqWJqPhEgmuXaVqUr~9Op2PWEYgVNfXb-HOy4Qy1IxHnAmsMfH3q7bYg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                    <p className='category__name'>RUGS</p>
                </div>
                <div className='category__slider--item' >
                    <img src="https://s3-alpha-sig.figma.com/img/fc4f/78b4/52608fae9d209c21479bbc2e3acdb8da?Expires=1692576000&Signature=o65p4eTHGOi9u3hpEaLWGmybuQZh~WWiz84vP~1TRsjXmszNF12awYZxdgTrMVC0DHYQWISQ3VMhNS9Ozl6~j9rPEFt3QIQIUXUmhCccEnti7Dk22mT~ftDwDDdsc3iHETzrEudIpVMvpz2YqvBWAFcjdDkmv1ifWU7ud7l~fBV-CMircpUj8ZBu~JIXV~8OqKknouUiLhF9765EKTtaRSsWx7fVzAFNg7WNy9zfIoqFjAZe2cXJiYHQZoWY9WixAkERtgLtTODCcPMuv1~ZzJzMiMhWeMcqWJqPhEgmuXaVqUr~9Op2PWEYgVNfXb-HOy4Qy1IxHnAmsMfH3q7bYg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                    <p className='category__name'>CUSHIONS</p>
                </div>
                <div className='category__slider--item'>
                    <img src="https://s3-alpha-sig.figma.com/img/fc4f/78b4/52608fae9d209c21479bbc2e3acdb8da?Expires=1692576000&Signature=o65p4eTHGOi9u3hpEaLWGmybuQZh~WWiz84vP~1TRsjXmszNF12awYZxdgTrMVC0DHYQWISQ3VMhNS9Ozl6~j9rPEFt3QIQIUXUmhCccEnti7Dk22mT~ftDwDDdsc3iHETzrEudIpVMvpz2YqvBWAFcjdDkmv1ifWU7ud7l~fBV-CMircpUj8ZBu~JIXV~8OqKknouUiLhF9765EKTtaRSsWx7fVzAFNg7WNy9zfIoqFjAZe2cXJiYHQZoWY9WixAkERtgLtTODCcPMuv1~ZzJzMiMhWeMcqWJqPhEgmuXaVqUr~9Op2PWEYgVNfXb-HOy4Qy1IxHnAmsMfH3q7bYg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                    <p className='category__name'>SOFAS</p>
                </div>
                <div className='category__slider--item'>
                    <img src="https://s3-alpha-sig.figma.com/img/fc4f/78b4/52608fae9d209c21479bbc2e3acdb8da?Expires=1692576000&Signature=o65p4eTHGOi9u3hpEaLWGmybuQZh~WWiz84vP~1TRsjXmszNF12awYZxdgTrMVC0DHYQWISQ3VMhNS9Ozl6~j9rPEFt3QIQIUXUmhCccEnti7Dk22mT~ftDwDDdsc3iHETzrEudIpVMvpz2YqvBWAFcjdDkmv1ifWU7ud7l~fBV-CMircpUj8ZBu~JIXV~8OqKknouUiLhF9765EKTtaRSsWx7fVzAFNg7WNy9zfIoqFjAZe2cXJiYHQZoWY9WixAkERtgLtTODCcPMuv1~ZzJzMiMhWeMcqWJqPhEgmuXaVqUr~9Op2PWEYgVNfXb-HOy4Qy1IxHnAmsMfH3q7bYg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                    <p className='category__name'>BEDS AND HEADBOARDS</p>
                </div>
                <div className='category__slider--item'>
                    <img src="https://s3-alpha-sig.figma.com/img/fc4f/78b4/52608fae9d209c21479bbc2e3acdb8da?Expires=1692576000&Signature=o65p4eTHGOi9u3hpEaLWGmybuQZh~WWiz84vP~1TRsjXmszNF12awYZxdgTrMVC0DHYQWISQ3VMhNS9Ozl6~j9rPEFt3QIQIUXUmhCccEnti7Dk22mT~ftDwDDdsc3iHETzrEudIpVMvpz2YqvBWAFcjdDkmv1ifWU7ud7l~fBV-CMircpUj8ZBu~JIXV~8OqKknouUiLhF9765EKTtaRSsWx7fVzAFNg7WNy9zfIoqFjAZe2cXJiYHQZoWY9WixAkERtgLtTODCcPMuv1~ZzJzMiMhWeMcqWJqPhEgmuXaVqUr~9Op2PWEYgVNfXb-HOy4Qy1IxHnAmsMfH3q7bYg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                    <p className='category__name'>RUGS</p>
                </div>
                <div className='category__slider--item' >
                    <img src="https://s3-alpha-sig.figma.com/img/fc4f/78b4/52608fae9d209c21479bbc2e3acdb8da?Expires=1692576000&Signature=o65p4eTHGOi9u3hpEaLWGmybuQZh~WWiz84vP~1TRsjXmszNF12awYZxdgTrMVC0DHYQWISQ3VMhNS9Ozl6~j9rPEFt3QIQIUXUmhCccEnti7Dk22mT~ftDwDDdsc3iHETzrEudIpVMvpz2YqvBWAFcjdDkmv1ifWU7ud7l~fBV-CMircpUj8ZBu~JIXV~8OqKknouUiLhF9765EKTtaRSsWx7fVzAFNg7WNy9zfIoqFjAZe2cXJiYHQZoWY9WixAkERtgLtTODCcPMuv1~ZzJzMiMhWeMcqWJqPhEgmuXaVqUr~9Op2PWEYgVNfXb-HOy4Qy1IxHnAmsMfH3q7bYg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                    <p className='category__name'>CUSHIONS</p>
                </div>
            </Slider>
        </div>
    )
}

export default MySlider;
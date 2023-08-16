import React from 'react';
import './About.scss';
import SecondaryButton from '../../utils/buttons/secondarybutton/SecondaryButton';

const About = () => {
    return (
        <div className='container'>
            <h3 className='title'>ABOUT US</h3>
            <div className="about__content">
                <div className="about__content--left">
                    <div className="about__content--image">
                        <img src="https://s3-alpha-sig.figma.com/img/754e/f220/6125e68f344e6b26d5b0e7816a0e4381?Expires=1692576000&Signature=GOk~~TIC-01M7CVAqJy4zgvV3-XOylo3D~PHUubYevyt87jOvifvXSLirV7sJS11aTconWHt4Sx4pB9yEwY1qjscRj78rZzjyIc2TG7oPPmYyPD8RGlV1vr1rIMgP3DqEx0Kx8cxjBAq3oUmNuVCGR9lj9Y4unGYO~HERTJJ-1O-UUKvUyHhd546HvldSqgvqooAuT4zca3OmhDW~6LEJs-H8GwKs~g4jz6jKSsTfhlST4R6XGKQT9KNJ7ZGpg~IEI10GPm-1B97-3MqGwGxwdr9ZhMeWPR0fXKQJN2CP8G8WOLN3VYHeGPzSAlfBirsabyKlq8p4JyKbrRy8fhvqw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                    </div>
                </div>
                <div className="about__content--right">
                    <div className="about__content--text">
                        <p>
                            Et harum quidem rerum facilis est et expedita distinctio.
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                            Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
                            Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                            Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                        </p>
                    </div>
                    <div className="about__content--button">
                        <SecondaryButton />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "./ProductDetail.scss";
const ProductDetail = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);
  return (
    <div className="product-detail section">
      <div className="container">
        <div className="product-detail__content">
          <div className="product-detail__content__left">
            <div>
              <Slider arrows={false} asNavFor={nav2} ref={slider1}>
                <div className="bigImage">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/18db/ff63/f1f0dd3eb19c837df412907407129597?Expires=1696809600&Signature=ANooHhFKuGmnLdK1QtN2USx3MSKtXLQMdAUJ0O9TN6qmyQ3qPK~gJCJOMGmKvxH4wx5x9DxEMkxTmslomxLJyABJezkLSzXOOKEhHwx-yhW0a6tEZ5R8MkRl3gw1jFJ0z5xqHwcO8CB5NDXsRhCfEL8aEsvO0WwK3lkrRiKZP8Yz-RtDdnMoUtfFOdDrTbGm6OAPDCZSvXG0TMH5K218xe5IHyJ9~9MiYtlhOj3nr6-rBU-lhu~EwiHIbA2YrZj3~xCqwwIesU7AlnMXWDA-vrrzSxX2vAzdv4AKJ2-xL7aAJv5mNhEAYdk-Msi3tCs~A9QCnBTz-fqcj~7jZxYwfg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt="slideimage"
                  />
                </div>
                <div className="bigImage">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/18db/ff63/f1f0dd3eb19c837df412907407129597?Expires=1696809600&Signature=ANooHhFKuGmnLdK1QtN2USx3MSKtXLQMdAUJ0O9TN6qmyQ3qPK~gJCJOMGmKvxH4wx5x9DxEMkxTmslomxLJyABJezkLSzXOOKEhHwx-yhW0a6tEZ5R8MkRl3gw1jFJ0z5xqHwcO8CB5NDXsRhCfEL8aEsvO0WwK3lkrRiKZP8Yz-RtDdnMoUtfFOdDrTbGm6OAPDCZSvXG0TMH5K218xe5IHyJ9~9MiYtlhOj3nr6-rBU-lhu~EwiHIbA2YrZj3~xCqwwIesU7AlnMXWDA-vrrzSxX2vAzdv4AKJ2-xL7aAJv5mNhEAYdk-Msi3tCs~A9QCnBTz-fqcj~7jZxYwfg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt="slideimage"
                  />
                </div>
                <div className="bigImage">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/18db/ff63/f1f0dd3eb19c837df412907407129597?Expires=1696809600&Signature=ANooHhFKuGmnLdK1QtN2USx3MSKtXLQMdAUJ0O9TN6qmyQ3qPK~gJCJOMGmKvxH4wx5x9DxEMkxTmslomxLJyABJezkLSzXOOKEhHwx-yhW0a6tEZ5R8MkRl3gw1jFJ0z5xqHwcO8CB5NDXsRhCfEL8aEsvO0WwK3lkrRiKZP8Yz-RtDdnMoUtfFOdDrTbGm6OAPDCZSvXG0TMH5K218xe5IHyJ9~9MiYtlhOj3nr6-rBU-lhu~EwiHIbA2YrZj3~xCqwwIesU7AlnMXWDA-vrrzSxX2vAzdv4AKJ2-xL7aAJv5mNhEAYdk-Msi3tCs~A9QCnBTz-fqcj~7jZxYwfg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt="slideimage"
                  />
                </div>
                <div className="bigImage">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/18db/ff63/f1f0dd3eb19c837df412907407129597?Expires=1696809600&Signature=ANooHhFKuGmnLdK1QtN2USx3MSKtXLQMdAUJ0O9TN6qmyQ3qPK~gJCJOMGmKvxH4wx5x9DxEMkxTmslomxLJyABJezkLSzXOOKEhHwx-yhW0a6tEZ5R8MkRl3gw1jFJ0z5xqHwcO8CB5NDXsRhCfEL8aEsvO0WwK3lkrRiKZP8Yz-RtDdnMoUtfFOdDrTbGm6OAPDCZSvXG0TMH5K218xe5IHyJ9~9MiYtlhOj3nr6-rBU-lhu~EwiHIbA2YrZj3~xCqwwIesU7AlnMXWDA-vrrzSxX2vAzdv4AKJ2-xL7aAJv5mNhEAYdk-Msi3tCs~A9QCnBTz-fqcj~7jZxYwfg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt="slideimage"
                  />
                </div> 
              </Slider>
              <Slider
                arrows={false}
                asNavFor={nav1}
                ref={slider2}
                slidesToShow={3}
                swipeToSlide={true}
                infinite={true}
              >
                <div className="smallImage">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/18db/ff63/f1f0dd3eb19c837df412907407129597?Expires=1696809600&Signature=ANooHhFKuGmnLdK1QtN2USx3MSKtXLQMdAUJ0O9TN6qmyQ3qPK~gJCJOMGmKvxH4wx5x9DxEMkxTmslomxLJyABJezkLSzXOOKEhHwx-yhW0a6tEZ5R8MkRl3gw1jFJ0z5xqHwcO8CB5NDXsRhCfEL8aEsvO0WwK3lkrRiKZP8Yz-RtDdnMoUtfFOdDrTbGm6OAPDCZSvXG0TMH5K218xe5IHyJ9~9MiYtlhOj3nr6-rBU-lhu~EwiHIbA2YrZj3~xCqwwIesU7AlnMXWDA-vrrzSxX2vAzdv4AKJ2-xL7aAJv5mNhEAYdk-Msi3tCs~A9QCnBTz-fqcj~7jZxYwfg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt="slideimage"
                  />
                </div>
                <div className="smallImage">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/18db/ff63/f1f0dd3eb19c837df412907407129597?Expires=1696809600&Signature=ANooHhFKuGmnLdK1QtN2USx3MSKtXLQMdAUJ0O9TN6qmyQ3qPK~gJCJOMGmKvxH4wx5x9DxEMkxTmslomxLJyABJezkLSzXOOKEhHwx-yhW0a6tEZ5R8MkRl3gw1jFJ0z5xqHwcO8CB5NDXsRhCfEL8aEsvO0WwK3lkrRiKZP8Yz-RtDdnMoUtfFOdDrTbGm6OAPDCZSvXG0TMH5K218xe5IHyJ9~9MiYtlhOj3nr6-rBU-lhu~EwiHIbA2YrZj3~xCqwwIesU7AlnMXWDA-vrrzSxX2vAzdv4AKJ2-xL7aAJv5mNhEAYdk-Msi3tCs~A9QCnBTz-fqcj~7jZxYwfg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt="slideimage"
                  />
                </div>
                <div className="smallImage">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/18db/ff63/f1f0dd3eb19c837df412907407129597?Expires=1696809600&Signature=ANooHhFKuGmnLdK1QtN2USx3MSKtXLQMdAUJ0O9TN6qmyQ3qPK~gJCJOMGmKvxH4wx5x9DxEMkxTmslomxLJyABJezkLSzXOOKEhHwx-yhW0a6tEZ5R8MkRl3gw1jFJ0z5xqHwcO8CB5NDXsRhCfEL8aEsvO0WwK3lkrRiKZP8Yz-RtDdnMoUtfFOdDrTbGm6OAPDCZSvXG0TMH5K218xe5IHyJ9~9MiYtlhOj3nr6-rBU-lhu~EwiHIbA2YrZj3~xCqwwIesU7AlnMXWDA-vrrzSxX2vAzdv4AKJ2-xL7aAJv5mNhEAYdk-Msi3tCs~A9QCnBTz-fqcj~7jZxYwfg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt="slideimage"
                  />
                </div>
                <div className="smallImage">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/18db/ff63/f1f0dd3eb19c837df412907407129597?Expires=1696809600&Signature=ANooHhFKuGmnLdK1QtN2USx3MSKtXLQMdAUJ0O9TN6qmyQ3qPK~gJCJOMGmKvxH4wx5x9DxEMkxTmslomxLJyABJezkLSzXOOKEhHwx-yhW0a6tEZ5R8MkRl3gw1jFJ0z5xqHwcO8CB5NDXsRhCfEL8aEsvO0WwK3lkrRiKZP8Yz-RtDdnMoUtfFOdDrTbGm6OAPDCZSvXG0TMH5K218xe5IHyJ9~9MiYtlhOj3nr6-rBU-lhu~EwiHIbA2YrZj3~xCqwwIesU7AlnMXWDA-vrrzSxX2vAzdv4AKJ2-xL7aAJv5mNhEAYdk-Msi3tCs~A9QCnBTz-fqcj~7jZxYwfg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt="slideimage"
                  />
                </div>
              </Slider>
            </div>
          </div>
          <div className="product-detail__content__right">scdcdvfbvdbgbngbnhgn </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

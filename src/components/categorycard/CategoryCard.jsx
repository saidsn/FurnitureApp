import React from "react";
import "./CategoryCard.scss";

const CategoryCard = ({title,img}) => {
  return (
    <div className="category__slider--item">
      <img
        src="https://s3-alpha-sig.figma.com/img/fc4f/78b4/52608fae9d209c21479bbc2e3acdb8da?Expires=1693785600&Signature=mqq~SEVId0cnkYlGb44x3HyGwwj-CsIK-eEACpFGu542ifNR0p1i2bwVZd5C-c1FDWq8AH2nfL0tWlL0a2kLieXH7MN00lGWKkzxYVrHuDuDtvVTFFjJIvI6nd5cjs0fOe1ufOjNBFHU9iTJlgdOIVyTaZhv61yhkc-lWqDaa0nUwvwbEuyUgRPWWlF40~6oxOFdCyRxJNzPD5CGMltHWF5hlQdaaXL08qpDrJBMoyJyP-D4RtOt8YEc3Udm5cWR~bNltA7ESORd50vscgwiXzTRbMSCFYav4C87boyvuhcVDq5YhmuEPSO-bA1J9GTlUeOocI4kGg4i78lFdETh~w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        alt=""
      />
      <p className="category__name">CUSHIONS</p>
    </div>
  );
};

export default CategoryCard;

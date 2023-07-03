import { HeroImage, Vector1, Vector2, Vector3 } from "../assets";
import "./index.css";

function HeroRight() {
  return (
    <div className="mr-[84px] max-sm:mx-4 ">
      <div
        id="rounded"
        className="shrink-0 p-[12px] max-sm:w-[340px] max-sm:h-[296px] max-sm:p-0 max-sm:rounded-[150px,150px,150px,240px]  "
      >
        {/* Vector line \/ */}
        <img
          id="vector1"
          src={Vector1}
          alt="Vector 1 "
          className="max-sm:hidden"
        />
        <img
          id="vector2"
          src={Vector2}
          alt="Vector 2 "
          className="max-sm:hidden "
        />
        <img
          id="vector3"
          src={Vector3}
          alt="Vector 3 "
          className="max-sm:hidden"
        />
        {/* Vector line /\ */}
        <img
          className="mr-2 max-sm:mr-0 relative max-sm:w-[360px] max-sm:p-0 max-sm:static"
          src={HeroImage}
          alt="vfsafv"
        />
      </div>
    </div>
  );
}

export default HeroRight;

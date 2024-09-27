import Button from "../Button";
import Icon from "../Icon";
import Wrapper from "../Wrapper";

const Filters = () => {

  const Circle = ({ className }) => {
    return <div className={`block h-[100px] w-[100px] rounded-[50px] flex items-center justify-center ${className}`}>Hover me</div>
  }

  const ImgSrc = "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=320&amp;q=80"

  const Mountain = ({ className }) => {
    return <div className={className}>
    <img className="w-24 h-24 object-cover" src={ImgSrc} />
  </div>
  }

  return (
    <>
      <section>
        <h2 className="text-xl font-bold">
          Filters (Transitions Property)
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 justify-between align-center mt-8">
          <Wrapper>
            <p>
              transition-[filter](blur) <br />
            </p>
            <Mountain className="transition-[filter] blur-0 hover:blur-md" />
          </Wrapper>
          <Wrapper>
            <p>
              transition-[filter](brightness) <br />
            </p>
            <Mountain className="transition-[filter] brightness-100 hover:brightness-200" />
          </Wrapper>
          <Wrapper>
            <p>
              transition-[filter](contrast) <br />
            </p>
            <Mountain className="transition-[filter] contrast-100 hover:contrast-50" />
          </Wrapper>
          <Wrapper>
            <p>
              transition-[filter](drop-shadow) <br />
            </p>
            <Mountain className="transition-[filter] drop-shadow-sm hover:drop-shadow-2xl" />
          </Wrapper>
          <Wrapper>
            <p>
            transition-[filter](grayscale) <br />
            </p>
            <Mountain className="duration-[750ms] transition-all grayscale-0 hover:grayscale" />
          </Wrapper>
          <Wrapper>
            <p>
            transition-[filter](hue-rotate) <br />
            </p>
            <Mountain className="duration-[500ms] transition-all hue-rotate-0 hover:hue-rotate-90" />
          </Wrapper>
          <Wrapper>
            <p>
            transition-[filter](invert) <br />
            </p>
            <Mountain className="duration-[500ms] transition-all invert-0 hover:invert" />
          </Wrapper>
          <Wrapper>
            <p>
            transition-[filter](saturate) <br />
            </p>
            <Mountain className="duration-[500ms] transition-all saturate-100 hover:saturate-[4]" />
          </Wrapper>
          <Wrapper>
            <p>
            transition-[filter](sepia) <br />
            </p>
            <Mountain className="duration-[500ms] transition-all sepia-0 hover:sepia" />
          </Wrapper>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold">
          Backdrop-filters (Transitions Property)
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 justify-between align-center mt-8">
          <Wrapper>
            <p>
            transition-[backdrop-filter](blur) <br />
            </p>
            <div className="relative">

              <Mountain />
              <div className="transition-all absolute top-[50%] translate-y-[-50%] translate-x-[-50%] left-[50%] bg-white/30 w-16 h-16 backdrop-blur-0 hover:backdrop-blur-sm">Hover me</div>
            </div>

          </Wrapper>
          <Wrapper>
            <p>
            transition-[backdrop-filter](hue-rotate) <br />
            </p>
            <div className="relative">
              <Mountain />
              <div className="duration-[750ms] transition-all absolute top-[50%] translate-y-[-50%] translate-x-[-50%] left-[50%] bg-white/30 w-16 h-16  hover:backdrop-hue-rotate-90">Hover me</div>
            </div>

          </Wrapper>
        </div>
        <span className="text-[12px]">
          *<b>backdrop-filters</b> also has all the same effect types as filters: <i>blur, brightness, contrast, drop-shadow, grayscale, hue-rotate, invert, saturate, sepia</i>
        </span>
      </section>
      <section>
        <h2 className="text-xl font-bold">
          Mix Blend Mode (Transitions Property)
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 justify-between align-center mt-8">
        <Wrapper>
            <p>
            ❌ transition-[mix-blend-mode] <br />
            </p>
            <div className="flex justify-center -space-x-14 ">
              <Circle className="transition-all bg-teal-400 hover:mix-blend-multiply" />
              <Circle className="transition-all bg-orange-400 hover:mix-blend-multiply" />
            </div>
          </Wrapper>
        </div>
      </section>
    </>
  );
};

export default Filters;

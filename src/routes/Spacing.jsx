import Button from "../Button"
import Wrapper from "../Wrapper"


const Spacing = () => {
  return (
    <section>
    <h2 className="text-xl font-bold">Spacings Transitions Properties</h2>
    <p>width, height, margin, padding, max-width, max-height</p>

    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 justify-between align-center mt-8">
      <Wrapper>
        <p> transition-[width]</p>
        <Button
          className={"duration-500 transition-[width] w-full hover:w-[40%]"}
        />
      </Wrapper>
      <Wrapper>
        <p> transition-[height]</p>
        <Button
          className={"duration-500 transition-[height] h-[40px] hover:h-[100px]"}
        />
      </Wrapper>
      </div>
      <span className="text-[12px]">
          *In order for <b>width</b> or <b>height</b> to work, the starting
          value must be a numeric value. <br />
          For example, <b>w-auto, w-fit, w-min, w-max</b> does not work with
          transitions.
        </span>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 justify-between align-center mt-8">
        <Wrapper>
          <p>transition-[max-width]</p>
          <Button
            className={
              "duration-500 transition-[max-width] w-[100%] max-w-[50%] hover:max-w-[80%]"
            }
          />
        </Wrapper>
        <Wrapper>
          <p>transition-[max-height]</p>
          <Button
            className={
              "duration-500 transition-[max-height] h-[100px] max-h-[100%] hover:max-h-[50%]"
            }
          />
        </Wrapper>
      </div>
      <span className="text-[12px]">
          *Similar to <b>width</b>, the starting value must be a numeric
          value for <b>max-width</b> and <b>max-height</b>.
      </span>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 justify-between align-center mt-8">
      <Wrapper>
        <p> transition-[padding]</p>
        <Button
          className={"duration-500 transition-[padding] hover:p-6"}
        />
      </Wrapper>
      <Wrapper>
        <p> transition-[padding-left]</p>
        <Button
          className={"duration-500 transition-[padding-left] hover:px-12 hover:py-6"}
        />
      </Wrapper>
    
      <Wrapper>
        <p>transition-[margin]</p>
        <Button
          className={"duration-500 transition-[margin] ease hover:my-[20px]"}
        />
      </Wrapper>
      <Wrapper>
        <p>transition-[margin-top]</p>
        <Button
          className={"transition-[margin-top] ease-in hover:mt-[-20px]"}
        />
      </Wrapper>
    </div>
  </section> 
  )
}

export default Spacing
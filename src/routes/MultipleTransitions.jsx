import Button from "../Button";
import Wrapper from "../Wrapper";

const MultipleTransitions = () => {
  return (
    <section>
      <h2 className="text-xl font-bold">Multiple Transitions</h2>

      <br></br>
      <p className="mb-8">How to combine 2 or more transitions in 1 element.</p>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 justify-between align-center mt-8">
        <Wrapper>
          <p>x2 transitions</p>
          <p>trasition-[width_font-size]</p>
          <Button
            className={
              "transition-[width_font-size] w-[40%] hover:w-full hover:text-[30px]"
            }
          />
        </Wrapper>
        <Wrapper>
          <p>x3 transitions</p>
          <p>trasition-[transform_width_font-size]</p>
          <Button
            className={
              "transition-[transform_border-width_font-size] hover:rotate-180 hover:border-8 hover:text-[40px]"
            }
          />
        </Wrapper>
        <Wrapper>
          <p>trasition-[opacity_width] + different duration</p>
          <Button
            className={
              "w-[40%] transition-[opacity_width] [transition:opacity_4s,width_1s] hover:opacity-0 hover:w-full"
            }
          />
        </Wrapper>
        <Wrapper>
          <p>trasition-[border-radius_border-color] + diffeerent timing function + duration</p>
<Button
  className={
    "transition-[border-radius_border-color] [transition:border-radius_2s_linear,border-color_0.5s_ease-in] hover:border-sky-800 hover:rounded-3xl"
  }
/>
        </Wrapper>
        <Wrapper>
          <p>x3 transitions + delay</p>
          <p>trasition-[transform_width_font-size]</p>
<Button
  className={
    "transition-[color_border-width_font-size] [transition:color_1s,border-width_1s_1s,font-size_1s_2s] hover:text-sky-500 hover:border-[10px] hover:text-[40px]"
  }
/>
        </Wrapper>
      </div>
    </section>
  );
};

export default MultipleTransitions;

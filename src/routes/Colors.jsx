import Button from "../Button";
import Icon from "../Icon";
import Wrapper from "../Wrapper";

const ColorsSection = () => {
  return (
    <section>
      <h2 className="text-xl font-bold">Colors (Transitions Property)</h2>
      <p className="mb-8">
        color(text), background-color, border-color, text-decoration-color,
        fill, stroke;
      </p>
      <Wrapper>
        <p>transition-colors (applies all colors above)</p>
        <Button
          className={
            "duration-1000 transition-colors underline hover:bg-sky-700 hover:text-sky-400 hover:border-text-sky-500"
          }
        >
          <Icon className="size-6" />
        </Button>
        <span className="text-[12px]">
          *After some experiment, found out that when you apply
          <b> transition-colors</b> and <b> hover:text-sky-400 </b> it will
          apply transition effect to <b>text color, text-decoration-color</b>{" "}
          and <b>stroke</b>
        </span>
      </Wrapper>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 justify-between align-center mt-8">
        <Wrapper>
          <p>transition-[background-color]</p>
          <Button
            className={
              "duration-500 transition-[background-color] hover:bg-sky-700"
            }
          />
        </Wrapper>
        <Wrapper>
          <p>transition-[color]</p>
          <Button
            className={"duration-500 transition-[color] hover:text-sky-500"}
          />
        </Wrapper>
        <Wrapper>
          <p>transition-[border-color]</p>
          <Button
            className={
              "duration-500 transition-[border-color] hover:border-sky-400"
            }
          />
        </Wrapper>
        <Wrapper>
          <p>transition-[text-decoration]</p>
          <Button
            className={
              "duration-500 transition-[text-decoration-color] underline hover:decoration-sky-400"
            }
          />
        </Wrapper>
        <Wrapper>
          <p>transition-[fill]</p>
          <Icon
            className={
              "duration-500 transition-[fill] fill-transparent hover:fill-sky-500"
            }
          />
        </Wrapper>
        <Wrapper>
          <p>transition-[stroke]</p>
          <Icon
            className={"duration-500 transition-[stroke] hover:stroke-sky-500"}
          />
        </Wrapper>
      </div>
    </section>
  );
};

export default ColorsSection;

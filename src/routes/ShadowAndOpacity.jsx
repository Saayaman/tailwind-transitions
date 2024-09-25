import Button from "../Button";
import Icon from "../Icon";
import Wrapper from "../Wrapper";

const ShadowAndOpacity = () => {
  return (
    <section>
      <h2 className="text-xl font-bold">
        Opacity and Shadow (Transitions Property)
      </h2>
      <p className="mb-8">opacity, box-shadow</p>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 justify-between align-center mt-8">
        <Wrapper>
          <p>
            transition-opacity <br />
          </p>
          <Button
            className={"duration-500 transition-opacity hover:opacity-20"}
          />
        </Wrapper>
        <Wrapper>
          <p>
            transition-shadow <br />
          </p>
          <Button
            className={
              "duration-500 transition-shadow shadow-md shadow-[green] hover:shadow-xl hover:shadow-sky-500"
            }
          />
        </Wrapper>
      </div>
      <span className="text-[12px]">
            *<b>transition-shadow</b> also takes care of the color of shadow.
          </span>
    </section>
  );
};

export default ShadowAndOpacity;

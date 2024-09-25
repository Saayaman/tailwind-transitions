import Button from "../Button";
import Wrapper from "../Wrapper";

const TransformSection = () => {
  return (
    <section>
      <h2 className="text-xl font-bold">
        Tailwind Transitions Property: Transform
      </h2>
      <p className="mb-8">Scale, Rotate, Translate, Skew, Transform Origin</p>
      <p className="mb-8">
        There are no arbitrary classNames for each transform type
        <ul className="list-disc list-inside">
          <li>
            Values such as <b>transform-[scale]</b> or <b>transform-[skew] </b>
            does not exist/work
          </li>
          <li>
            Values such as <b>transform-scale</b> or <b>transform-skew</b> is
            equivalent to <b>transition-all</b>
          </li>
        </ul>
      </p>

      <Wrapper>
        <p>transition-transform (applied scale, rotate, translate and skew)</p>
        <Button
          className={
            "duration-1000 transition-transform hover:translate-y-[40px] hover:translate-x-[40px] hover:scale-150 hover:rotate-180 hover:skew-y-12"
          }
        />
      </Wrapper>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 justify-between align-center mt-8">
        <Wrapper>
          <p>
            transition-transform (translate) <br />
          </p>
          <Button
            className={"duration-500 transition-transform hover:translate-x-12 hover:text-[20px]"}
          />
        </Wrapper>
        <Wrapper>
          <p>
            transition-transform (rotate) <br />
          </p>
          <Button
            className={"duration-500 transition-transform hover:rotate-180"}
          />
        </Wrapper>
        <Wrapper>
          <p>
            transition-transform (scale) <br />
          </p>
          <Button
            className={"duration-500 transition-transform hover:scale-150"}
          />
        </Wrapper>
        <Wrapper>
          <p>
            transition-transform (skew) <br />
          </p>
          <Button
            className={"duration-500 transition-transform hover:skew-y-[40deg]"}
          />
        </Wrapper>
      </div>
    </section>
  );
};

export default TransformSection;

import Button from "../Button";
import Wrapper from "../Wrapper";

const BordersAndOutline = () => {
  return (
    <>
      <section>
        <h2 className="text-xl font-bold">borders (transition properties)</h2>
        <p>width, height, margin, padding, max-width, max-height</p><br />

        <Wrapper>
            <p> transition-[border]</p>
            <Button
              className={
                "duration-500 transition-[border] bg-teal-400 hover:[border:5px_dotted_black] hover:rounded-3xl"
              }
            />
            <span className="text-[12px]">
              *<b>You can see that transition-[border]</b> works for{" "}
              <b>border-color, border-width and border-styled</b>, but it
              doesn't work for <b>border-radius</b>.
            </span>
          </Wrapper>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 justify-between align-center mt-8">

        <Wrapper>
            <p>❌ transition-[border-style]</p>
            <Button
              className={
                "duration-500 transition-[border-style] border-teal-400 border-solid border-4 hover:border-dotted"
              }
            />
          </Wrapper>
          <Wrapper>
            <p> transition-[border-width]</p>
            <Button
              className={
                "duration-500 transition-[border-width] border-teal-400 border-2 hover:border-8"
              }
            />
          </Wrapper>
          <Wrapper>
            <p> transition-[border-radius]</p>
            <Button
              className={
                "duration-500 transition-[border-radius] bg-teal-400 hover:rounded-3xl"
              }
            />
          </Wrapper>

        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 justify-between align-center mt-8">

          <Wrapper>
              <p>❌ transition-[outline-style]</p>
              <Button
                className={
                  "duration-500 transition-[outline-style] [border:2px_solid_black] outline-teal-400 outline-dashed outline-4  hover:outline-dotted"
                }
              />
            </Wrapper>
            <Wrapper>
              <p> transition-[outline-width]</p>
              <Button
                className={
                  "duration-500 transition-[outline-width] [border:2px_solid_black] outline-teal-400 outline-dotted outline-2 hover:outline-8"
                }
              />
            </Wrapper>
            <Wrapper>
              <p> transition-[outline-offset]</p>
              <Button
                className={
                  "duration-500 transition-[outline-offset] [border:2px_solid_black] outline-offset-0 outline-teal-400 outline-double outline-2 hover:outline-offset-8"
                }
              />
            </Wrapper>
            <Wrapper>
              <p> transition-[outline-color]</p>
              <Button
                className={
                  "duration-500 transition-[outline-color] [border:2px_solid_black] outline-teal-400 outline-double outline-8 hover:outline-teal-950"
                }
              />
            </Wrapper>

          </div>
      </section>
    </>
  );
};

export default BordersAndOutline;

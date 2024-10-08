import Button from "../Button";
import Icon from "../Icon";
import Wrapper from "../Wrapper";

const Typography = () => {
  return (
    <>
      <section>
        <h2 className="text-xl font-bold">Typography (Transitions Property)</h2>
        <p className="mb-8">
          font-family, font-weight, font-size, font-style, line-height
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 justify-between align-center mt-8">
          <Wrapper>
            <p>transition-[font-size]</p>
            <Button
              className={
                "duration-500 transition-[font-size] hover:text-[30px]"
              }
            />
          </Wrapper>
          <Wrapper>
            <p>transition-[font-weight]</p>
            <Button
              className={
                "duration-500 transition-[font-weight] hover:font-black"
              }
            />
          </Wrapper>
          <Wrapper>
            <p>transition-[letter-spacing]</p>
            <Button
              className={
                "duration-500 transition-[letter-spacing] hover:tracking-[12px]"
              }
            />
          </Wrapper>
          <Wrapper>
            <p>❌ transition-[font-family]</p>
            <Button
              className={
                "duration-500 transition-[font-family] font-sans hover:font-serif"
              }
            />
          </Wrapper>
          <Wrapper>
            <p>❌ transition-[line-height]</p>
            <Button
              className={
                "duration-500 transition-[line-height] leading-2 hover:leading-10"
              }
            />
          </Wrapper>
          <Wrapper>
            <p>❌ transition-[font-style]</p>
            <Button
              className={
                "duration-500 transition-[font-style] non-italic hover:italic"
              }
            />
            <span className="text-[12px]">*font-styles doesn't transition</span>
          </Wrapper>
          <Wrapper>
            <p>❌ transition-[text-transform](uppercase)</p>
            <Button
              className={
                "duration-500 transition-[text-transform] hover:uppercase"
              }
            />
          </Wrapper>
          <Wrapper>
            <p>❌ transition-[text-align]</p>
            <div
              className={
                "duration-500 transition-[text-align] w-full text-left hover:text-center"
              }
            >
              Hover me
            </div>
          </Wrapper>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold">
          Text Decoration (Transitions Property)
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 justify-between align-center mt-8">
          <Wrapper>
            <p>transition-[text-decoration-color]</p>
            <Button
              className={
                "duration-500 transition-[text-decoration-color] underline decoration-wavy hover:[text-decoration-color:lightSeaGreen]"
              }
            />
          </Wrapper>
          <Wrapper>
            <p>transition-[text-underline-offset]</p>
            <Button
              className={
                "duration-500 transition-[text-underline-offset] underline underline-offset-1 hover:underline-offset-8"
              }
            />
                      <span className="text-[12px]">
              *Only works if we have both default value and animated value <b>underline-offset-*</b>
            </span>
          </Wrapper>
          <Wrapper>
            <p>❌ transition-[text-decoration-line]</p>
            <Button
              className={
                "duration-500 transition-[text-decoration-line] underline hover:line-through"
              }
            />
          </Wrapper>
          <Wrapper>
            <p>❌ transition-[text-decoration-style]</p>
            <Button
              className={
                "duration-500 transition-[text-decoration-style] underline decoration-solid hover:decoration-wavy"
              }
            />
          </Wrapper>
          <Wrapper>
            <p>❌ transition-[text-decoration-thickness]</p>
            <Button
              className={
                "duration-500 transition-[text-decoration-thickness] line-through decoration-solid decoration-2 hover:decoration-8"
              }
            />
          </Wrapper>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold">List Style</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 justify-between align-center mt-8">
          <Wrapper>
            <p>❌ transition-[list-style]</p>
            <ul
              className={
                "duration-500 transition-[list-style] list-disc hover:list-decimal hover:[list-style-type:red]"
              }
            >
              <li>First list</li>
              <li>Second in list</li>
              <li>Third in list</li>
            </ul>
          </Wrapper>
          <Wrapper>
            <p>❌ transition-[list-style-image]</p>
            <ul
              className={
                "duration-500 transition-[list-style-image] list-image-none hover:list-image-[url('check.svg')]"
              }
            >
              <li>First list</li>
              <li>Second in list</li>
              <li>Third in list</li>
            </ul>
          </Wrapper>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold">Other text transitions</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 justify-between align-center mt-8">
          <Wrapper>
            <p>transition-[text-shadow]</p>
            <Button
              className={
                "duration-500 transition-[text-shadow] hover:[text-shadow:lightSeaGreen_1px_6px_2px]"
              }
            />
          </Wrapper>
          <Wrapper>
            <p>transition-[text-emphasis-color]</p>
            <Button
              className={
                "duration-500 transition-[text-emphasis-color] [text-emphasis-style:circle] hover:[text-emphasis-color:lightSeaGreen]"
              }
            />
          </Wrapper>
          <Wrapper>
            <p>❌ transition-[text-emphasis-position]</p>
            <Button
              className={
                "duration-500 transition-[text-emphasis-position] [text-emphasis-style:triangle] [text-emphasis-position:over_right] hover:[text-emphasis-position:under_right]"
              }
            />
          </Wrapper>
          <Wrapper>
            <p>❌ transition-[text-emphasis-style]</p>
            <Button
              className={
                "duration-500 transition-[text-emphasis-style] [text-emphasis-style:triangle] [text-emphasis-position:over_right] hover:[text-emphasis-style:double-circle]"
              }
            />
          </Wrapper>
        </div>
      </section>
    </>
  );
};

export default Typography;

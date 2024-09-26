import Button from "../Button";
import Wrapper from "../Wrapper";

const DisplayAndFlex = () => {
  return (
    <>
        <section>
        <h2 className="text-xl font-bold">Display (transition properties)</h2>
        <p>block, none, grid, flex, table, inline</p>

          <Wrapper>
            <p>❌ transition-[display]</p>
            <Button
              className={
                "duration-500 transition-all bg-sky-400 block hover:hidden"
              }
            />
          </Wrapper>

          <span className="text-[12px]">
              {"*There is no transition for display block <=> none, nor flex <=> block, etc... Best to just use opacity for apperance."}
          </span>
      </section>
      <section>
        <h2 className="text-xl font-bold">
          Display: Flex and Grid (Transitions Property)
        </h2>
        <p className="mb-8">gap, box-shadow</p>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 justify-between align-center mt-8">
          <Wrapper>
            <p>
              transition-[gap](flex)<br />
            </p>
            <div className="transition-[gap] flex gap-2 hover:gap-16">
              <Button />
              <Button />
            </div>
          </Wrapper>
          <Wrapper>
            <p>
              transition-[gap](grid)<br />
            </p>
            <div className="transition-[gap] grid-cols-2 grid gap-2 hover:gap-16">
              <Button />
              <Button />
              <Button />
              <Button />
            </div>
          </Wrapper>
          <Wrapper>
            <p>
             ❌ transition-[flex]<br />
            </p>
            <div class="transition-[flex] w-full flex-auto flex hover:[&>button]:flex-[1_200px]">
              <Button />
              <Button />
            </div>
          </Wrapper>
          <Wrapper>
            <p>
              ❌ transition-[justify-content]<br />
            </p>
            <div class="transition-all w-full flex justify-between hover:justify-around">
              <Button />
              <Button />
            </div>
          </Wrapper>
          <Wrapper>
            <p>
             ❌ transition-[align-items]<br />
            </p>
            <div class="transition-all w-full h-[100px] flex items-start hover:items-end">
              <Button />
              <Button />
            </div>
          </Wrapper>
          <Wrapper>
            <p>
             ❌ transition-[grid-template-columns]<br />
            </p>
            <div class="transition-all grid grid-cols-2 hover:grid-cols-1">
              <Button />
              <Button />
              <Button />
            </div>
          </Wrapper>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold">
          Display: Absolute (Transitions Property)
        </h2>
        <p className="mb-8"></p>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 justify-between align-center mt-8">
          <Wrapper>
            <p>
              transition-[top](absolute)<br />
            </p>
            <div className="relative h-[60px]">
              <Button className="transition-[top] absolute top-0 hover:top-6" />
            </div>
          </Wrapper>
          <Wrapper>
            <p>
              transition-[bottom](absolute)<br />
            </p>
            <div className="relative h-[60px]">
              <Button className="transition-[bottom] absolute bottom-0 hover:bottom-6" />
            </div>
          </Wrapper>
          <Wrapper>
            <p>
              transition-[left](absolute)<br />
            </p>
            <div className="relative h-[60px]">
              <Button className="transition-[left] absolute left-0 hover:left-6" />
            </div>
          </Wrapper>
          <Wrapper>
            <p>
              transition-[right](absolute)<br />
            </p>
            <div className="relative h-[60px]">
              <Button className="transition-[right] absolute right-0 hover:right-6" />
            </div>
          </Wrapper>
        </div>
        <span className="text-[12px]">
            *Transition animation only works when there is a base value. 
          </span>
      </section>
    </>
  );
};

export default DisplayAndFlex;

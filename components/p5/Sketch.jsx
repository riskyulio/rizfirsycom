import dynamic from "next/dynamic";

//ssr import
//will only import 'react-p5' only on 'client-side
const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false,
});

const CircleSketch = (props) => {
  //Notes:
  //p5 will be passed by 'Sketch component' though,
  //when 'Sketch component' is called

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(
      canvasParentRef
    );
  };

  const draw = (p5) => {
    p5.fill(255, 1, 245);
    p5.ellipse(props.mouseX, props.mouseY, 100, 100);
  };

  return (
    <div>
      <Sketch setup={setup} draw={draw} />
    </div>
  );
};

export default CircleSketch;

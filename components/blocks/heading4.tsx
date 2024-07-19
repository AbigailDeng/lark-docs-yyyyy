import { key } from "@/lib/utils";
import { Item, TextStyle, Element } from "./common";

export interface Heading4 extends Item {
  block_type: 6;
  heading4: {
    elements: Array<Element>;
    style: TextStyle;
  };
}

export function Heading4(props: Heading4) {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {props.heading4.elements.map((i) => (
        <Element key={key()} {...i} />
      ))}
    </h4>
  );
}

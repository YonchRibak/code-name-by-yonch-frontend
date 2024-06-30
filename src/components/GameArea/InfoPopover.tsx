import { Info } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { useState } from "react";

type InfoPopoverProps = {
  text: string;
  textAlign: string;
};

function InfoPopover(props: InfoPopoverProps): JSX.Element {
  const [popoverState, setPopoverState] = useState(false);
  return (
    <Popover
      open={popoverState}
      onOpenChange={(isOpen) => setPopoverState(isOpen)}
    >
      <PopoverTrigger
        className={`max-w-min absolute sm:top-[-4px] sm:left-[-4px] sm:scale-50 md:scale-[60%] md:top-[1px] md:left-[1px] lg:scale-[105%] lg:top-1 lg:left-1 top-2 left-2 xl:top-2 xl:left-2 xl:scale-125`}
        onMouseEnter={() => setPopoverState(true)}
        onMouseLeave={() => setPopoverState(false)}
      >
        <Info />
      </PopoverTrigger>
      <PopoverContent
        align={"start"}
        onCloseAutoFocus={(e) => {
          e.preventDefault();
        }}
        className={props.textAlign + ""}
      >
        <div className="lg:text-2xl ">{props.text}</div>
      </PopoverContent>
    </Popover>
  );
}

export default InfoPopover;

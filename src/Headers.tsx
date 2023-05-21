import { Modes } from "./enums";

export function BodyHeader(props: {
  mode: Modes | null;
}) {
  return (
    <div className="bg-c_header p-10 border-b border-solid border-gray-500 sticky top-0 z-10 sm:hidden lg:block">
      <span className="text-4xl font-primary">
        {props.mode == Modes.PREDEFINED ? "Pre-Defined" : "User-Defined"}
      </span>
    </div>
  );
}

export function AboutHeader() {
  return (
    <div className="bg-c_header p-10 border-b border-solid border-gray-500 sticky top-0 z-10 sm:hidden lg:block">
      <span className="text-4xl font-primary">About Us</span>
    </div>
  );
}

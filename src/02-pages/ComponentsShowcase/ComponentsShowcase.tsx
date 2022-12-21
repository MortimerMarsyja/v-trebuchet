import CheckboxComponent from "@components/Checkbox";
import Counter from "@components/Counter";

const ComponentsShowcase = (): JSX.Element => {
  return (
    <div>
      <CheckboxComponent label="Label" onChange={() => {}} />
      <Counter initialCount={0} />
    </div>
  );
};

export default ComponentsShowcase;

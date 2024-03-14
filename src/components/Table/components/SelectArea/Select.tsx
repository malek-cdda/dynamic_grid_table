import { CustomOption, Select, SelectAreaWrapper } from './styleComponent';

// Usage:
const SelectBtn = ({ handleRowShowValue, limits }: any) => {
  return (
    <SelectAreaWrapper>
      <span>Row Per Page</span>
      <Select onChange={(e) => handleRowShowValue(e.target.value)} defaultValue={limits}>
        <CustomOption value={5}>5</CustomOption>
        <CustomOption value={6}>6</CustomOption>
        <CustomOption value={7}>7</CustomOption>
        <CustomOption>{limits}</CustomOption>
        <CustomOption value={9}>9</CustomOption>
        <CustomOption value={10}>10</CustomOption>
      </Select>
    </SelectAreaWrapper>
  );
};

export default SelectBtn;

import { useId, useRef } from "react";
import { memo, PropsWithChildren } from "react";
import DropdownTreeSelect, { TreeData, TreeNode as TreeNodeOrigin } from "react-dropdown-tree-select";

export type TreeNode = TreeNodeOrigin;

interface Props {
  data: TreeData;
  className?: string;
  placeholder?: string;
  inlineSearchPlaceholder?: string;
  noMatches?: string;
  onChange?: (nodes: string[]) => void;
  max?: number;
}

const DropDownTree = ({
  data,
  className = "",
  placeholder = "선택",
  inlineSearchPlaceholder = "검색...",
  noMatches = "검색 결과가 없습니다",
  max = 0,
  onChange,
}: PropsWithChildren<Props>) => {
  const ref = useRef(null);
  const id = useId();

  const handleChange = (currentNode: TreeData, selectedNodes: TreeNode[]) => {
    if (max > 0 && selectedNodes.length > max) {
      setTimeout(() => {
        // @ts-ignore
        ref.current?.onCheckboxChange(currentNode._id, false);
      });
    }
    onChange && onChange(selectedNodes.map(v => v.label));
  };

  return (
    <DropdownTreeSelect
      id={id}
      ref={ref}
      className={`${className}`}
      texts={{ placeholder, inlineSearchPlaceholder, noMatches }}
      data={data}
      onChange={handleChange}
      inlineSearchInput
      keepTreeOnSearch
    ></DropdownTreeSelect>
  );
};

DropDownTree.displayName = "FileInput";

export default memo(DropDownTree);

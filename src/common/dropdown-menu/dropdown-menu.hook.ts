import * as React from 'react';

export const useExpandContainer = (
  node: React.MutableRefObject<any>
): [boolean, React.Dispatch<React.SetStateAction<boolean>>] => {
  const [expand, setExpand] = React.useState(false);

  React.useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (node.current.contains(e.target)) {
        return;
      }

      setExpand(false);
    };

    if (expand) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [node, expand]);

  return [expand, setExpand];
};

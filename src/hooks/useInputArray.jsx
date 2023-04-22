import { useState, useCallback } from "react";

export const useInputArray = () => {
  const [text, setText] = useState("");
  const [array, setArray] = useState([1, 2, 3, 4]);
  const handleChange = useCallback((e) => {
    if (e.target.value.length > 3) {
      alert("3文字以上は入力できません。");
      return;
    }
    setText(e.target.value.trim());
  });

  const handleAdd = useCallback(() => {
    return setArray((prevArray) => {
      if (prevArray.includes(text)) {
        alert("同じ要素が既に存在します。");
        return prevArray;
      }
      return [...prevArray, text];
    });
  }, [text]);

  return { text, array, handleChange, handleAdd };
};

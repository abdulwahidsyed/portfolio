import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "../Button/Button";
import {
  StyledBulletPointsCtn,
  StyledInput,
  StyledRow,
  StyledTextarea,
} from "../Styled";

export const BulletPointInput = ({ onChange, value, type, ...props }) => {
  const [isErrorIndex, setIsErrorIndex] = useState(null);
  const textAreaRef = useRef();

  useEffect(() => {
    setIsErrorIndex(null);
  }, [value]);

  const valueArray = useMemo(() => {
    if (!value || !value.length) {
      return [""];
    }
    return value;
  }, [value]);

  const propsObj = useMemo(() => {
    return { ...props, value: valueArray };
  }, [props, value]);

  const generateEvent = (dat) => ({
    target: {
      name: propsObj.name,
      inputType: "bulletPoints",
      ...dat,
    },
  });

  const onChangeLoc = (e, i) => {
    const obj = { ...propsObj };

    const updatedPoints = obj.value.map((el, iLoc) => {
      if (i === iLoc) return e.target.value;
      return el;
    });
    obj.value = updatedPoints;

    const newEvent = generateEvent({ value: updatedPoints });
    onChange(newEvent, type, obj);
  };

  const onAddRow = (point, i) => {
    if (!point) {
      setIsErrorIndex(i);
      return;
    }
    const newEvent = generateEvent({ value: [...valueArray, ""] });
    onChange(newEvent, type);
  };

  const onDeleteRow = (i) => {
    const k = [...valueArray];
    k.splice(i, 1);
    const newEvent = generateEvent({ value: k });
    onChange(newEvent, type);
  };

  const adjustHeight = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto"; // Reset the height
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`; // Adjust to content
    }
  };

  useEffect(() => {
    adjustHeight();
  }, []);

  return (
    <StyledBulletPointsCtn>
      {valueArray.map((point, i) => (
        <StyledRow>
          <StyledTextarea
            ref={textAreaRef}
            onInput={adjustHeight}
            value={point}
            onChange={(e) => onChangeLoc(e, i)}
            type="text"
            $isError={isErrorIndex === i}
            {...props}
            rows="1"
          />
          {i === valueArray.length - 1 ? (
            <Button onClick={() => onAddRow(point, i)}>Add</Button>
          ) : (
            <Button variant="red" onClick={() => onDeleteRow(i)}>
              Remove
            </Button>
          )}
        </StyledRow>
      ))}
    </StyledBulletPointsCtn>
  );
};

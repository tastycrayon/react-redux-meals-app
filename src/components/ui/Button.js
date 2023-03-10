import React, { useState } from "react";
import "./Button.css";

export function BtnPrimary({
  className = "",
  children,
  type = "button",
  onClick = () => {},
  onSubmit = () => {},
}) {
  return (
    <button
      onClick={onClick}
      onSubmit={onSubmit}
      type={type}
      className={className + " btn btn-primary"}
    >
      {children}
    </button>
  );
}
export function BtnSecondary({
  className = "",
  children,
  type = "button",
  onClick = () => {},
  onSubmit = () => {},
}) {
  return (
    <button
      onClick={onClick}
      onSubmit={onSubmit}
      type={type}
      className={className + " btn btn-secondary"}
    >
      {children}
    </button>
  );
}
export function BtnOutline({
  className = "",
  children,
  type = "button",
  onClick = () => {},
  onSubmit = () => {},
}) {
  return (
    <button
      onClick={onClick}
      onSubmit={onSubmit}
      type={type}
      className={className + " btn btn-primary-outline"}
    >
      {children}
    </button>
  );
}
export function BtnIcon({
  className = "",
  children,
  type = "button",
  onClick = () => {},
  onSubmit = () => {},
}) {
  const [clicked, setClicked] = useState(false);
  const onClickHandler = () => {
    onClick();
    setClicked(true);
    const timeout = setTimeout(() => setClicked(false), 300);
  };
  return (
    <button
      onClick={onClickHandler}
      onSubmit={onSubmit}
      type={type}
      className={className + " btn btn-icon" + (clicked ? " clicked" : "")}
    >
      {children}
    </button>
  );
}

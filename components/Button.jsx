import { forwardRef } from "react";
import classNames from "classnames";

import * as style from "./Button.module.scss";

/**
 * Button, the base interactive component.
 *
 * @param {Object} props
 * @param {boolean} [props.boolean=false] Whether the Button is disabled.
 * @param {string} [props.size="small"] The size of the Button: "small",
 * "large".
 * @param {string} [props.type="button"] The type of the Button: "submit",
 * "reset", or "button".
 * @param {string} [props.variant="secondary"] The variant of the Button:
 * "primary" or "secondary".
 * @returns {React.Element} The Button element.
 */
export const Button = forwardRef((props, ref) => {
  const { className, size = "small", variant = "secondary", ...rest } = props;

  return (
    <button
      className={classNames(
        style.button,
        size === "large" ? style.large : style.small,
        variant === "primary" ? style.primary : style.secondary,
        className
      )}
      ref={ref}
      type="button"
      {...rest}
    />
  );
});

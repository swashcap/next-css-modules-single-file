import classNames from "classnames";

import * as style from "./ButtonGroup.module.scss";

/**
 * Button Group, a spacing utility for Buttons.
 *
 * @param {Object} props
 * @param {React.ReactNode} [props.children] The content for the Button Group.
 * @returns {React.Element} The Button Group element.
 */
export const ButtonGroup = (props) => {
  const { className, ...rest } = props;

  return <div className={classNames(style.buttonGroup, className)} {...rest} />;
};

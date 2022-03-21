import React, { useCallback, useMemo } from 'react'
import c from 'classnames'
import s from './button.module.scss'
import Typography from '../typography'
import { ButtonSize, ButtonType, ButtonVariant } from './button.types'
import { AiOutlineLoading } from 'react-icons/all'

interface Properties {
  className?: string;
  loading?: boolean;
  icon?: React.ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
  type?: ButtonType;
  disabled?: boolean;
  transparent?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  label?: string;
}

const Button: React.FC<Properties> = ({
  className,
  label,
  icon,
  size = ButtonSize.Medium,
  variant = ButtonVariant.Primary,
  type = ButtonType.Button,
  loading,
  transparent,
  disabled,
  onClick
}) => {
  const labelSize = useMemo(() => {
    switch (size) {
      case ButtonSize.Medium:
        return 'm'
      case ButtonSize.Large:
        return 'l'
      default:
        return 'm'
    }
  }, [size])

  const buttonContents = useMemo(() => icon && loading ? (
      <AiOutlineLoading className={s.icon}/>
    ) : (
      <>
        {icon ? <>{icon}</> : (
          label && (
            <Typography className={s.label} size={labelSize}>
              {label}
            </Typography>
          )
        )}
        {loading && <AiOutlineLoading className={s.icon}/>}
      </>
    ), [icon, label, labelSize, loading]
  );

  const clickCallback = useCallback((event) => {
    onClick?.(event)
  }, [])

  return (
    <button
      className={c(s.root, {
        [s.disabled]: disabled || loading
      }, [
        [s[size]],
        [s[variant]],
      ], {
        [s.loading]: loading,
        [s.withIcon]: icon,
        [s.transparent]: transparent
      }, className)}
      type={type}
      onClick={clickCallback}
      onDoubleClick={(event) => event.preventDefault()}
    >
      {buttonContents}
    </button>
  )
}

export default Button

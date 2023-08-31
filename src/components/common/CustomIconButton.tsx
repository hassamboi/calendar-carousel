import { Button, theme } from 'antd'
import React from 'react'

type CustomIconButtonProps = {
  icon: React.ReactNode
  disabled?: boolean
  onClick: () => void
}

const { useToken } = theme

function CustomIconButton({ icon, disabled, onClick }: CustomIconButtonProps) {
  const { token } = useToken()

  const buttonStyles: React.CSSProperties = {
    borderRadius: token.borderRadiusSM,
    color: token.colorPrimary,
    borderColor: token.colorPrimary,
  }

  return (
    <Button
      data-testid="btn"
      onClick={onClick}
      disabled={disabled}
      size="large"
      style={buttonStyles}
      icon={React.cloneElement(icon as React.ReactElement, {
        style: {
          fontSize: token.fontSizeIcon,
        },
      })}
    />
  )
}

export default CustomIconButton

import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
import CustomIconButton from './common/CustomIconButton'
import { Space, theme } from 'antd'

const { useToken } = theme

type DurationSetterProps = {
  value: string
  onClickDecrease: () => void
  onClickIncrease: () => void
}

function DurationSetter({ value, onClickDecrease, onClickIncrease }: DurationSetterProps) {
  const { token } = useToken()

  return (
    <Space>
      <CustomIconButton icon={<MinusOutlined />} onClick={onClickDecrease} />
      <span style={{ marginRight: token.margin, marginLeft: token.margin }}>{value}</span>
      <CustomIconButton icon={<PlusOutlined />} onClick={onClickIncrease} />
    </Space>
  )
}

export default DurationSetter

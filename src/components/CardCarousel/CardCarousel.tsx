import { Carousel, Col, Row, theme } from 'antd'
import { useRef } from 'react'
import DateCard from './DateCard'
import { Dayjs } from 'dayjs'
import { useCardsPerSlide } from '../../hooks'
import { CarouselRef } from 'antd/es/carousel'
import { IDate } from '../../shared/types'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import CustomIconButton from '../common/CustomIconButton'

const { useToken } = theme

type CardCarouselProps = {
  dates: Array<IDate>
  onClick: (newDate: Dayjs) => void
}

function CardCarousel({ dates, onClick }: CardCarouselProps) {
  const { token } = useToken()
  const cardCount = useCardsPerSlide()
  const carouselRef = useRef<CarouselRef>(null)

  return (
    <Row align={'middle'}>
      <Col lg={1} md={2} sm={3} xs={5}>
        <CustomIconButton
          onClick={() => carouselRef.current?.prev()}
          icon={<LeftOutlined />}
        />
      </Col>
      <Col lg={22} md={20} sm={18} xs={14}>
        <Carousel
          draggable
          slidesPerRow={cardCount}
          dots={false}
          infinite={false}
          ref={carouselRef}
        >
          {dates.map((date) => (
            <Row key={date.date.toString()}>
              <Col
                style={{
                  paddingLeft: token.paddingXS,
                  paddingRight: token.paddingXS,
                }}
              >
                <DateCard date={date.date} closed={date.closed} onClick={onClick} />
              </Col>
            </Row>
          ))}
        </Carousel>
      </Col>
      <Col lg={1} md={2} sm={3} xs={5} style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <CustomIconButton
          onClick={() => carouselRef.current?.next()}
          icon={<RightOutlined />}
        />
      </Col>
    </Row>
  )
}

export default CardCarousel

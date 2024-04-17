import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react"

const Wrapper = styled.div`
    background-color : red;
    height : 70vh;

    display : flex;
    align-items : center;
    padding : 3%;
 
`
const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 55vh;
  padding: 16px;
  background-color: #eee !important;
  border-radius: 10px;
  cursor: grabbing;
  &::-webkit-scrollbar {
    display: none;
  }
  .swiper-slide {
    width: fit-content !important;
    background-color: transparent !important;
  }

`

export default function ContentContainer() {

    return (
        <Wrapper>
            <StyledSwiper slidesPerView={2.16} spaceBetween={16} freeMode={true} lazy={true}>
                {/* {rankList &&
                    rankList.map((rank, index) => {
                        return (
                            <SwiperSlide key={`rank-${index}`}>
                                <OneRankCard rank={rank} index={index} />
                            </SwiperSlide>
                        )
                    })} */}
            </StyledSwiper>
        </Wrapper>
    )
}
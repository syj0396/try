import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components'
import Slide  from '../Slide'
import image from "../../static/imgs/black_img.jpg"
import image0 from "../../static/imgs/home_background0.jpg";
import image1 from "../../static/imgs/home_background1.jpg";
import image2 from "../../static/imgs/home_background2.png";

const slider_data = [
    {
        "id": 1,
        "text": `개발자가 되지 않아도 괜찮습니다.
        취직이든, 이직이든, 사업이든, 사이드 프로젝트든...
        우리는 '요새 뭐해?'라는 질문에 반짝이는 눈으로 대답하는 사회를 꿈꿉니다.`,
        "img": "/src/static/imgs/black_img.jpg",
        "color": "black"
    },
    {
        "id": 2,
        "text": "개발자가 되지 않아도 괜찮. \n 취직이든, 이직이든, 사업이든, 사이드 프로젝트든... \n우리는 '요새 뭐해?'라는 질문에 반짝이는 눈으로 대답하는 사회를 꿈꿉니다.",
        "img": "/src/static/imgs/black_img.jpg",
        "color": "pink"
    },
    {
        "id": 3,
        "text": "개발자가 되지 않아도 괜찮습니다. \n 취직이든, 이직이든, 사업이든, 사이드 프로젝트든... \n우리는 '요새 뭐해?'라는 질문에 반짝이는 눈으로 대답하는 사회를 꿈꿉니다.",
        "img": "/src/static/imgs/black_img.jpg",
        "color": "skyblue"
    }
]

const img = [image0, image1, image2]

const TOTAL_SLIDES = 2;

type SliderProps = {
    size: any
}

export function Slider(props: SliderProps) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentImg, setCurrentImg] = useState(img[0]);
    const slideRef = useRef<any>(null);
    console.log(props.size.width);
    //const imgRef = 

    const nextSlide = () => {
        if (currentSlide >= TOTAL_SLIDES) {
            setCurrentSlide(0);
        } else {
            setCurrentSlide(currentSlide + 1);
        }
        setCurrentImg(currentImg => {
            return img[currentSlide]
        })
    }

    const prevSlide = () => {
        if (currentSlide === 0) {
            setCurrentSlide(TOTAL_SLIDES);
        } else {
            setCurrentSlide(currentSlide - 1);
        }
        setCurrentImg(img[currentSlide])
    }


    useEffect(() => {
        slideRef.current.style.transition = 'all 0.5s ease-in-out';
        slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
    }, [currentSlide]);

    return(
        
        // 새 컴포넌트 없이, slidercontainer 안에 각 슬라이드 넣고, 텍스트는 
        //style={{ backgroundImage: `url(${currentImg})`, backgroundSize: 'cover'}}
        <Container >
            
            <SliderContainer 
                
                ref={slideRef}>
                {
                    slider_data.map(item => (
                        <Slide {...item} width={props.size.width} />
                        //<div style={{ backgroundImage: `url(${currentImg})`, backgroundSize: 'cover'}}>{item.text}</div>
                    ))
                }
            </SliderContainer>
            <Center>
                <Button onClick={prevSlide}>Prev</Button>
                <Button onClick={nextSlide}>Next</Button>
            </Center>
        </Container>
    )
}

// Container의 width와 Slide의 width를 맞춰줘야 함.

const Test = styled.div`
    background-image: url(${image0});
    background-color:blue;
    
`
const Container = styled.div`
//width:1309px;
//width: 1000px;
margin: auto;
//height: 1000px;
overflow: hidden;
`;

const SliderContainer = styled.div`
//height: 600px;
margin: 0 auto;
margin-bottom: 2em;
display: flex;
background-color:red;
`;

const Button = styled.div`
    all:unset;
    padding: 1em 2em;
    margin: 2em 2em;
    color: burlywood;
    cursor:pointer;
    font-weight:bold;
    font-size: 12px;
`

const Center = styled.div`
    text-align:center;
`
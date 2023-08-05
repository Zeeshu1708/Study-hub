import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.png";

const headingOptions = {
    pos: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    textTransform: "uppercase",
    p: '4',
    // size: '2xl'
}

const Home = () => {
    return ( 
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} minH={'100vh'} p={['10','16']} >
        <Heading textTransform={'uppercase'} py={'2'} w={'fit-content'} borderBottom={'2px solid'} m={'auto'}>
            Services
        </Heading>

        <Stack h={'full'} p={['0','4']} alignItems={'center'} direction={['column','row']}>
            <Image src={img5} h={['40','350']} my={['10','0']} filter={'hue-rotate(130deg)'}  />

            <Text letterSpacing={'widest'} lineHeight={'190%'} p={['0','16']} textAlign={'center'}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos placeat vero incidunt reprehenderit ullam alias omnis adipisci dolorem, doloribus labore voluptatibus harum doloremque similique vitae accusamus cupiditate repudiandae. Iusto facilis temporibus itaque debitis veritatis ut commodi obcaecati cupiditate voluptatem expedita nam distinctio maiores, est molestiae vitae explicabo, omnis, eum earum. Culpa saepe odio molestiae quod natus? Quia architecto, rerum repellendus sint voluptatibus ipsam atque, error veniam quidem odit eius beatae harum ratione incidunt molestias molestiae. Ipsa, necessitatibus quia dolorum eius pariatur voluptatibus officiis qui numquam, distinctio cupiditate sunt ut asperiores dolores reprehenderit voluptates vel modi, perspiciatis delectus dolorem rerum mollitia! Sunt, distinctio id magni modi sed eius rerum accusamus hic inventore praesentium quasi recusandae esse, quas dolore adipisci eos placeat!
            </Text>
        </Stack>
      </Container>
    </Box>
    )
};

const MyCarousel = () => {
    return(
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false}>
        <Box w={"full"} h={"100vh"}>
            <Image src={img1} h={'full'} w={'full'} objectFit={'cover'}/>
            <Heading bgColor={'blackAlpha.700'} color={'white'} size={['2xl','3xl']} {...headingOptions}>
                Welcome to StudyHub
            </Heading>
        </Box>
        <Box w={"full"} h={"100vh"}>
            <Image src={img2} h={'full'} w={'full'} objectFit={'cover'}/>
            <Heading bgColor={'whiteAlpha.600'} color={'black'} size={['2xl','3xl']}  {...headingOptions}>
            Discover a new world of learning
            </Heading>
        </Box>
        <Box w={"full"} h={"100vh"}>
            <Image src={img3} h={'full'} w={'full'} objectFit={'cover'} />
            <Heading bgColor={'blackAlpha.800'} color={'white'} size={['2xl','3xl']}  {...headingOptions}>
            Education is the biggest luxury
            </Heading>
        </Box>
        <Box w={"full"} h={"100vh"}>
            <Image src={img4} h={'full'} w={'full'} objectFit={'cover'} />
            <Heading bgColor={'blackAlpha.600'} color={'white'} size={['2xl','3xl']}  {...headingOptions}>
            Read and grow
            </Heading>
        </Box>
    </Carousel>
    )
};

export default Home

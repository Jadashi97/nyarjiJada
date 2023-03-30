import React from 'react';
import { Image, Button, Heading, VStack, Text} from '@chakra-ui/react';
import FullScreenSection from "./FullScreenSection";
import { useMediaQuery } from '@chakra-ui/react';
// import myAvatar from "../assets/myAvatar.jpeg";
import AvatarPic from "../assets/AvatarPic.jpeg";
import {DiJavascript1} from 'react-icons/di';
import MyImage from "../assets/MyImage.jpeg";
import { AspectRatio } from '@chakra-ui/react';

const greeting = "Hi, I am Nyarji Daniel Jada";
const bio1 = "A Proficient FullStack/FrontEnd Developer ";
const bio2 = "Specialized in JavaScript,React, React Native, NodeJs, Express, MongoDB, MySQL, WordPress, Shopify";


const LandingSection = ()=> {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return(
       <FullScreenSection
            justifyContent="center"
            alignItems="center" 
            isDarkBackground
            backgroundColor="#202730"
       >
        <VStack spacing={16}>
            <VStack spacing={4} alignItems="center">
            <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
                mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full'
                backgroundColor="transparent" boxShadow="lg"
                src= {MyImage} boxSize="200px"
            />

                <Heading fontSize="5xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text'>
                    {greeting}
                </Heading>
            </VStack>
            <VStack spacing={4}>
                <Heading as="h5" size="2xl" noOfLines={4}>
                    {bio1}
                </Heading>
                <Text as="h1" size="5xl" noOfLines={2}>
                    {bio2}
                </Text>
            </VStack>
            <Button mt={8} colorScheme="blue" onClick={() =>
                        window.open("https://www.linkedin.com/in/nyarji-d-jada-182bb8177/")
                    }>Hire Me / Let's Link</Button>
        </VStack>
       </FullScreenSection>
    );
};

export default LandingSection;
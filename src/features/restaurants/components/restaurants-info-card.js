import React from "react";
import { View,StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { Avatar, Button, Card } from 'react-native-paper';
import {styled} from 'styled-components';
import { SvgXml } from "react-native-svg";
import star from '../../../../assets/star';
import open from '../../../../assets/open';
const Title = styled.Text`
    color: ${(props)=>props.theme.colors.ui.primary};
    font-family: ${(props)=>props.theme.fonts.body};
    font-size: ${(props)=>props.theme.fontSizes.body};
`;
const Info = styled.View`
    padding:${(props)=>props.theme.space[3]};
    
`;


const Rating =styled.View`
    flex-direction:row;
    padding-bottom:${(props)=>props.theme.space[2]};
    padding-top:${(props)=>props.theme.space[2]};

`;

const Address = styled(Text)`
    font-family: ${(props)=>props.theme.fonts.body};
    font-size: ${(props)=>props.theme.fontSizes.caption};

`;
const RestaurantCard = styled(Card)`
    background-color: ${(props)=>props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
    padding:${(props)=>props.theme.space[4]};
    background-color: ${(props)=>props.theme.colors.bg.primary};
`;

const Section = styled.View`
    flex-direction:row;
    align-items:center;
`;

const SectionEnd = styled.View`
    flex:1;
    flex-direction:row;
    justify-content:flex-end;
`;

const Open = styled(SvgXml)`
    justify-content:flex-end;
`;


export const RestaurantInfoCard = ({restaurants={}}) =>{

    const {
        name= "Some Restaurant",
        icon= "",
        photos=["https://picsum.photos/700"],
        address="Some random St",
        isOpen= true,
        rating= 4.5,
        isTemporariltClosed,
    } = restaurants;

    const ratingArray= Array.from(new Array(Math.ceil(rating)));

    return (
  
        <RestaurantCard elevation={5} >
    <RestaurantCardCover key={name} source={{ uri: photos[0] }}  />
    <Info>
    <Title>{name}</Title>
    <Section>
    <Rating>
        {ratingArray.map(()=>(
            <SvgXml xml={star} width={20} height={20}/>
        ))}
    </Rating>
    <SectionEnd>{isOpen && <SvgXml xml={open} width={20} height={20}/>}</SectionEnd>
    
    </Section>
    <Address>{address}</Address>
    </Info>
  </RestaurantCard>

  
    );
};

// const styles= StyleSheet.create({
//     card: {backgroundColor: "white"},
//     cover:{padding:20,backgroundColor:"white"},
//     title:{padding:16},
// });
    

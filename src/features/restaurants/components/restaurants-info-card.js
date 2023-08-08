import React from "react";
import { View,StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { Avatar, Button, Card } from 'react-native-paper';
import {styled} from 'styled-components';

const Title = styled.Text`
    padding: ${(props)=>props.theme.space[3]};
    color: ${(props)=>props.theme.colors.ui.primary};
    font-family: ${(props)=>props.theme.fonts.body};
`;
const RestaurantCard = styled(Card)`
    background-color: ${(props)=>props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
    padding:${(props)=>props.theme.space[4]};
    background-color: ${(props)=>props.theme.colors.bg.primary};
`;
export const RestaurantInfoCard = ({restaurants={}}) =>{

    const {
        name= "Some Restaurant",
        icon= "",
        photos=["https://picsum.photos/700"],
        address="Some random St",
        isOpen= true,
        rating= 4,
        isTemporariltClosed,
    } = restaurants;
    return (
  
        <RestaurantCard elevation={5} >
    <RestaurantCardCover key={name} source={{ uri: photos[0] }}  />
    <Title>{name}</Title>
  </RestaurantCard>

  
    );
};

// const styles= StyleSheet.create({
//     card: {backgroundColor: "white"},
//     cover:{padding:20,backgroundColor:"white"},
//     title:{padding:16},
// });
    

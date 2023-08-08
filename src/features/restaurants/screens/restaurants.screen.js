import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import {  RestaurantInfoCard } from "../components/restaurants-info-card";
import { StatusBar } from "expo-status-bar";
import { styled } from "styled-components";



const SafeArea = styled(SafeAreaView)`
    flex:1;
    margin-top: ${StatusBar.currentHeight}px;
`;

const SearchContainer = styled.View`
    padding: ${(props)=>props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
    flex:1;
    padding: ${(props)=>props.theme.space[3]};
    background-color: blue
`;
export const RestaurantsScreen=()=>(
    <SafeArea >
    <SearchContainer>    
    <Searchbar />
    </SearchContainer>      
      <RestaurantListContainer >
      <RestaurantInfoCard/>
      </RestaurantListContainer>
    </SafeArea>
);



const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    search:{
    },
    fileList:{
      flex:1,
      backgroundColor: 'blue',
      padding: 16,
  
    }
  });
  
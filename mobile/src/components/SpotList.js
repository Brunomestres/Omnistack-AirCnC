import React,{ useEffect, useState } from 'react';
import { View,Text,StyleSheet } from 'react-native';

import api from '../services/api';

export default function SpotList({ tech })
{
    const [spots, setSpots] = useState([]);
    useEffect(()=>{
        async function loadSpots()
        {
            const response = await api.get('/spots',{
                params: { tech },
            });

            setSpots(response.data);
        }

        loadSpots()
    }, [])
    return (
        <View style={style.container}>
            <Text style={style.title}>Empresas que usam <Text style={style.bold}>{tech}</Text></Text>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        marginTop:30,
    },
    title:{
        fontSize:20,
        color: '#444',
        paddingHorizontal:20,
        marginBottom:15,
    },
    bold:{
        fontWeight: 'bold'
    },
})
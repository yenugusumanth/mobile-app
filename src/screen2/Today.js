import React, {useState} from 'react';
import { View,StyleSheet, Text, Button, Alert, TextInput, Image, FlatList} from 'react-native';


const Today = () =>{
        
    const [Items, setItems]=useState([
        { key:'1', name:"Book1",  description:" GAME OF THRONES"},
        { key:'2', name:"Article2" },
        { key:'3', name:"Article3" },
        { key:'4', name:"Article4" },
        { key:'5', name:"Article5" },
        { key:'6', name:"Article6" },
        { key:'7', name:"Article7" },
        { key:'8', name:"Article8" },
        { key:'9', name:"Article9" },
        { key:'10', name:"Article10"},
        { key:'11', name:"Article11"},
        { key:'12', name:"Article12"},
    ]);
    
    return(
        <View>
           <FlatList 
            //horizontal   
            data={Items}
            renderItem={({item}) => (
                <View>
                    <Image source={{uri:"https://kbimages1-a.akamaihd.net/dd1baacc-184b-4f28-a7d5-6dbe70816fb7/353/569/90/False/a-game-of-thrones.jpg"}}
                    ></Image>
                    <Text style={styles.text}>{item.name}
                    </Text>
                  </View>
                
            )}
            /> 
        </View>
    )
}
export default Today;

const styles = StyleSheet.create({
    container:{
    alignItems: "center",
    flex:1,
    //fontSize:24
    },
    text:{
        flex:1,
        fontSize:24,
        justifyContent:'center',
        textAlign:'center',
        backgroundColor: "#59cbbd",
        //borderWidth: 2,
        borderBottomWidth:1,
        width:400,
        height:100,
        margin:3,
        color:"black",
        fontWeight:"bold",
        flexDirection:'column'

    },
    button:{
        justifyContent:'center',
        alignItems:'center',

    },
})


/*  <FlatList 
            //horizontal   
            data={Items}
           // numColumns={numColumns}
            renderItem={({item}) => (
                <View style={styles.container}>
                    <Text style={styles.text}>{item.name}</Text>
                </View>
            )}
            />
            
            colors
            #59cbbd
            


            const [Items, setItems]=useState([
                { key:'1', name:"Book1",  description:" GAME OF THRONES"},
                { key:'2', name:"Article2" },
                { key:'3', name:"Article3" },
                { key:'4', name:"Article4" },
                { key:'5', name:"Article5" },
                { key:'6', name:"Article6" },
                { key:'7', name:"Article7" },
                { key:'8', name:"Article8" },
                { key:'9', name:"Article9" },
                { key:'10', name:"Article10"},
                { key:'11', name:"Article11"},
                { key:'12', name:"Article12"},
            ]);

            */


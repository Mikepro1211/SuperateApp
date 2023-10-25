import {Text, View, FlatList, StyleSheet, Image} from "react-native";

import { InformacionAliados } from "./InformacionAliados";
import { TouchableOpacity } from "react-native-gesture-handler";
export default function Aliados() {
    const aliados = [
        {
            id:1,
            nombre:"Embajada De Los Estados Unidos",
            descripcion: "La Embajada de Estados Unidos en El Salvador se ha convertido en aliado del Programa, gestionando oportunidades que fortalecen el posicionamiento del Programa y que, en definitiva, representan otras posibilidades de éxito para todos los miembros de la familia ¡Supérate!; entre algunos de sus programas se encuentran: English Access Microscholarship Program y Youth Ambassadors.",
            logo: "https://superate.org.sv/wp-content/uploads/2018/11/embajada.png"

        },
        {
            id:2,
            nombre:"USAID",
            descripcion:"La Agencia de los Estados Unidos para el Desarrollo Internacional (USAID) firmó una alianza público privada con la Fundación Sagrera Palomo y Microsoft El Salvador en 2010 para el fortalecimiento y la expansión de nuevos Centros ¡Supérate! en El Salvador. Además, USAID ha financiado Becas Semilla para que algunos de los graduados cursen estudios técnicos en Estados Unidos.",
            logo:"https://superate.org.sv/wp-content/uploads/2018/11/usaid.png",
        },
        {
            id:3,
            nombre:"Microsoft",
            descripcion:"Microsoft El Salvador ha donado todas las licencias de software, sistema operativo y de productividad desde el inicio del Programa en el 2004. También apoyan con capacitaciones para docentes, computadoras para los graduados con mejores desempeños académicos y con becas DIGIGIRLZ.",
            logo:"https://superate.org.sv/wp-content/uploads/2018/11/ms.png",
        },
        {
            id:4,
            nombre:"Hugo",
            descripcion:"hugo, a través de su iniciativa hugoImpact, impulsa el talento digital en el país con la entrega de becas para estudios superiores, talleres y charlas sobre programación, desarrollo de proyectos en el área de informática, capacitación docente, así como pasantías",
            logo:"https://superate.org.sv/wp-content/uploads/2022/05/hugo-Branding-06.jpg",
        },
        {
            id:5,
            nombre:"Applaudo",
            descripcion:"Gracias al apoyo de Applaudo, los graduados del Programa ¡Supérate! tienen acceso a su programa de entrenamiento el cual consiste en una beca remunerada con una duración de tres meses en las tecnologías más demandadas a nivel mundial: Azure, Python, Ruby on Rails, iOS, Angular, Android, React, Node.js. Al completar el programa, tendrán la oportunidad de ser seleccionados para una plaza laboral en la empresa.",
            logo:"https://superate.org.sv/wp-content/uploads/2023/01/ApplaudoNavy@3x-2048x414.png",

        },
        {
            id:6,
            nombre:"elaniin",
            descripcion:"elaniin apoya a estudiantes y graduados ¡Supérate! a través de visitas guiadas a sus intalaciones, charlas sobre temas relacionados a la industria digital y acceso a oportunidades laborales y pasantías.",
            logo:"https://superate.org.sv/wp-content/uploads/2023/01/Copia-de-Copia-de-Elaniin-Logo-768x312.png",
        }
    ]

    return(
        <FlatList
        data={aliados}
        keyExtractor={item => item.id}
        renderItem={({item}) => 
        <View style={styles.card}>
            <View style={styles.ImageContainer}>
                <Image style={styles.imagen} source={{uri: item.logo}}/>

            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{item.descripcion}</Text>
            </View>
            <TouchableOpacity>
                <Text style={{color:'#000', textAlign:'center', fontSize:20, fontWeight:'bold'}}>Ver más</Text>
            </TouchableOpacity>
 
        </View>
        }
        />
    )
}

const styles = StyleSheet.create({
    card:{
        flexDirection:'column',
        borderRadius:10,
        backgroundColor:'#f9f9f9',
        margin:10 ,
        padding:60,
        shadowColor:'#000',
        shadowOffset:{width: 0, height: 2},
        shadowOpacity:0.25,
        shadowRadius:3.84,
        elevation:5,

    },
    ImageContainer:{
        alignItems:'center',
        margin:1,

    },
    imagen:{
        margin:1,
        width:'100%',
        height: 120,

    },
    textContainer:{
        alignItems:'stretch',
        backgroundColor:'#f9f9',    
        paddingTop:10,
        
    },
    text:{
        fontSize:15,
        color:'#000',
        textAlign:'justify',
    }
})
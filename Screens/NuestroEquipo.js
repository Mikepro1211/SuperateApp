import {FlatList, View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Data  ({navigation}){
    const junta =[{
        id:1 ,
        nombre: 'Ricardo Sagrera Bogle',
        descripcion: 'Presidente y Fundador del Programa ¡Supérate! y Director Propietario por Centro ¡Supérate! Hilasal',
        image: 'https://superate.org.sv/wp-content/uploads/2022/05/rsb.jpg',
    },
    {
        id:2 ,
        nombre: 'Arturo Sagrera Palomo',
        descripcion: 'Director General Programa ¡Supérate!',
        image: 'https://superate.org.sv/wp-content/uploads/2022/05/asp.jpg',
    },
    {
        id:3 ,
        nombre: 'Jaime R. Palomo',
        descripcion: 'Director Propietario por Centro ¡Supérate! ADOC',
        logo: 'https://superate.org.sv/wp-content/uploads/2022/05/jaime_palomo.jpg',
    },
    {
        id:4 ,
        nombre: 'María Elena Fábrega',
        descripcion: 'Directora Propietaria por Centro ¡Supérate! Fundación Alberto Motta',
        image: 'https://superate.org.sv/wp-content/uploads/2022/05/mary_fabrega.jpg',
    },{
        id:5 ,
        nombre: 'Michelle De Poma',
        descripcion: 'Directora Propietaria por Centro ¡Supérate! Fundación Poma',
        image: 'https://superate.org.sv/wp-content/uploads/2022/05/michelle_de_poma.jpg',
    },
    {
        id:6 ,
        nombre: 'Mary Alice De Frech',
        descripcion: 'Directora Propietaria por Centro ¡Supérate! Merlet',
        image: 'https://superate.org.sv/wp-content/uploads/2022/05/mary_alice_siman_de_frech.jpg',
    },
    {
        id:7 ,
        nombre: 'Marci Mizrachi',
        descripcion: 'Directora Propietaria por Centro ¡Supérate! Fundación JUPÁ',
        image: 'https://superate.org.sv/wp-content/uploads/2022/05/marci_mizrachi.jpg',
    },
    {
        id:8 ,
        nombre: 'Juan F. Salaverría',
        descripcion: 'Director Propietario por Centro ¡Supérate! Grupo Q',
        image: 'https://superate.org.sv/wp-content/uploads/2022/05/juan_f_salaverria.jpg',
    },
    {
        id:9 ,
        nombre: 'María Cristina Salazar',
        descripcion: 'Directora Propietaria por Centro ¡Supérate! Fundación Provivienda',
        image: 'https://superate.org.sv/wp-content/uploads/2022/05/mcs.jpg',
    }];
    
    const equipo=[{
        id:10 ,
        nombre: 'Rodrigo Bustamante',
        descripcion: 'Director Ejecutivo Programa ¡Supérate!',
        image: 'https://superate.org.sv/wp-content/uploads/2021/10/our_team_RB.png',
    },
    {
        id:11 ,
        nombre: 'Irene Flores',
        descripcion: 'Directora Académica Programa ¡Supérate!',
        image: 'https://superate.org.sv/wp-content/uploads/2022/05/irene_flores.jpg',
    },
    {
        id:12 ,
        nombre: 'Leyla De Guzmán',
        descripcion: 'Directora de Operaciones Programa ¡Supérate!',
        logo: 'https://superate.org.sv/wp-content/uploads/2022/05/leyla_guzman.jpg',
    },
    {
        id:13 ,
        nombre: 'Saraí Aguilar',
        descripcion: 'Administradora Contable Programa ¡Supérate!',
        image: 'https://superate.org.sv/wp-content/uploads/2022/05/sarai_aguilar.jpg',
    },{
        id:14 ,
        nombre: 'Rodrigo Castro',
        descripcion: 'Coordinador de Proyectos y Comunicaciones Programa ¡Supérate!',
        image: 'https://superate.org.sv/wp-content/uploads/2022/05/rodrigo_castro.jpg',
    }
    ];

    const renderItem = ({ item }) => {
        return (
            <View style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text style={styles.nombre}>{item.nombre}</Text>
              <Text style={styles.descripcion}>{item.descripcion}</Text>
            </View>
        );
      };

    
      return (
        <SafeAreaView>
        <ScrollView>
        <Text style={styles.heading}>Junta Directiva</Text>
        <Text style={styles.paragraph}>Está compuesta por el presidente y representantes de los concesionarios del Programa ¡Supérate!.</Text>
        <FlatList
          data={junta}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />

        <Text style={styles.heading}>Equipo Institucional</Text>
        <Text style={styles.paragraph}>Está compuesto por el Director Ejecutivo, Directora Académica, Directora de Operaciones, 
        Administradora Contable y Coordinador de Proyectos y Comunicaciones.</Text>
        <FlatList
          data={equipo}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
        </ScrollView>
        </SafeAreaView>
    )}

    
    const styles = StyleSheet.create({
      item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      image: {
        width: 120,
        height: 120,
        borderRadius: 25,
      },
      nombre: {
        fontSize: 16,
        fontWeight: 'bold',
        alignContent:"center",
        marginLeft: 10,
        padding:5
      },
      descripcion: {
        fontSize: 14,
        marginLeft: 10,
        padding: 5,

      },
      card:{
        backgroundColor:"#fff",
        padding: 15,
        alignItems:"center",
        justifyContent:"center",
        shadowColor:"#000",
        shadowOffset:{width: 0, height:10},
        shadowOpacity:0.2,
        shadowRadius:10,
        marginTop:20,
      },
      heading: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft:10,
        color:'darkturquoise',
      },
      paragraph: {
        marginTop: 10,
        fontSize: 17,
        marginLeft:10,
        flexDirection:"row"
    },
    });
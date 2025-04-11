import { StyleSheet, View, Text, Image, ScrollView, ImageBackground, TouchableOpacity } from "react-native";
import Navbar from './navbar';
import { useRouter } from 'expo-router';

const categories = [
    { id: 1, name: 'Plumbing', logo: require('../Pictures/Plumbing_Logo.png') },
    { id: 2, name: 'Electrical', logo: require('../Pictures/Electrical_logo.jpg') },
    { id: 3, name: 'Carpentry', logo: require('../Pictures/Carpentry_logo.jpg') },
    { id: 4, name: 'Painting & Finishing', logo: require('../Pictures/Painting_logo.jpg') },
    { id: 5, name: 'Flooring', logo: require('../Pictures/Flooring_logo.jpg') },
    { id: 6, name: 'Roofing & Gutters', logo: require('../Pictures/Roofing_logo.jpg') },
    { id: 7, name: 'Appliances Repairs', logo: require('../Pictures/Appliances_logo.jpg') },
    { id: 8, name: 'Home Safety & Security', logo: require('../Pictures/Safety_logo.jpg') },
    { id: 9, name: 'Heating, Ventilation, and Air Conditioning', logo: require('../Pictures/HVAC_logo.jpg') },
  ];

  type CategoryKey =
  | 'plumbing'
  | 'electrical'
  | 'carpentry'
  | 'paintingFinishing'
  | 'flooring'
  | 'roofingGutters'
  | 'appliancesRepairs'
  | 'homeSafetySecurity'
  | 'hvac';


  const categoryMap: Record<string, CategoryKey> = {
    'Plumbing': 'plumbing',
    'Electrical': 'electrical',
    'Carpentry': 'carpentry',
    'Painting & Finishing': 'paintingFinishing',
    'Flooring': 'flooring',
    'Roofing & Gutters': 'roofingGutters',
    'Appliances Repairs': 'appliancesRepairs',
    'Home Safety & Security': 'homeSafetySecurity',
    'Heating, Ventilation, and Air Conditioning': 'hvac'
  };

const HomeScreen = ()=> {

    const router = useRouter();

    const handleCategoryPress = (categoryName: string) => {
        const key = categoryMap[categoryName]; // get the correct key like 'paintingFinishing'
        if (key) {
          router.push(`/categoriesScreen?category=${key}`);
        }
      };
      

    return(
        <View style={styles.root}>
            <ImageBackground source={require('../Pictures/apk_background_photo.jpg')} style={styles.background}>
                <Navbar />
                <View style={styles.container}>
                    <ScrollView>
                        {categories.map((category, key) => (
                            <TouchableOpacity 
                            key={category.id}
                            style={styles.categoriesLink}
                            onPress={()=> handleCategoryPress(category.name)}>
                                <View key={key} style={styles.categoryContainer}>
                                <View style={styles.categoryBorder}>
                                    <Image source={category.logo} style={styles.categoryLogo}/>
                                </View>
                                <Text>{category.name}</Text>
                                </View>
                            </TouchableOpacity>))}
                    </ScrollView>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    root: { flex: 1 },
    background: {
        flex: 1,
        alignItems: 'center',
    },
    container: {
        alignItems: 'center',
        height: 640,
        width: 338,
        padding: 20,
        borderWidth: 1,
        borderColor: '#000',
        marginBottom: 15
    },
    categoriesLink: {
        marginBottom: 20,
        borderRadius: 20,
        elevation: 10,
    },
    categoryContainer: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        height: 200,
        borderRadius: 20,
    },
    categoryBorder: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 50,
        backgroundColor: '#D3D3D3',
        marginBottom: 10,
    },
    categoryLogo: {
        width: 100,
        height: 100,
        borderRadius: 50,
    }

});

export default HomeScreen;
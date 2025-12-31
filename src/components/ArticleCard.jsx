import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import { Bookmark } from 'lucide-react-native';

const ArticleCard = () => {
  const [fontsLoaded] = useFonts({
    BB: require('../../assets/fonts/BB.ttf'),
    SmallBunny: require('../../assets/fonts/SmallBunny.otf'),
  });

  if (!fontsLoaded) return null;

  return (
    <View style={styles.shadowWrapper}>
      <View style={styles.cardWrapper}>
        <ImageBackground
          source={require('../../assets/images/image.jpg')}
          style={styles.imageBackground}
          imageStyle={styles.imageRadius}
        >
          {/* top */}
          <LinearGradient
            colors={[
              'rgba(245,245,245,0.95)',
              'rgba(245,245,245,0.6)',
              'rgba(245,245,245,0)',
            ]}
            locations={[0, 0.5, 1]}
            style={styles.topFog}
          />

          <View style={styles.topRow}>
            <View style={styles.brandRow}>
              <Text style={styles.fancyText}>Leap</Text>
              <Text style={styles.brandText}> Articles</Text>
            </View>

            <TouchableOpacity style={styles.saveBadge} activeOpacity={0.85}>
              <Bookmark size={18} color="#000" strokeWidth={2} />
              <Text style={styles.saveText}> Save</Text>
            </TouchableOpacity>
          </View>

          {/* bottom */}
          <LinearGradient
            colors={[
              'rgba(72,72,72,0)',
              'rgba(80,80,80,0.4)',
              'rgba(80,80,80,0.75)',
              'rgba(80,80,80,0.97)',
            ]}
            locations={[0, 0.4, 0.7, 1]}
            style={styles.bottomFog}
          >
            <Text style={styles.mainTitle}>DFM (fetal movement)</Text>
          </LinearGradient>
        </ImageBackground>
      </View>
    </View>
  );
};

export default ArticleCard;

const styles = StyleSheet.create({
  shadowWrapper: {
    marginVertical: 14,
    borderRadius: 24,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 12 },
    elevation: 10,
  },

  cardWrapper: {
    height: 220,
    borderRadius: 24,
    overflow: 'hidden',
  },

  imageBackground: {
    flex: 1,
    padding: 18,
  },

  imageRadius: {
    borderRadius: 24,
  },

  topFog: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '38%',
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  fancyText: {
    fontSize: 24,
    fontFamily: 'SmallBunny',
    color: '#0B2A4A',
  },

  brandText: {
    fontSize: 16,
    fontFamily: 'BB',
    fontWeight: 'bold',
    color: '#0B2A4A',
  },

  saveBadge: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: '#E3E3E3',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },

  saveText: {
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 6,
    color: '#000',
  },

  bottomFog: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '60%',
    paddingHorizontal: 18,
    paddingBottom: 18,
    justifyContent: 'flex-end',
  },

  mainTitle: {
    fontSize: 18,
    fontFamily: 'BB',
    fontWeight: '700',
    lineHeight: 24,
    color: '#FFF',
  },
});

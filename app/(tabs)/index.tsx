import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';


export default function App() {
  const [currentStage, setCurrentStage] = useState(0);
  const [showHome, setShowHome] = useState(true);

  const stages = [
    {
      title: "Siembra",
      icon: "🌱",
      colors: ['#22c55e', '#16a34a'],
      description: "Primero hay que hacer la selección de semillas para que sean de la más alta calidad. Estas se siembran en germinadores con arena lavada durante 2 meses, luego pasan al almácigo donde crecen en bolsitas individuales por otros 6 meses. Los caficultores cuidan cada plántula bajo sombra de forma controlada hasta que estas están listas para el campo.",
    },
    {
      title: "Crecimiento y Cuidado",
      icon: "☀️",
      colors: ['#eab308', '#d97706'],
      description: "Durante 3 a 4 años, los cafetos (nombre del cultivo de café) reciben cuidados. Se controlan las plagas, se fertiliza el suelo con materia orgánica y se mantiene la sombra de los otros árboles. El clima templado y los suelos ricos en nutrientes colombianos son perfectos para el desarrollo de estas plantas.",
    },
    {
      title: "Floración y Fructificación",
      icon: "💧",
      colors: ['#ec4899', '#e11d48'],
      description: "Las flores blancas de los cafetos aparecen en las ramas. Cada flor tarda aproximadamente 5 meses en formarse y florece después de las lluvias. Estas flores se convierten en frutos verdes que maduran por 9 meses, pasando de verde a amarillo, y por último a rojo cuando están listos para cosechar.",
    },
    {
      title: "Cosecha",
      icon: "✂️",
      colors: ['#ef4444', '#b91c1c'],
      description: "Por lo general la cosecha es manual y selectiva, solo se recogen los frutos rojos maduras. Este garantiza la máxima calidad de cada fruto. Colombia tiene dos cosechas principales: una de abril a junio y la otra de septiembre a noviembre, cosechando café fresco para todo el año.",
    },
    {
      title: "Despulpado y Fermentación",
      icon: "🔬",
      colors: ['#a855f7', '#7c3aed'],
      description: "Estos frutos pasan por 'despulpadoras' que retiran la pulpa externa. Los granos con mucílago (una sustancia viscosa) se fermentan en tanques por 12-48 horas. Con este proceso las enzimas naturales eliminan el mucílago y desarrollan los sabores característicos del café.",
    },
    {
      title: "Secado",
      icon: "🌞",
      colors: ['#f97316', '#eab308'],
      description: "Los granos se secan al sol en patios o camas elevadas. Se extienden en capas delgadas y se voltean constantemente para asegurar un secado uniforme. El proceso toma de 8 a 15 días hasta alcanzar el 11% al 12% de humedad. Este nivel de humedad es imperativo para conservar el café y evitar que se mohosee.",
    },
    {
      title: "Trillado y Clasificación",
      icon: "💨",
      colors: ['#06b6d4', '#2563eb'],
      description: "En las trilladoras se elimina la cáscara que cubre el grano. Luego, máquinas clasificadoras separan los granos por tamaño, peso y densidad. Al final una inspección visual busca defectos en cada grano. Solo los mejores son usados para exportación.",
    },
    {
      title: "Tostado",
      icon: "🔥",
      colors: ['#d97706', '#ea580c'],
      description: "El tostado transforma el grano en el café que conocemos. A temperaturas de 180-250°C, los granos se expanden, cambian de color y desarrollan más de 800 compuestos químicos aromáticos. El tueste (ya sea claro, medio u oscuro) da el sabor característico del mismo.",
    },
    {
      title: "Molienda y Preparación",
      icon: "🍴",
      colors: ['#92400e', '#d97706'],
      description: "La molienda es distinta según el método, por ejemplo: gruesa para prensa francesa, fina para espresso. Todo método de preparación muestra diferentes características del café. El café por lo general se disfruta en múltiples formas, como lo son el espresso, filtrado, prensa francesa o el simple tinto de siempre.",
    },
  ];

  const HomePage = () => (
      <View style={styles.homeContent}>
        <View style={styles.iconContainer}>
          <Text style={styles.mainIcon}>☕</Text>
        </View>
        <Text style={styles.homeTitle}>Viaje del Café Colombiano</Text>
        <Text style={styles.homeSubtitle}>
          Conozcamos el proceso necesario para hacer el café en nuestra tierra

        </Text>
        <View style={styles.featuresBox}>
          <Text style={styles.featureText}>10 etapas interactivas</Text>
          <Text style={styles.featureText}>Sobre como hacemos nuestro café</Text>
          <Text style={styles.featureText}>Proyecto realizado como proyecto final del Semillero de Ingeniería de la UdeA</Text>
        </View>
        <TouchableOpacity
          style={styles.startButton}
          onPress={() => setShowHome(false)}
          activeOpacity={0.8}
        >
          <LinearGradient
            colors={['#d97706', '#ea580c']}
            style={styles.buttonGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={styles.startButtonText}>Comenzar</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
  );

  const StageView = () => {
    const stage = stages[currentStage];
    const progress = ((currentStage + 1) / stages.length) * 100;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <Text style={styles.progressText}>
              {currentStage + 1} / {stages.length}
            </Text>
          </View>
          <View style={styles.progressBarContainer}>
            <View style={[styles.progressBar, { width: `${progress}%` }]} />
          </View>
        </View>

        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
          <LinearGradient
            colors={[stage.colors[0], stage.colors[1]]}
            style={styles.stageHeader}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Text style={styles.stageIcon}>{stage.icon}</Text>
            <Text style={styles.stageTitle}>{stage.title}</Text>
          </LinearGradient>

          <View style={styles.contentCard}>
            <Text style={styles.description}>{stage.description}</Text>

          </View>
        </ScrollView>

        <View style={styles.navigation}>
          <TouchableOpacity
            onPress={() => setCurrentStage(Math.max(0, currentStage - 1))}
            disabled={currentStage === 0}
            style={[
              styles.navButton,
              currentStage === 0 && styles.navButtonDisabled,
            ]}
            activeOpacity={0.7}
          >
            <Text
              style={[
                styles.navButtonText,
                currentStage === 0 && styles.navButtonTextDisabled,
              ]}
            >
              ← Anterior
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setCurrentStage(Math.min(stages.length - 1, currentStage + 1))}
            disabled={currentStage === stages.length - 1}
            style={[
              styles.navButton,
              styles.navButtonNext,
              currentStage === stages.length - 1 && styles.navButtonDisabled,
            ]}
            activeOpacity={0.7}
          >
            <LinearGradient
              colors={currentStage === stages.length - 1 ? ['#d1d5db', '#d1d5db'] : ['#d97706', '#ea580c']}
              style={styles.navButtonGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={styles.navButtonTextNext}>Siguiente →</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return showHome ? <HomePage /> : <StageView />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafaf9',
  },
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  homeContent: {
    alignItems: 'center',
    maxWidth: 400,
  },
  iconContainer: {
    backgroundColor: 'white',
    padding: 24,
    marginTop: 180,
    marginBottom: 24,
    elevation: 8,
  },
  mainIcon: {
    fontSize: 80,
  },
  homeTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#78350f',
    textAlign: 'center',
    marginBottom: 16,
    marginHorizontal: 16,
  },
  homeSubtitle: {
    fontSize: 18,
    color: '#92400e',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 26,
    marginHorizontal: 16,
  },
  featuresBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 16,
    marginBottom: 32,
    width: '100%',
    marginHorizontal: 16,
  },
  featureText: {
    fontSize: 14,
    color: '#92400e',
    marginVertical: 4,
    marginHorizontal: 16,
    textAlign: 'center',
  },
  startButton: {
    overflow: 'hidden',
    elevation: 8,
  },
  buttonGradient: {
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  startButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  header: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
    elevation: 4,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  homeButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  homeButtonText: {
    fontSize: 14,
    color: '#d97706',
    fontWeight: '600',
  },
  progressText: {
    fontSize: 14,
    color: '#d97706',
    fontWeight: '600',
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: '#e5e7eb',
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#d97706',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 100,
  },
  stageHeader: {
    padding: 32,
    alignItems: 'center',
    marginBottom: 16,
    elevation: 8,
  },
  stageIcon: {
    fontSize: 64,
    marginBottom: 16,
  },
  stageTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  contentCard: {
    backgroundColor: 'white',
    padding: 24,
    elevation: 4,
  },
  description: {
    fontSize: 16,
    color: '#374151',
    lineHeight: 24,
    marginBottom: 24,
  },
  navigation: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    elevation: 8,
  },
  navButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: '#fef3c7',
  },
  navButtonNext: {
    backgroundColor: 'transparent',
    overflow: 'hidden',
  },
  navButtonGradient: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  navButtonDisabled: {
    backgroundColor: '#e5e7eb',
  },
  navButtonText: {
    color: '#d97706',
    fontSize: 16,
    fontWeight: 'bold',
  },
  navButtonTextNext: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  navButtonTextDisabled: {
    color: '#9ca3af',
  },
});
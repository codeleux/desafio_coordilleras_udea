import { useState } from 'react';

import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

export default function App() {
  const [ currentStage, setCurrentStage ] = useState(0);
  const [ showHome, setShowHome ] = useState(true);

  const stages = [
    {
      title: 'Stage 1',
      icon: 'imagine theres an icon here or something, could do an image too idk',
      gradient: ['#fff','#fff'],
      description: 'thou shalt describe the stage',
      images: 'i think this is pretty self explanatory',
    }
  ]

  const HomePage = () => (
    <LinearGradient colors={['#fff','#fff']}>
      <View>
        <View>
          <Text>icon decoration to make it look pretty</Text>
        </View>
        <View>
          <Text>Description of the app</Text>
        </View>
        <View>
          <Text>More description, jst make as many as u need</Text>
        </View>
        <TouchableOpacity
          onPress={() => setShowHome(false)}
          activeOpacity={0.8}
        >
            <Text>button</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  )

  const StageView = () => {
    const stage = stages[currentStage]
    const progress = ((currentStage + 1) / stages.length) * 100

    return (
      <View>
        <View>
          <View>
            <View>
              <TouchableOpacity
                onPress={() => setShowHome(true)}
              ></TouchableOpacity>
              <Text>Progress {currentStage + 1} de {stages.length}</Text>
            </View>
            <View>
              <View></View> 
              {/* this is the progress bar */}
            </View>
          </View>
        </View>

        <ScrollView>
          <LinearGradient
            colors={[stage.gradient[0], stage.gradient[1]]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Text>{stage.icon}</Text>
            <Text>{stage.title}</Text> 
          </LinearGradient>

          <View>
            <Text>{stage.description}</Text>
            {/* <Image>{stage.images}</Image> */}
          </View>
        </ScrollView>

        <View>
          <TouchableOpacity
            onPress={() => setCurrentStage(currentStage - 1)}
            disabled={currentStage === 0}
            activeOpacity={0.7}
          >
            <Text>prev stage button</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setCurrentStage(currentStage + 1)}
            disabled={currentStage === stages.length - 1}
            activeOpacity={0.7}
          >
            <Text>next stage button</Text>
          </TouchableOpacity>
          
        </View>
      </View>
      
      
    )
  }

  return showHome ? <HomePage/> : <StageView/>
}



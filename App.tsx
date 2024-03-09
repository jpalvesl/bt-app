import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { getAllCombinationsMinimizeConsecutive, makeDuos } from './src/utils/Utils';
import { DuosFormerScreen } from './src/screens/DuosFormerScreen';

const persons = [
  'João',
  'Pedro',
  'Lairton',
  'Caio',
  'Wendell',
  'Felipe',
]

const teams = makeDuos(persons)

const allCombinations = getAllCombinationsMinimizeConsecutive(teams);

console.log("Todas as combinações de jogos possíveis minimizando jogos consecutivos:");
allCombinations.forEach((round, index) => {
  console.log(`Rodada ${index + 1}:`);
  round.forEach((game, gameIndex) => {
    console.log(`Jogo ${gameIndex + 1}: ${game[0]} x ${game[1]}`);
  });
});

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <DuosFormerScreen />
    </View>
  );
}
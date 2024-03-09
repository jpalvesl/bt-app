import { useState } from "react"
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

function DuosFormerScreen() {
  const [persons, setPersons] = useState(['a', 'b'] as string[]);

  function handleAddNewPerson() {
    setPersons([...persons, ''])
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Formar duplas</Text>
        <TouchableOpacity onPress={handleAddNewPerson}>
        <Text style={styles.plusButton}>+</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        {persons.map((person, idx) => (
          <View style={styles.linePerson}>
            <TextInput 
              key={`${person}-${idx}`}
              value={person}
              style={styles.inputPerson}
            />
            <TouchableOpacity>
              <Text>Lixo</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <View style={{ width: '100%' }}>
        <TouchableOpacity style={styles.confirmButton}>
          <Text>Formar duplas</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
  },
  header: {
    marginTop: 40,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#00f'
  },
  headerText: {
    fontSize: 24
  },
  plusButton: {
    fontSize: 24,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#f00',
    // color: '#fff'
  },
  linePerson: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    marginHorizontal: 8
  },
  inputPerson: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#0f6798',
    marginTop: 8,
  },
  confirmButton: {
    height: 50,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
})

export { DuosFormerScreen }
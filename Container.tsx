import React, { ReactNode } from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {children}
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B3E5FC'
  }
})

export default Container